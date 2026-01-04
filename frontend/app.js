// CHANGE ONLY THIS ADDRESS AFTER CONTRACT DEPLOY
const contractAddress = "0x0000000000000000000000000000000000000000";

const abi = [
  "function verifyCertificate(string) view returns (string,string,uint256,bool)"
];

// Public Sepolia RPC (no MetaMask needed)
const provider = new ethers.providers.JsonRpcProvider(
  "https://rpc.sepolia.org"
);

const contract = new ethers.Contract(contractAddress, abi, provider);

async function verify() {
  const certId = document.getElementById("certId").value;

  try {
    const data = await contract.verifyCertificate(certId);
    document.getElementById("result").innerHTML =
      `<p>Name: ${data[0]}</p>
       <p>Course: ${data[1]}</p>
       <p>Issued: ${new Date(data[2]*1000).toDateString()}</p>`;
  } catch {
    document.getElementById("result").innerText = "Certificate not found";
  }
}
