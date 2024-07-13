import { SwapSDK } from "@chainflip/sdk/swap";

const sdk = new SwapSDK({ network: 'perseverance' });

// console.log(await sdk.getAssets());

 
const quoteRequest = {
  srcChain: 'Ethereum',
  destChain: 'Ethereum',
  srcAsset: 'ETH',
  destAsset: 'FLIP',
  amount: (1e18).toString(), 
  // brokerCommissionBps: 100, // 100 basis point = 1%
  // affiliateBrokers: [
  //   { account: "cFM8kRvLBXagj6ZXvrt7wCM4jGmHvb5842jTtXXg3mRHjrvKy", commissionBps: 50 }
  // ],
} as const;

const quote = await sdk.getQuote(quoteRequest);

const channel = await sdk.requestDepositAddress({
  ...quoteRequest,
  destAddress: '.........',
})

console.log(channel);
// deposit address will be genertaed after with above request

const channelId = '1713859-Ethereum-6';

const depositAddress =  '.........';

const status = await sdk.getStatus({ id: channelId });

console.log(status);