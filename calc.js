const prices = {
    bedroom: 5000,
    bathroom: 3000,
    kitchen: 7000,
    livingroom: 4000,
    appliance: 1500
};

function calculateCost() {
    const bedrooms = document.getElementById('bedrooms').value;
    const bathrooms = document.getElementById('bathrooms').value;
    const kitchens = document.getElementById('kitchens').value;
    const livingrooms = document.getElementById('livingrooms').value;
    const appliances = document.getElementById('appliances').value;

    const totalCost = (bedrooms * prices.bedroom) +
                      (bathrooms * prices.bathroom) +
                      (kitchens * prices.kitchen) +
                      (livingrooms * prices.livingroom) +
                      (appliances * prices.appliance);

    document.getElementById('result').innerText = Total Cost: Rs${totalCost};
}