const ethers = require("ethers");
const axios = require("axios");

const baseUrl = "https://api.immersve.com";
const log = (...data) => {
  console.log.apply(null, data);
};

// Create a wallet to sign the message with
const privateKey = ""; //TODO: Set Private key here
const walletAddress = ""; //TODO: Set wallet address here
const chainId = 137; //. Chain id Reference: https://chainlist.org/

const wallet = new ethers.Wallet(privateKey);
const clientInstance = axios.create({ baseURL: baseUrl });

const signIn = async () => {
  const getSignInChallenge = await clientInstance.post(
    "/siwe/generate-challenge",
    {
      walletAddress,
      chainId,
    }
  );
  const challenge = getSignInChallenge.data;
  const signature = await wallet.signMessage(challenge);
  const output = { message: challenge, signature: signature };
  log(JSON.stringify(output));
};

signIn();
