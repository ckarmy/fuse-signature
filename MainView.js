var SignatureModule = require("SignatureModule");

function save() {
	sp.save("test.png");
}

function clear() {
	Mysign.clear();
}

function getPath() {
	console.log("Path from JS: " + SignatureModule.GetPath('sp'));
}

module.exports = {
	save: save,
	clear: clear,
	getPath: getPath
}