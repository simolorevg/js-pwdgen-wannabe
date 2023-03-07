const userName = prompt('Inserisci il tuo nome');
console.log(userName);
const userSurname = prompt('Inserisci il tuo cognome');
console.log(userSurname);
const userColour = prompt ('Inserisci il tuo colore preferito');
console.log(userColour);
const passwordGenerated = userName + userSurname + userColour + 21;
console.log(passwordGenerated);
document.getElementById('password-result').innerHTML = passwordGenerated;