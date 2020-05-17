document.getElementById('dimInput').addEventListener('submit', createGardenInstance);
//window.onresize
// Plant Counts
var plants = {
    Tomato: {
        count: 0,
        bc: 'red',
        img: 'https://freesvg.org/img/1454168849.png',
        spacing: 1,
    },
    Cucumber: {
        count: 0,
        bc: 'green',
        img: 'https://freesvg.org/img/1453547668.png',
        spacing: 2,
    },
    Pepper: {
        count: 0,
        bc: 'yellow',
        img: 'https://freesvg.org/img/sweet-peeper.png',
        spacing: 1,
    },
    Carrot: {
        count: 0,
        bc: 'orange',
        img: 'https://freesvg.org/img/Karotte.png',
        spacing: 16,

    },
    Lettuce: {
        count: 0,
        bc: 'purple',
        img: 'https://freesvg.org/img/iceberg-lettuce.png',
        spacing: 4,
    },
    Broccoli: {
        count: 0,
        bc: 'darkgreen',
        img: 'https://freesvg.org/img/johnny_automatic_broccoli.png',
        spacing: 1,
    },
    Radish: {
        count: 0,
        bc: 'pink',
        img: 'https://freesvg.org/img/SRD_radish.png',
        spacing: 16,
    },
    Spinach: {
        count: 0,
        bc: 'greenyellow',
        img: 'https://freesvg.org/img/food-spinach.png',
        spacing: 9,
    },
    Beets: {
        count: 0,
        bc: 'blue',
        img: 'https://freesvg.org/img/johnny-automatic-beets.png',
        spacing: 9,
    },
    Onion: {
        count: 0,
        bc: 'white',
        img: 'https://freesvg.org/img/food-onion.png',
        spacing: 9,
    },
    Cabbage: {
        count: 0,
        bc: 'tan',
        img: 'https://freesvg.org/img/1469762090.png',
        spacing: 1,
    },
    Marigold: {
        count: 0,
        bc: 'gold',
        img: 'https://freesvg.org/img/kwiat.png',
        spacing: 1,
    },
    

    
    
}

var selectedPlant = '';

// Card Class
class card {
    constructor(name) {
        this.name = name
    }

    createCard() {
        const container = document.querySelector('#card-container')

        const cardContainer = document.createElement('div')
        cardContainer.className = 'card'

        const cardText = document.createElement('div')
        cardText.className = 'card-txt'
        cardContainer.appendChild(cardText)

        const label = document.createElement('h1')
        label.innerHTML = this.name
        cardText.appendChild(label)

        const button = document.createElement('button')
        button.innerHTML = 'Select'
        button.className = 'plant-selection-btn selector'
        button.id = this.name
        cardText.appendChild(button)

        cardContainer.appendChild(cardText)

        container.appendChild(cardContainer)
    }
}

// Creating all of the cards for the different plant types
const cardContainer = document.querySelector('#card-container')
for (p in plants) {
    const x = new card(p)
    x.createCard()
    console.log('create')
}

// Adding event listeners to all of the plants
const plantSelectionButtons = document.querySelectorAll('.selector')
for (i=0; i<plantSelectionButtons.length; i++) {
    plantSelectionButtons[i].addEventListener("click", setSelectedPlant)
}

// setting selectedPlant
function setSelectedPlant(e) {
    e.preventDefault()
    selectedPlant = this.id
    console.log(selectedPlant)
}

// Creating garden instance
function createGardenInstance(e) {
    e.preventDefault()
    const length = document.getElementById("height").value
    const width = document.getElementById("width").value
    let garden1 = new garden(length, width)
    garden1.createGarden()
}

// Garden class
var boxSize;
class garden {
    constructor(length, width){
        this.length = length
        this.width = width
    }

    createGarden() {
        var gardenContainer = document.getElementById('garden-container')
        gardenContainer.innerHTML = '';
        const widthSize = (gardenContainer.offsetWidth - 48) / this.width
        const heightSize = (gardenContainer.offsetHeight - 48) / this.length
        
        if (widthSize<heightSize) {
            boxSize = widthSize
        } else {
            boxSize = heightSize
        }

        if (boxSize> 80){
            boxSize = 80
        }

        var Bigwrapper = document.createElement('div')
        Bigwrapper.className = 'big-wrapper';
        gardenContainer.appendChild(Bigwrapper)

        // Create wrapper div
        var wrapper = document.createElement('div')
        wrapper.className = 'wrapper';
        wrapper.id = 'garden-wrapper'
        Bigwrapper.appendChild(wrapper)

        var tableWrapper = document.createElement('div')
        tableWrapper.className = 'table';
        tableWrapper.id = 'table-wrapper'
        Bigwrapper.appendChild(tableWrapper)

        var buttonWrapper = document.createElement('div')
        buttonWrapper.className = 'button-wrapper'
        wrapper.appendChild(buttonWrapper)
       
        // Create garden div
        var garden = document.createElement('div')
        garden.className = 'garden'
        garden.id = 'garden'
        wrapper.appendChild(garden)

        var count = 0 
        for (var i = 0; i < this.length; i++) {
            var row = document.createElement('div');
            row.className = 'row'
            row.style.width = boxSize * this.length

            for (var x = 1; x <= this.width; x++) {
                var cell = document.createElement('div');
                cell.id = count
                count += 1
                cell.className = "gridSquare"
                cell.style.height = `${boxSize}px`//'45px'
                cell.style.width = `${boxSize}px`//'45px'
                cell.addEventListener("click", setPlant)
                row.appendChild(cell)
            }
            garden.appendChild(row)
        }
        const clear = document.createElement('button') 
        clear.innerHTML = 'Clear Garden'
        clear.className = 'right-garden-btn'
        clear.height = '50%'
        clear.addEventListener("click", clearGarden)
        buttonWrapper.appendChild(clear)

        const remove = document.createElement('button') 
        remove.innerHTML = 'Remove Plant'
        remove.className = 'right-garden-btn'
        remove.height = '50%'
        remove.addEventListener("click", removePlant)
        buttonWrapper.appendChild(remove)

    }   
}

// Sets the plant in the garden
function setPlant(e) {
    e.preventDefault()
    this.innerHTML = ''
    var innerBoxSize = 0.8*boxSize
    if (selectedPlant !='') {
        var plant = document.createElement('div')
        plant.className = selectedPlant
        plant.id = 'plant'
        plant.style.width = `${innerBoxSize}px`
        plant.style.height = `${innerBoxSize}px`
        plant.style.backgroundColor = plants[selectedPlant].bc
        plant.innerHTML = plants[selectedPlant].spacing
        plant.style.fontWeight = 'bold'
        if (plants[selectedPlant].img != '') {
            plant.style.backgroundColor = ''
            plant.style.backgroundImage = `url(${plants[selectedPlant].img})`
            plant.style.backgroundSize = '60%'
            plant.style.backgroundRepeat = 'no-repeat'
            plant.style.backgroundPosition = 'center'
            console.log(plants[selectedPlant].img)
        }

        this.appendChild(plant)
        updataPlants()
        createTable()
    } else {
        this.innerHTML = ''
        updataPlants()
        createTable()
    }

}

// Counts the number of each plant in the garden
function updataPlants() {
    for (p in plants) {
        plants[p].count = document.querySelectorAll('.'+p).length
    }
}

// Clears the garden of all the plants
function clearGarden(e) {
    e.preventDefault()
    var cell = document.querySelectorAll('.gridSquare')
    for (i=0; i < cell.length; i++) {
        cell[i].innerHTML = ''
    }
    for (p in plants) {
        plants[p].count = 0
    }
    createTable()
}

// Updates selectedPlant to '' so user can remove one plant at a time
function removePlant(e) {
    e.preventDefault()
    selectedPlant = ''
}

// Creates data table for garden 
function createTable() {
    const tableContainer = document.getElementById("table-wrapper")
    tableContainer.innerHTML = ''

    const table = document.createElement('table')
    const header = document.createElement('tr')

    const plantType = document.createElement('th')
    plantType.innerHTML = 'Plant'
    header.appendChild(plantType)
    const plantCount = document.createElement('th')
    plantCount.innerHTML = 'Total Plant Squares'
    header.appendChild(plantCount)
    const totalPlants = document.createElement('th')
    totalPlants.innerHTML = 'Total plants'
    header.appendChild(totalPlants)

    table.appendChild(header)

    for (const p in plants){
        if (plants[p].count != 0) {
            const row = document.createElement('tr')

            const label = document.createElement('td')
            label.innerHTML = `${p}`
            row.appendChild(label)

            const count = document.createElement('td')
            count.innerHTML = plants[p].count
            row.appendChild(count)

            const totalCount = document.createElement('td')
            totalCount.innerHTML = plants[p].count * plants[p].spacing
            row.appendChild(totalCount)

            table.appendChild(row)
        }
    }
    
    tableContainer.appendChild(table)
}



