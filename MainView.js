var Share = require("FuseJS/Share")
var SignatureModule = require("SignatureModule");

//Signature
	function save() {
		sp.save("signature.png");

		setTimeout(function() {
			getPath();
		}, 500);
	}

	function clear() {
		Mysign.clear();
	}

	function getPath() {
		console.log("Path from JS: " + SignatureModule.GetPath('sp'));
		Share.shareFile(SignatureModule.GetPath('sp'), "image/*", "SavePanel1 from Fuse");
	}

//Save custom Panel
	function saveCustomPanel1() {
		//Save panel
		SavePanel1.save("SavePanel1.png");

		setTimeout(function() {
			shareCustomPanel();
		}, 500);
	}

	function shareCustomPanel() {
		console.log("Path from JS: " + SignatureModule.GetPath('SavePanel1'));
		Share.shareFile(SignatureModule.GetPath('SavePanel1'), "image/*", "SavePanel1 from Fuse");
	}

module.exports = {
	save: save,
	clear: clear,
	getPath: getPath,
	saveCustomPanel1: saveCustomPanel1
}