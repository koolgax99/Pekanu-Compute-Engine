# Pekanu-Compute-Engine
A computational website to perform various deterministic computation without a trusted third party.

Link to paper: https://ieeexplore.ieee.org/document/9406033


Fair payment is a means of achieving some level of confidence in a transaction, and this architecture is already being employed by multiple cloud platforms in the current environment. This project proposes blockchain based solution which is zero knowledge proof free and aims to achieve robust fairness for both the users and the workers.


## ARCHITECTURE FOR BLOCKCHAIN-BASED FAIR PAYMENT SYSTEM:

<p align="center">
  <img src="https://user-images.githubusercontent.com/93195979/194738849-8a811686-e167-4786-996a-c7a4522c43a8.png" />
</p>


1- The cloud storage server S-CSP* deploys the server contract ServerContract to blockchain.

2- The client registers in the cloud deduplication system for payment.

3- The cloud storage server S-CSP responds to the client’s registration request, authorizes the client, and writes the client’s address into the blockchain.

4- The cloud storage server S-CSP sends the registered transaction number, S-CSP contract address, contract ABI, and client contract code to the client through a secure channel.

5- The client requests to upload files to the cloud storage server S-CSP.

6- The cloud storage server S-CSP returns the payable to the client according to the request of the client through a secure channel.

7- Before making payment, the client checks whether the registration is successful or not according to the registered transaction number.

8- The client checks whether the ethereum account has enough funds to pay.

9- The client initiates the payment.

10- S-CSP obtains TxId of payment transaction information through ethereum smart contract.

11- After the cloud storage server confirms receipt of payment, it returns the transaction receipt for the client.

12- The cloud storage server S-CSP performs file uploading.

13- The cloud storage server S-CSP returns the signature σ and the link pointer L to the file.

14- When the cloud storage server S-CSP has a malicious situation, the client can initiate a penalty transaction fine to get a penalty.


*S-CSP stands for Server Content Security Policy
