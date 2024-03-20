
//Starting health
let health = 100;
//Starting gold
let gold = 50;
//weapons array for weapons that are in the game
let weapons = [
    {
        name: "Stick",
        damage: 5,
        description: "A pretty thick branch that fell off of a tree, good to defend yourself with now I guess.",
        gold: 0
    },
    {
        name: "Sword",
        damage: 10,
        description: "A sharp weapon that deals a bit more damage than a sword.",
        gold: 20
    },
    {
        name: "Battle Axe",
        damage: 20,
        description: "A heavy two handed object, when it strikes an oppenant they probably won't die.",
        gold: 50
    }
];

let potions = [
    {
        name: "Health potion",
        description: "Heals your body and mind."

    }
]
//initial inventory
let inventory = [weapons[0].name, potions[0].name];

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
    document.getElementById('descriptionContainer').removeChild(document.getElementById('submitName'));
    updateDescription('Welcome, ' + playerName + '! We need your help!')
}

//Display inventory function
function displayInventory() {
    const statusBar = document.getElementById('statusbar');
    document.getElementById('statusbar').textContent = '';
    inventory.forEach(item => {
        const itemElement = document.createElement('p');
        itemElement.textContent = item;
        statusBar.appendChild(itemElement);
    });
}


//Open bag function
function openBag() {
    updateDescription("You open your bag and take a peak inside.");
    displayInventory();

    const bagButton = document.getElementById("bagbtn");
    bagButton.textContent = "Close bag";
    bagButton.onclick = closeBag();
}

//Update initial status
updateStatus();

