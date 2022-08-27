
import { ethers } from "ethers";

const provider = new ethers.getDefaultProvider()
const signer = provider.getSigner()

const smartContractAddress = "0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c"
const bscABI = [
    "balanceOf(address) view returns (uint256)"
]

async function readDataFromSmartContract() {
    const bscContract = new ethers.Contract(smartContractAddress, bscABI, provider) 

    const balance = await bscContract.balanceOf("0x123d475e13aa54a43a7421d94caa4459da021c77")

    console.log(`0x123d475e13aa54a43a7421d94caa4459da021c77 ${balance}`)
}

readDataFromSmartContract()