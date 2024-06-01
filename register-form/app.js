let form = document.querySelector(".form");
let nextPage = document.querySelector(".next-page");
let container = document.querySelector(".container");

let btn = document.querySelector("button");


let inrCr1 = document.querySelector("#inrCr1");
let otrCr1 = document.querySelector("#otrCr1");

let inrCr2 = document.querySelector("#inrCr2");
let otrCr2 = document.querySelector("#otrCr2");

let inrCr3 = document.querySelector("#inrCr3");
let otrCr3 = document.querySelector("#otrCr3");

let circle = document.querySelector(".circle");

let labels = document.querySelectorAll("label");
let inputs = document.querySelectorAll("input");


let h1 = document.querySelector("h1");

let p = document.querySelector("p");

let cntBtn  = true;

if(cntBtn){

btn.addEventListener( "click", function() {
    
    p.innerText = "Step 2 Of 3";
    
    otrCr1.classList.add('cmn2');
    inrCr1.classList.remove('inner-circle');

    otrCr2.classList.remove("cmn");
    inrCr2.classList.add('inner-circle');
    otrCr2.classList.add('outer-circle');
    

    otrCr3.classList.add('cmn');
    inrCr3.classList.remove('inner-circle');

   
    h1.innerText='Which topics you are interested in?';
    
    remove();
    addopt();
    cntBtn = false;
 
 });
}

const remove = () => {
    labels.forEach( (label)=>{
        label.remove();
    });

    inputs.forEach( (input) =>{
        input.remove();
    });
};

const addopt =  () => {

        btn.style.marginRight = "10rem";
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.alignItems = 'center';
        container.style.justifyContent = 'center';

    const btnOptn1 =  document.createElement("button");
    btnOptn1.textContent = "Software Development";
    
    const btnOptn2 =  document.createElement("button");
    btnOptn2.textContent = "User Experience";
   
    const btnOptn3 =  document.createElement("button");
    btnOptn3.textContent = "Graphic Design";


    [btnOptn1, btnOptn2, btnOptn3].forEach(btnOptn => {
        btnOptn.classList.add("optnsStyle");
        btnOptn.style.fontSize = "1rem";
        btnOptn.style.color = "#A1A1A9";
        container.appendChild(btnOptn);

        select(btnOptn);

    });

};

const select = (btn)=>{
     btn.addEventListener( "click",function() {
     btn.style.backgroundColor = "#652CD1";
     });
}
