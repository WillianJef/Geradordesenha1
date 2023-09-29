let slaiderElement = document.querySelector("#slaider");
let buttonelement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let passaword = document.querySelector("#password");
let conteinerpassaword = document.querySelector("#conteiner-password");

let charset = "abcdefghijklmnopqrstuwxyzABCDEFGHIJKLMNOPQRSTUWXYZ@!#$%¨&*";
let novaSenha = "";

sizePassword.innerHTML = slaiderElement.value;

slaider.oninput = function (){
    sizePassword.innerHTML = this.value;
}
function generatePassword() {   
    let pass = "";
    for(let i = 0, n = charset.length; i < slaiderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    conteinerpassaword.classList.remove("hide")
    passaword.innerHTML = pass;
    novaSenha = pass;
}
function copyPassword() { 
    navigator.clipboard.writeText(novaSenha);
}
URL("?branch=[![Netlify Status](https://api.netlify.com/api/v1/badges/9ad0d941-a08d-4aad-ae40-2d919dd7748e/deploy-status)](https://app.netlify.com/sites/vermillion-axolotl-26fe10/deploys)")