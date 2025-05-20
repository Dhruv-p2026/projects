let b1 = document.querySelector("button");
let textfield = document.querySelector("#usdAmount");
let container = document.querySelector("#result");

b1.addEventListener("click",
    ()=>{

    let str = textfield.value;
    let num = parseFloat(str);
    if (str ==="" || num < 0)
    {
        alert("Enter the valid input");
        return;

    }
    fetchAmount(num);

    }

)
function fetchAmount(num)
{
 fetch("https://api.exchangerate-api.com/v4/latest/USD")
 .then((response)=>{return response.json()})
 .then((data)=>{
    let{rates } = data ;
    let totalAmount = rates.INR * num;
    container.textContent =`Total Amount is ${totalAmount} Rs`
 })
.catch((error)=>{console.log(error)});

}