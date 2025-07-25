const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues(){
   const inputCurrencyValue = +document.querySelector("#input-value").value
   const currencyValueConvert = document.querySelector(".currency-value-to-convert")
   const currencyValueConverted = document.querySelector(".currency-value")

   const dolarToday = 5.2
   const euroToday = 6.2
   const convertedValue = inputCurrencyValue / dolarToday


   if (currencySelect.value === "dolar") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
       style: "currency",
       currency: "USD"
   }).format(convertedValue)
   }

   if (currencySelect.value === "euro") {
      currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
         style: "currency",
         currency: "EUR"
      }).format(inputCurrencyValue / euroToday)
      
   }


   currencyValueConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
       style: "currency",
       currency: "BRL"
   }).format(inputCurrencyValue)

   console.log(currencySelect.value)
}




function changeCurrency(){
   const currencyName = document.getElementById("dolar")
   const currencyImage = document.querySelector("#dolar-americano")

   if (currencySelect.value === "dolar") {
      currencyName.innerHTML = "Dólar americano"
      currencyImage.src = "./assets/estados-unidos (1) 1.png"
   }
   if (currencySelect.value === "euro") {
      currencyName.innerHTML = "Euro"
      currencyImage.src = "./assets/euro.png"
   }

   convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)


