import {ethers} from "ethers";


function validateAddress(address){
    const valid = ethers.utils.isAddress(address)
    return valid
}

function validateOTP(otp){
    return true
}



function validate(address,otp){
    const addressValid = validateAddress(address)
    const optValid = validateOTP(otp)

    if(addressValid && optValid)
    {
        alert("Token sent")
    }else{
        alert("Invalid OTP or Address")
    }
}


document.getElementById("btn-submit").addEventListener("onclick",(event)=>{
    const address = document.getElementById("input-address").textContent
    const otp = document.getElementById("input-otp").textContent
    validate(address, otp)
})
 