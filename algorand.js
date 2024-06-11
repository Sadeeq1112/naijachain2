const algosdk = require('algosdk');

const token = "";
const server = "https://testnet.algoexplorerapi.io";
const port = "";

let algodClient = new algosdk.Algodv2(token, server, port);
async function printAlgodStatus() {
    try {
        let status = await algodClient.status().do();
        console.log(status);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}
printAlgodStatus();