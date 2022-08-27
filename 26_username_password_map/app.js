const inputUsername = document.getElementById("inputUsername");
const inputPassword = document.getElementById("inputPassword");

const outputDiv = document.getElementById("outputDiv");

const userData = new Map();

function checkUsername(userName){
    if (userName.length < 3){
        alert("Der Nutzername muss aus mindestens 3 Zeichen bestehen.");
        return false;
    }
    if (userName.length > 30){
        alert("Der Nutzername darf aus höchstens 30 Zeichen bestehen.");
        return false;
    }
    if (userData.has(userName)){
        alert("Nutzername bereits vergeben.");
        return false;
    }
    // TODO Further requirements might be needed
    return true;
}

function checkPassword(password){
    if (password.length < 5){
        alert("Passwort muss aus mindestens 5 Zeichen bestehen.");
        return false;
    }
    if (password.length > 30){
        alert("Passwort darf aus höchstens 30 Zeichen bestehen.");
        return false;
    }
    // TODO Further requirements might be needed
    return true;
}

function inputNamePassword(){
    let userName = inputUsername.value;
    let password = inputPassword.value;
    if (!checkUsername(userName) || !checkPassword(password)){
        return;
    }
    userData.set(userName, password);
    alert(`Der Benutzer ${userName} wurde erfolgreich angelegt.`);
}

function outputList(){
    let tableHTML = "<table><tr><th>Nutzername</th><th>Passwort</th></tr>";
    for (let [key, value] of userData){
        tableHTML += `<tr><td>${key}</td><td>${value}</td></tr>`;
    }
    tableHTML += "</table>";
    outputDiv.innerHTML = tableHTML;
}