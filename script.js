const fromCurrency = document.getElementById("from-currency");
const toCurrency = document.getElementById("to-currency");
const resultDiv = document.getElementById("result");

const currencies = ["USD", "INR", "EUR", "GBP", "JPY", "AUD"];

currencies.forEach((currency) => {
  const option1 = document.createElement("option");
  const option2 = document.createElement("option");
  option1.value = option2.value = currency;
  option1.text = option2.text = currency;
  fromCurrency.appendChild(option1);
  toCurrency.appendChild(option2);
});

fromCurrency.value = "USD";
toCurrency.value = "INR";

async function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (amount === "" || isNaN(amount)) {
    alert("Please enter a valid amount");
    return;
  }

  const apiUrl = `https://api.exchangerate-api.com/v4/latest/${from}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const rate = data.rates[to];
    const convertedAmount = (amount * rate).toFixed(2);
    resultDiv.innerText = `${amount} ${from} = ${convertedAmount} ${to}`;
  } catch (error) {
    resultDiv.innerText = "Error fetching exchange rate.";
  }
}
