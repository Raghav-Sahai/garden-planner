var selectedPlant = '';
var currentWidth = ''
var currentWidth = ''

document.getElementById('dimInput').addEventListener('submit', createGarden);
document.getElementById('tomato').addEventListener("click", setTomato);
document.getElementById('cucumber').addEventListener("click", setCucumber);
document.getElementById('pepper').addEventListener("click", setPepper);
document.getElementById('carrot').addEventListener("click", setCarrot);
document.getElementById('lettuce').addEventListener("click", setLettuce);



function createGarden(e) {
    e.preventDefault()

    const height = document.getElementById("height").value
    const width = document.getElementById("width").value

    currentWidth = width
    currentHeight = height

    var gardenContainer = document.getElementById('garden-container')
    gardenContainer.innerHTML = '';

    // Create wrapper div
    var wrapper = document.createElement('div')
    wrapper.className = 'wrapper';
    wrapper.id = 'garden-wrapper'
    gardenContainer.appendChild(wrapper)

    var buttonWrapper = document.createElement('div')
    buttonWrapper.className = 'button-wrapper'
    wrapper.appendChild(buttonWrapper)
    
    const clear = document.createElement('button') 
    clear.innerHTML = 'Clear Garden'
    clear.className = 'garden-btn'
    clear.height = '50%'
    clear.addEventListener("click", clearGarden)
    buttonWrapper.appendChild(clear)

    /* const remove = document.createElement('button') 
    remove.innerHTML = 'Remove Garden'
    remove.className = 'garden-btn'
    remove.height = '50%'
    buttonWrapper.appendChild(remove) */

    // Create garden div
    var garden = document.createElement('div')
    garden.className = 'garden'
    garden.id = 'garden'
    wrapper.appendChild(garden)

    for (var i = 0; i < height; i++) {
        var row = document.createElement('div');
        row.className = 'row'

        for (var x = 1; x <= width; x++) {
            var cell = document.createElement('div');
            cell.className = "gridSquare"
            cell.style.height = '45px'
            cell.style.width = '45px'
            cell.addEventListener("click", setPlant)
            row.appendChild(cell)
        }
        garden.appendChild(row)
    }

}

function clearGarden(e) {
    e.preventDefault()
    var cell = document.querySelectorAll('.gridSquare')
    for (i=0; i < cell.length; i++) {
        cell[i].innerHTML = ''
    }
    console.log(cell)
}

function setPlant(e) {
    e.preventDefault()

    this.innerHTML = ''

    switch (selectedPlant) {
        case 'tomato': 
            bc = 'red'
            break;
        case 'cucumber':
            bc = 'green'
            break;
        case 'carrot':
            bc = 'orange'
            break;
        case 'pepper':
            bc = 'yellow';
            break;
        case 'lettuce':
            bc = 'black'
            break;
    }

    if (selectedPlant !='') {
        var plant = document.createElement('div')
        plant.className = 'garden-plant'
        plant.style.width = '35px'
        plant.style.height = '35px'
        plant.style.backgroundColor = bc
        this.appendChild(plant)
    }
}

function setTomato(e) {
    e.preventDefault()
    selectedPlant = ''
    selectedPlant = "tomato"
    console.log(selectedPlant)
}

function setCucumber(e) {
    e.preventDefault()
    selectedPlant = ''
    selectedPlant = "cucumber"
    console.log(selectedPlant)
}

function setPepper(e) {
    e.preventDefault()
    selectedPlant = ''
    selectedPlant = "pepper"
    console.log(selectedPlant)
}

function setCarrot(e) {
    e.preventDefault()
    selectedPlant = ''
    selectedPlant = "carrot"
    console.log(selectedPlant)
}

function setLettuce(e) {
    e.preventDefault()
    selectedPlant = ''
    selectedPlant = "lettuce"
    console.log(selectedPlant)
}
