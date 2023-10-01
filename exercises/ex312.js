"use strict";
// 1 - Crie uma interface UserData para o formulário abaixo
// 2 - Crie uma variável global UserData no window, ela será um objeto qualquer
// 3 - Adicione um evento de keyup ao formulário
// 4 - Quando o evento ocorrer adicione a {[id]: value} ao UserData
// 5 - Salve UserData no localStorage
// 6 - Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
// 7 - Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData
window.UserData = {};
const form = document.querySelector('#form');
function isJSONValid(str) {
    try {
        JSON.parse(str);
        return true;
    }
    catch (e) {
        return false;
    }
}
function getUserDataFromLocalStorage() {
    let userDataStr = localStorage.getItem('UserData');
    if (userDataStr && isJSONValid(userDataStr)) {
        const UserData = JSON.parse(userDataStr);
        if (isUserData(UserData)) {
            Object.entries(UserData).forEach(([key, value]) => {
                const input = document.getElementById(key);
                if (input instanceof HTMLInputElement) {
                    input.value = value;
                    window.UserData[key] = value;
                }
            });
        }
    }
}
function handleKeyUp(event) {
    const element = event.target;
    if (element instanceof HTMLInputElement) {
        const { id, value } = element;
        if (id === 'nome' || id === 'email' || id === 'cpf') {
            window.UserData[id] = value;
            saveDataOnLocalStorage();
        }
    }
}
function saveDataOnLocalStorage() {
    localStorage.setItem('UserData', JSON.stringify(window.UserData));
}
function isUserData(value) {
    if (value && typeof value === 'object' && ('nome' in value || 'email' in value || 'cpf' in value))
        return true;
    return false;
}
form?.addEventListener('keyup', handleKeyUp);
getUserDataFromLocalStorage();
