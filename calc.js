const prices = {
    bedroom: 5000,
    bathroom: 3000,
    kitchen: 7000,
    livingroom: 4000,
    appliance: 1500
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