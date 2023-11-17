const input = document.querySelector("#text-Input");
const ZARAN = document.querySelector("#NN");
const Dollar = document.querySelector("#DD");
const btn = document.querySelector("#btn");
const h3 = document.querySelector("h3");

const Exchange = async () => {
  const response = await fetch("https://api.frankfurter.app/latest?from=ZAR");
  const ExtoJAva = await response.json();
  const zarValue = ExtoJAva;
  return zarValue.rates.USD;
};
const DOllARexchange = async () => {
  const response = await fetch("https://api.frankfurter.app/latest?from=USD");
  const toJAva = await response.json();
  const dollValue = toJAva;
  return dollValue.rates.ZAR;
};
ZARAN.addEventListener("click", async () => {
  let ranValue = await Exchange();
  btn.addEventListener("click", async () => {
    h3.textContent = input.value * ranValue;
  });
});

Dollar.addEventListener("click", async () => {
  let dollarValue = await DOllARexchange();
  btn.addEventListener("click", async () => {
    h3.textContent = input.value * dollarValue;
  });
});
// btn.addEventListener('click', async () =>{
//     let value =
// })

// const api = fetch("https://api.frankfurter.app/latest?from=USD")
// const apis = ()=> {
//     api
//    .then((res)=> res.json() )
//    .then((result)=> console.log(result))
// }
// apis()
