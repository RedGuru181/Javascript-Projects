let inventory = '';
let health = 100;
let gold = 50;

//Update status
function updateStatus() {
    document.getElementById('health').textContent = health;
    document.getElementById('gold').textContent = gold;
}

//Update description
function updateDescription(description) {
    document.getElementById('description').textContent = description;
}

//Submit player name
function submitName() {
    const playerName = document.getElementById('playerNameInput').value;
    document.getElementById('playerNameInput').style.display = 'none';
    document.getElementById('descriptionContainer').removeChild(document.getElementById('playerNameInput'));
    document.getElementById('descriptionContainer').removeChild(document.getElementByTagName('button')[0]);
    updateDescription('Welcome, ' + playerName + '! We need your help!')
}
//Update initial status
updateStatus();

