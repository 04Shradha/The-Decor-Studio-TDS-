


const prices = {
    bedroom: 50000,
    bathroom: 30000,
    kitchen: 70000,
    livingroom: 40000,
    appliance: 150000
};

function calculateCost() {
    const bedrooms = parseInt(document.getElementById('bedrooms').value) || 0;
    const bathrooms = parseInt(document.getElementById('bathrooms').value) || 0;
    const kitchens = parseInt(document.getElementById('kitchens').value) || 0;
    const livingrooms = parseInt(document.getElementById('livingrooms').value) || 0;
    const appliances = parseInt(document.getElementById('appliances').value) || 0;

    const totalCost = (bedrooms * prices.bedroom) +
                      (bathrooms * prices.bathroom) +
                      (kitchens * prices.kitchen) +
                      (livingrooms * prices.livingroom) +
                      (appliances * prices.appliance);

    document.getElementById('result').innerText = `Total Cost: Rs${totalCost}`;
}

