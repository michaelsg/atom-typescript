///ts:ref=globals
/// <reference path="../../globals.ts"/> ///ts:ref:generated
var packageName = 'atom-typescript';
function getConfig(name) {
    return atom.config.get(packageName + '.' + name);
}
var Config = (function () {
    function Config() {
        this.schema = {
            debugAtomTs: {
                title: 'Debug: Atom-TypeScript. Please do not use.',
                type: 'boolean',
                default: false
            }
        };
    }
    Object.defineProperty(Config.prototype, "debugAtomTs", {
        get: function () { return getConfig('debugAtomTs'); },
        enumerable: true,
        configurable: true
    });
    return Config;
})();
var config = new Config();
module.exports = config;
