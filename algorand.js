const algosdk = require('algosdk');

// Existing account address
const existingAccountAddress = 'CWZXT4WQRP4IUEWQB6SJ4CT2MS5IMTBPS5CZKHWXM3RUPHRU5Z3OH5DJPE';
console.log("Account Address:", existingAccountAddress);

// Replace these values with your own token, server, and port
const token = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
const server = 'http://localhost';
const port = '4001';

// Instantiate the Algorand client
const algodClient = new algosdk.Algodv2(token, server, port);

// Check account balance
(async () => {
  const accountInfo = await algodClient.accountInformation(existingAccountAddress).do();
  console.log("Account balance:", accountInfo.amount);
})().catch(e => {
  console.error(e);
});
