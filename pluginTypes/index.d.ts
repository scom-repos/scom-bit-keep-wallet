/// <amd-module name="@scom/scom-bit-keep-wallet" />
declare module "@scom/scom-bit-keep-wallet" {
    import { EthereumProvider } from '@ijstech/eth-wallet';
    export default class BitKeepWalletProvider extends EthereumProvider {
        get displayName(): string;
        get image(): string;
        get provider(): any;
        get homepage(): string;
        installed(): boolean;
    }
}
