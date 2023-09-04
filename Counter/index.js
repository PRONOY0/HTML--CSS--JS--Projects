let CountValue = document.getElementById("counter");


const increment = () =>{
    let value = CountValue.innerText;
    value = Number.parseInt(value);
    value = value + 1;
    CountValue.innerText = value;
}



const decrement = () =>{
    let value = CountValue.innerText;
    value = Number.parseInt(value);
    value = value - 1;
    CountValue.innerText = value;
}