import {ethers} from "https://cdn-cors.ethers.io/lib/ethers-5.5.4.esm.min.js"

const address = document.getElementById("input-address")
const amount = document.getElementById("input-amount")
const otp = document.getElementById("input-otp")
const form = document.getElementById("transaction_form")
const errorAddress = document.getElementById("errorAddress")
const errorAmount = document.getElementById("errorAmount")
const errorOTP = document.getElementById("errorOTP")

let randomOTP = ""

for(let i = 0; i < 6; i++)
{
  const randomNumber = Math.floor(Math.random() * 10)
  randomOTP += `${randomNumber}`
}

console.log(randomOTP)

form.addEventListener("submit", (event) => {
    if(amount.value <= 0)
    {
      event.preventDefault()
      errorAmount.innerHTML = "Please select an amount greater than 0"
      errorAmount.style.visibility = "visible"
      errorAmount.style.color = "red"
    }
    else if(address.value === '' || address.value === null || ethers.utils.isAddress(address.value) === false)
    {
      event.preventDefault()
      errorAddress.innerHTML = "Please enter a valid ETH address"
      errorAddress.style.visibility = "visible"
      errorAddress.style.color = "red"
    }
    else if(otp.value !== randomOTP)
    {
      event.preventDefault()
      errorOTP.innerHTML = "Wrong OTP!"
      errorOTP.style.visibility = "visible"
      errorOTP.style.color = "red"
    }
    else{
      sessionStorage.setItem(address.value, amount.value);
      alert("Your request is being processed, an email will be sent to you after successful withdrawl")
      location.reload()
    }  
})