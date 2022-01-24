require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile provide gesture forest flip text'; 
let testAccounts = [
"0xeacec87c3f60b3b4ff0246200495055a358df20e11fab215ddc17409437a45a9",
"0x9401b25fd2360accb772b0e3184e563e134788753114db782eee73e46079c659",
"0x4aff3009a22411c1bb25d218259a3ed40aaa3e46789498fb5b40541d0b3dca42",
"0xb3531758b5ddc5f48c59303aec5ab5415b70f7e54d24c711f230f69966f09429",
"0x43bd4144bac347103917c6d1081a7930699ae7de524176f1b377c53de8c2c96d",
"0x368e36b504831cac6770242ab0b06f4deef8848614fb4bb7d4e6aa494513d9d0",
"0x0adb6c512b7464d91acff529c322c3a96d302adbcbb51384e837a22fed885ab8",
"0x741721aa7f5718db520647a94148ea9e893e2b3412ab542470db8ad55f3d6126",
"0xa7f3469de7ebfc0994e3b33d534652ca1a15917e6bcb0541694067f90ebcc899",
"0x936c17004130cfe32bccb7b2f08a258336adb2a9f2dc882d2eda3900609017ee"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


