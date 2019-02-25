using Uno;
using Uno.Collections;
using Fuse;
using Fuse.Node;
using Fuse.Scripting;
using Uno.UX;

[UXGlobalModule]
public class SignatureJS : NativeModule
{
	static readonly SignatureJS _instance;
	internal static Dictionary<string, SavePanel> SavePanels = new Dictionary<string, SavePanel>();

	public SignatureJS()
	{
		if (_instance != null) return;
		_instance = this;
		
		Resource.SetGlobalKey(_instance,"SignatureModule");
		
		AddMember(new NativeFunction("GetPath",(NativeCallback)GetPath));
	}

	static object GetPath(Context c, object[] args)
	{
		var name = args[0] as string;
			
		SavePanel sp;
		if(SavePanels.TryGetValue(name,out sp))
		{
			return sp.GetPath();
		}
		else
		{
			throw new Exception("Can't find save panel with name: " + name);
		}
	}
}