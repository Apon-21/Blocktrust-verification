# BlockTrust

**Blockchain-based Academic Credential Verification System**

BlockTrust provides a tamper-proof, decentralized way to verify academic certificates.  
Designed for universities, scholarship committees, and employers, it ensures instant, immutable verification without relying on centralized authorities.

---

## 🔹 Features

- ✅ **Immutable Records:** All certificates stored on Ethereum Sepolia Testnet.  
- ✅ **Instant Verification:** Anyone can verify certificates via the web app.  
- ✅ **No Wallet Required:** Read-only access using public RPC (MetaMask optional).  
- ✅ **CV & Research Ready:** Full Web3 system design showcased.

---

## 🔹 Tech Stack

- **Smart Contract:** Solidity (Ethereum)  
- **Blockchain Network:** Sepolia Testnet  
- **Frontend:** HTML, CSS, JavaScript  
- **Blockchain Interaction:** ethers.js via Public RPC  
- **Hosting:** Vercel (frontend)

---

## 🔹 How It Works

1. **Admin Issues Certificates**  
   Smart contract stores certificate ID, student name, course, and timestamp.

2. **Verification by Anyone**  
   User enters Certificate ID in the frontend → contract is queried via public RPC → displays name, course, and issue date.

3. **Immutable & Decentralized**  
   Certificates cannot be altered, deleted, or forged.

---

## 🔹 Deployment

1. Upload repository to GitHub: `blocktrust-verification`  
2. Deploy frontend folder on **Vercel**  
3. Deploy smart contract on Sepolia Testnet  
4. Update `frontend/app.js` with deployed contract address  
5. Live demo ready – no additional setup required

---

## 🔹 Architecture

```mermaid
graph TD
User --> BlockTrust_WebApp
BlockTrust_WebApp --> Public_RPC
Public_RPC --> Ethereum_Blockchain
Ethereum_Blockchain --> BlockTrust_SmartContract
BlockTrust_SmartContract --> BlockTrust_WebApp
BlockTrust_WebApp --> User
