const input = document.querySelector("#input");
const maxInput = document.querySelector("#max-input");
const submit = document.querySelector('.submit');
const reset = document.querySelector('.reset');
const progressBar = document.querySelector('.progress-bar');
const message = document.querySelector('.message');
const text = document.querySelector('#text');

let inputValue = 0;
let maxValue = 0;
let result;

const changeWidth = ()=>{
   
    progressBar.style.width = `${result}%`;
    text.innerHTML = `${(result)}%`;

    setTimeout(()=>{
        if(result < 40){
            message.innerHTML =`Keep pushing hard`;
            text.style.color = 'black';
        }
        else if(result>=40 && result <60){
            message.innerHTML = `A quite good score. But you can improve`;
            text.style.color = 'black';
        }
        else if(result<=60 && result <80){
            message.innerHTML = `You almost there!!!`;
            text.style.color = 'white';
        }
        else{
            message.innerHTML = `Congratulations!!!!!`;
            text.style.color = 'white';
        }
    },1500);


}

submit.addEventListener('click',()=>{
    inputValue = parseInt(input.value,10);
    maxValue = parseInt(maxInput.value,10);
    result=((inputValue/maxValue)*100);

    if(inputValue<0){
        alert(`Input can't be negative`);
    }
    else if(inputValue>maxValue){
        alert(`Input can't be greater than maximum range`);
    }

    changeWidth();

});
reset.addEventListener('click',()=>{
    input.value = "";
    maxInput.value = "";
    progressBar.style.width = 0;
    message.innerHTML = "";
});

//progress status
//error alert at message