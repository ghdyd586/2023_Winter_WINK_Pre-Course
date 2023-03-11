let inputCount = 0;
const TOTAL = 2;
function handleInput(event){
    const button = document.querySelector("#log_btn");
    if (event.target.value === "") inputCount -=1;
    else inputCount+=1;

    if (inputCount === TOTAL){
        button.style.backgroundColor = "#0095F6";
        button.style.cursor="pointer";
    }
    else{

        button.style.backgroundColor = "#4DB5F9";
    }
}