require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arm bubble tooth fan repeat magic minor gloom another army gentle'; 
let testAccounts = [
"0x464ea7599acc4907d26b3083d00755a6af8e68917c1ba1193a690a4807af0483",
"0xfc2b40db9bdc67cc25bf98f240f0570242f2a288b35b314648fe5c736cb1a56c",
"0xbd6a0652bd26f546f154a98e9634f13b2f3c475adf0f141eb8d3ddaeb791033a",
"0x6ad878b823e1e3a868ce9a8c8cac22b91539797409944c6db9e343c4d9c51186",
"0xa0131180c800d115cf120f30fc80ea3fb7d8ca056f5cbe46a31250d663b81326",
"0x8ef9b3b201267e995e84d3f335e7bee314c23b951d4ce69f147ef6217920165d",
"0x535bf3a154c29898af462011d4e10baaf1fd338f0420033c049e404dc69b8a4a",
"0x2744f992a205a7afb33ae261a829625ce8bc1cc3fd77a9f3bdb2023a233a01dc",
"0x93e78bca638d37f03dc6168c263d40dd975c5857070cd1cf910069f680a4a1ef",
"0x492ac68d2143d66b7c622a8a7ed8c374310b5ccd2625d4f561a141665fd2fbe9"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
