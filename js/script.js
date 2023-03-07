const userName = prompt('Inserisci il tuo nome');
const userSurname = prompt('Inserisci il tuo cognome');
const userColour = prompt ('Inserisci il tuo colore preferito');
const passwordGenerated = `La tua nuova password è: ${userName}${userSurname}${userColour}21`;
document.getElementById('password-result').innerHTML = passwordGenerated;