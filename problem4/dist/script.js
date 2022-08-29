import {ethers} from "https://cdn-cors.ethers.io/lib/ethers-5.5.4.esm.min.js"


const provider = new ethers.providers.Web3Provider(window.ethereum)
let signer 

//Connect to Metamask
async function connectMetaMask() {
    await provider.send("eth_requestAccounts", [])

    signer = await provider.getSigner()

    //console.log("Account address:", await signer.getAddress())
}

connectMetaMask()

const smartContractAddress = "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c"
const bscJsonABI = [
    {
        "type": "function",
        "name": "balanceOf",
        "constant": false,
        "payable": false,
        "inputs": [
          { "type": "address", "name": "from" },
        ],
        "outputs": [{"internalType":"uint256","name":"","type":"uint256"}]
    }
]

const bscABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_lockProxyAddress","type":"address"}],"name":"initalize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"lockProxyAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]




async function readDataFromSmartContract() {
    const bscContract = new ethers.Contract("0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c",bscABI, provider) 

    const balance = await bscContract.balanceOf("0x123d475e13aa54a43a7421d94caa4459da021c77")

    console.log(`0x123d475e13aa54a43a7421d94caa4459da021c77 ${balance}`)
    console.log(`0x0020c5222a24e4a96b720c06b803fb8d34adc0af ${balance}`)
    console.log(`0xfe808b079187cc460f47374580f5fb47c82b87a5 ${balance}`)
}

readDataFromSmartContract()
