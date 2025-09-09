// App's initial state
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;
const callHistory = [];


// --- Helper Functions ---

// Gets the number from an element's text
function getInnerTextValue(id) {
    const targetElement = document.getElementById(id);
    const textValue = targetElement.innerText;
    return parseInt(textValue);
}

// Sets the text of an element
function setInnerTextValue(id, value) {
    const targetElement = document.getElementById(id);
    targetElement.innerText = value;
}

// Shows the call history on the page
function displayCallHistory() {
    const historyContainer = document.getElementById('history-container');
    historyContainer.innerHTML = "";
    
    if (callHistory.length === 0) {
        historyContainer.innerHTML = `<p class="text-gray-500 text-sm text-center mt-4">No call history yet.</p>`;
    } else {
        for (const call of callHistory) {
            const historyItemDiv = document.createElement('div');
            historyItemDiv.className = "bg-gray-50 p-3 rounded-lg flex justify-between items-center";
            historyItemDiv.innerHTML = `
                <div>
                    <p class="font-semibold text-gray-700">${call.name}</p>
                    <p class="text-xs text-gray-500">${call.number}</p>
                </div>
                <span class="text-xs font-mono text-gray-600">${call.time}</span>
            `;
            historyContainer.appendChild(historyItemDiv);
        }
    }
}


// --- Event Listeners for Card Buttons ---

// Card 1 Buttons
document.getElementById('heart-btn-1').addEventListener('click', function(event) {
    
    heartCount = getInnerTextValue('heart-count') + 1;
    setInnerTextValue('heart-count', heartCount);

    // Change icon and disable the button
    const button = event.currentTarget;
    button.innerHTML = `<i class="fa-solid fa-heart text-xl text-red-500"></i>`;
    button.disabled = true;
});

document.getElementById('copy-btn-1').addEventListener('click', function(event) {
    const button = event.currentTarget;
    const numberToCopy = button.dataset.number;
    
    navigator.clipboard.writeText(numberToCopy);
    alert(`Number (${numberToCopy}) copied to clipboard.`);

    copyCount = getInnerTextValue('copy-count') + 1;
    setInnerTextValue('copy-count', copyCount);
});

document.getElementById('call-btn-1').addEventListener('click', function(event) {
    const button = event.currentTarget;
    const currentCoinValue = getInnerTextValue('coin-count');

    if (currentCoinValue < 20) {
        alert("Sorry, you don't have enough coins!");
        return;
    }

    const hotlineName = button.dataset.name;
    const hotlineNnumber = button.dataset.number;
    alert(`You are calling "${hotlineName}" (${hotlineNnumber}).`);

    coinCount = currentCoinValue - 20;
    setInnerTextValue('coin-count', coinCount);

    const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const newCallEntry = { name: hotlineName, number: hotlineNnumber, time: currentTime };
    
    callHistory.unshift(newCallEntry);
    displayCallHistory();
});


// Card 2 Buttons
document.getElementById('heart-btn-2').addEventListener('click', function(event) {
    heartCount = getInnerTextValue('heart-count') + 1;
    setInnerTextValue('heart-count', heartCount);
    const button = event.currentTarget;
    button.innerHTML = `<i class="fa-solid fa-heart text-xl text-red-500"></i>`;
    button.disabled = true;
});

document.getElementById('copy-btn-2').addEventListener('click', function(event) {
    const button = event.currentTarget;
    const numberToCopy = button.dataset.number;
    navigator.clipboard.writeText(numberToCopy);
    alert(`Number (${numberToCopy}) copied to clipboard.`);
    copyCount = getInnerTextValue('copy-count') + 1;
    setInnerTextValue('copy-count', copyCount);
});

document.getElementById('call-btn-2').addEventListener('click', function(event) {
    const button = event.currentTarget;
    const currentCoinValue = getInnerTextValue('coin-count');
    if (currentCoinValue < 20) {
        alert("Sorry, you don't have enough coins!");
        return;
    }
    const hotlineName = button.dataset.name;
    const hotlineNnumber = button.dataset.number;
    alert(`You are calling "${hotlineName}" (${hotlineNnumber}).`);
    coinCount = currentCoinValue - 20;
    setInnerTextValue('coin-count', coinCount);
    const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const newCallEntry = { name: hotlineName, number: hotlineNnumber, time: currentTime };
    callHistory.unshift(newCallEntry);
    displayCallHistory();
});


// Card 3 Buttons
document.getElementById('heart-btn-3').addEventListener('click', function(event) {
    heartCount = getInnerTextValue('heart-count') + 1;
    setInnerTextValue('heart-count', heartCount);
    const button = event.currentTarget;
    button.innerHTML = `<i class="fa-solid fa-heart text-xl text-red-500"></i>`;
    button.disabled = true;
});

document.getElementById('copy-btn-3').addEventListener('click', function(event) {
    const button = event.currentTarget;
    const numberToCopy = button.dataset.number;
    navigator.clipboard.writeText(numberToCopy);
    alert(`Number (${numberToCopy}) copied to clipboard.`);
    copyCount = getInnerTextValue('copy-count') + 1;
    setInnerTextValue('copy-count', copyCount);
});

document.getElementById('call-btn-3').addEventListener('click', function(event) {
    const button = event.currentTarget;
    const currentCoinValue = getInnerTextValue('coin-count');
    if (currentCoinValue < 20) {
        alert("Sorry, you don't have enough coins!");
        return;
    }
    const hotlineName = button.dataset.name;
    const hotlineNnumber = button.dataset.number;
    alert(`You are calling "${hotlineName}" (${hotlineNnumber}).`);
    coinCount = currentCoinValue - 20;
    setInnerTextValue('coin-count', coinCount);
    const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const newCallEntry = { name: hotlineName, number: hotlineNnumber, time: currentTime };
    callHistory.unshift(newCallEntry);
    displayCallHistory();
});


// Card 4 Buttons
document.getElementById('heart-btn-4').addEventListener('click', function(event) {
    heartCount = getInnerTextValue('heart-count') + 1;
    setInnerTextValue('heart-count', heartCount);
    const button = event.currentTarget;
    button.innerHTML = `<i class="fa-solid fa-heart text-xl text-red-500"></i>`;
    button.disabled = true;
});

document.getElementById('copy-btn-4').addEventListener('click', function(event) {
    const button = event.currentTarget;
    const numberToCopy = button.dataset.number;
    navigator.clipboard.writeText(numberToCopy);
    alert(`Number (${numberToCopy}) copied to clipboard.`);
    copyCount = getInnerTextValue('copy-count') + 1;
    setInnerTextValue('copy-count', copyCount);
});

document.getElementById('call-btn-4').addEventListener('click', function(event) {
    const button = event.currentTarget;
    const currentCoinValue = getInnerTextValue('coin-count');
    if (currentCoinValue < 20) {
        alert("Sorry, you don't have enough coins!");
        return;
    }
    const hotlineName = button.dataset.name;
    const hotlineNnumber = button.dataset.number;
    alert(`You are calling "${hotlineName}" (${hotlineNnumber}).`);
    coinCount = currentCoinValue - 20;
    setInnerTextValue('coin-count', coinCount);
    const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const newCallEntry = { name: hotlineName, number: hotlineNnumber, time: currentTime };
    callHistory.unshift(newCallEntry);
    displayCallHistory();
});


// Card 5 Buttons
document.getElementById('heart-btn-5').addEventListener('click', function(event) {
    heartCount = getInnerTextValue('heart-count') + 1;
    setInnerTextValue('heart-count', heartCount);
    const button = event.currentTarget;
    button.innerHTML = `<i class="fa-solid fa-heart text-xl text-red-500"></i>`;
    button.disabled = true;
});

document.getElementById('copy-btn-5').addEventListener('click', function(event) {
    const button = event.currentTarget;
    const numberToCopy = button.dataset.number;
    navigator.clipboard.writeText(numberToCopy);
    alert(`Number (${numberToCopy}) copied to clipboard.`);
    copyCount = getInnerTextValue('copy-count') + 1;
    setInnerTextValue('copy-count', copyCount);
});

document.getElementById('call-btn-5').addEventListener('click', function(event) {
    const button = event.currentTarget;
    const currentCoinValue = getInnerTextValue('coin-count');
    if (currentCoinValue < 20) {
        alert("Sorry, you don't have enough coins!");
        return;
    }
    const hotlineName = button.dataset.name;
    const hotlineNnumber = button.dataset.number;
    alert(`You are calling "${hotlineName}" (${hotlineNnumber}).`);
    coinCount = currentCoinValue - 20;
    setInnerTextValue('coin-count', coinCount);
    const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const newCallEntry = { name: hotlineName, number: hotlineNnumber, time: currentTime };
    callHistory.unshift(newCallEntry);
    displayCallHistory();
});


// Card 6 Buttons
document.getElementById('heart-btn-6').addEventListener('click', function(event) {
    heartCount = getInnerTextValue('heart-count') + 1;
    setInnerTextValue('heart-count', heartCount);
    const button = event.currentTarget;
    button.innerHTML = `<i class="fa-solid fa-heart text-xl text-red-500"></i>`;
    button.disabled = true;
});

document.getElementById('copy-btn-6').addEventListener('click', function(event) {
    const button = event.currentTarget;
    const numberToCopy = button.dataset.number;
    navigator.clipboard.writeText(numberToCopy);
    alert(`Number (${numberToCopy}) copied to clipboard.`);
    copyCount = getInnerTextValue('copy-count') + 1;
    setInnerTextValue('copy-count', copyCount);
});

document.getElementById('call-btn-6').addEventListener('click', function(event) {
    const button = event.currentTarget;
    const currentCoinValue = getInnerTextValue('coin-count');
    if (currentCoinValue < 20) {
        alert("Sorry, you don't have enough coins!");
        return;
    }
    const hotlineName = button.dataset.name;
    const hotlineNnumber = button.dataset.number;
    alert(`You are calling "${hotlineName}" (${hotlineNnumber}).`);
    coinCount = currentCoinValue - 20;
    setInnerTextValue('coin-count', coinCount);
    const currentTime = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const newCallEntry = { name: hotlineName, number: hotlineNnumber, time: currentTime };
    callHistory.unshift(newCallEntry);
    displayCallHistory();
});


// --- History Section ---

// Event listener for the "Clear History" button
document.getElementById('clear-history-btn').addEventListener('click', function() {
    callHistory.length = 0;
    displayCallHistory();
});