const input = document.querySelector("#text-Input")
const NairaInput = document.querySelector("#NN")
const DollarInput = document.querySelector("#DD")
const btn = document.querySelector("#btn")
const h3 = document.createElement("h3") 

const Exchange = async ()=> {
    const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    const ExtoJAva = await response.json()
}