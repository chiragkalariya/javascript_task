const showPassword = document.getElementById("showpassword");
const copyPass = document.getElementById("copypassword");
const getLength = document.getElementById("getlength");
const upperCaseEl = document.getElementById("uppercase");
const lowerCaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");

const submitEl = document.getElementById("submit");

let upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let special = "!@#$%&*";

function getUpperCase() {
    return upCase[Math.floor(Math.random() * upCase.length)]
}
function getLowerCase() {
    return lowerCase[Math.floor(Math.random() * lowerCase.length)]
}
function getNumbere() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}
function getSymbol() {
    return special[Math.floor(Math.random() * special.length)]
}

// console.log(getSymbol());


function generatePassword() {
    const len = getLength.value;
    let passWord = "";
    if (len < 3) {
        alert('length must been greter then three')
    } else {
        if (upperCaseEl.checked) {
            passWord += getUpperCase();
        }
        if (lowerCaseEl.checked) {
            passWord += getLowerCase();
        }
        if (numbersEl.checked) {
            passWord += getNumbere();
        }
        if (symbolsEl.checked) {
            passWord += getSymbol();
        }
    
        for (let i = passWord.length; i < len; i++) {
            const x = generateX();
            passWord += x;
        }
    
        showPassword.innerText = passWord;
        // console.log(a);
    }
    

}
function generateX() {
    const xs = [];
    
    if (upperCaseEl.checked) {
        xs.push(getUpperCase());
    }
    if (lowerCaseEl.checked) {
        xs.push(getLowerCase());
    }
    if (numbersEl.checked) {
        xs.push(getNumbere());
    }
    if (symbolsEl.checked) {
        xs.push(getSymbol());
    }
    if (xs.length === 0) {
        return "";
    }
    
    return xs[Math.floor(Math.random() * xs.length)];
}

submitEl.addEventListener('click', generatePassword);

copyPass.addEventListener("click", () => {
    showPassword.select();
    showPassword.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(showPassword.value);
})

// showPassword.addEventListener('copy', (e) =>{
//     e.preventDefault();
//     if(e.clipboardData) {
//         e.clipboardData.setData("text/plain", showPassword.innerText);
        
//         console.log(e.clipboardData.getData("text"));
//     }
// })