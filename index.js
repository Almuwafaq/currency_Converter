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
const BaseExchange = async () => {
    const response = await fetch("https://api.frankfurter.app/latest?from=ZAR");
    const ExtoJAva = await response.json();
    const zarValue = ExtoJAva;
    return zarValue.base;
  };
  const BaseDOllARexchange = async () => {
    const response = await fetch("https://api.frankfurter.app/latest?from=USD");
    const toJAva = await response.json();
    const dollValue = toJAva;
    return dollValue.base;
  };
ZARAN.addEventListener("click", async () => {
  let ranValue = await Exchange();
  let ZArbased = await BaseExchange()
  btn.addEventListener("click", async () => {
    h3.textContent = input.value * ranValue + ZArbased;
    input.value = ""
  });
});

Dollar.addEventListener("click", async () => {
    let Dollbased = await BaseDOllARexchange() 
  let dollarValue = await DOllARexchange();
  btn.addEventListener("click", async () => {
    h3.textContent = input.value * dollarValue +  Dollbased;
    input.value = ""
  });
});

