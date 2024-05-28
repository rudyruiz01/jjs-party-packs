const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const estimateBtn = document.getElementById('estimate-btn');

// Toggle for smaller devices
navToggle.addEventListener('click', function(){
    links.classList.toggle('toggle-links');
    navToggle.classList.toggle('rotate');
});

// Estimate Calculator
estimateBtn.addEventListener('click', calculateEstimate);

function calculateEstimate() {
    const eightFootTablePrice = 10;
    const sixFootTablePrice = 8;
    const roundTablePrice = 12;
    const blackChairPrice = 2;
    const chivalryChairPrice = 4.50;

    const eightFootTables = document.getElementById('eight-foot-table').value;
    const sixFootTables = document.getElementById('six-foot-table').value;
    const roundTables = document.getElementById('round-table').value;
    const blackChairs = document.getElementById('black-chair').value;
    const chivalryChairs = document.getElementById('chivarly-chair').value;
    const miles = document.getElementById('miles').value;

    let cost = (eightFootTablePrice * eightFootTables) +
                (sixFootTablePrice * sixFootTables) + 
                (roundTablePrice * roundTables) + 
                (blackChairPrice * blackChairs) + 
                (chivalryChairPrice * chivalryChairs);

    // Delivery location is not in Waco, add delivery fee ($20) and $2 per mile
    if (miles > 0)
        cost += 20 + (miles * 2);

    // Cost is not over $150, add base delivery fee ($20)
    if (cost < 150)
        cost += 20;

    // Display estimated cost
    document.getElementById('estimated-cost').innerText = 'Total Cost: $' + cost.toFixed(2);
}