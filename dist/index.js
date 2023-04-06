define("@scom/scom-bit-keep-wallet", ["require", "exports", "@ijstech/eth-wallet", "@ijstech/components"], function (require, exports, eth_wallet_1, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let moduleDir = components_1.application.currentModuleDir;
    function fullPath(path) {
        if (path.indexOf('://') > 0)
            return path;
        return `${moduleDir}/${path}`;
    }
    class BitKeepWalletProvider extends eth_wallet_1.EthereumProvider {
        get displayName() {
            return 'BitKeep Wallet';
        }
        get image() {
            return fullPath('img/BitKeep.png');
        }
        get provider() {
            return window['bitkeep']['ethereum'];
        }
        get homepage() {
            return 'https://bitkeep.com/download?type=2';
        }
        installed() {
            return !!window['isBitKeep'];
        }
    }
    exports.default = BitKeepWalletProvider;
});
