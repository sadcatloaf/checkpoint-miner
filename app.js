//#region 🗃️ Arrays

let kittens = 0
let Clicks = 0
let clickPower = 15
let autoPower = 0

const manualClickPower = [
    {
        name: 'Yarn',
        quantity: 0,
        price: 15,
        power: 5
    },
    {
        name: 'Temptations',
        quantity: 0,
        price: 300,
        power: 15
    }

]

const autoClickPower = [
    {
        name: 'Salmon',
        quantity: 0,
        price: 1000,
        power: 80
    },
    {
        name: 'Christmas-Tree',
        quantity: 0,
        price: 8000,
        power: 500
    }

]




//#endregion
//#region 🧠 Logic

function mineKittens() {
    kittens += clickPower
    console.log('kitten clicked', kittens)
    drawKittens()
}

function timeKittens() {
    kittens += autoPower
    console.log('kitten clicked', kittens)
    drawKittens()
}


function upgradeManual(itemName) {
    const foundKittenItem = manualClickPower.find(manualCat => manualCat.name == itemName)
    // console.log(foundKittenItem)
    if (kittens < foundKittenItem.price) {
        window.alert(`You cannot afford the ${foundKittenItem.name}!`)
        return
    }
    kittens -= foundKittenItem.price
    foundKittenItem.quantity++
    foundKittenItem.price += 15
    clickPower += foundKittenItem.power
    console.log('item', itemName)
    drawKittens()
    drawClickPower()
    drawUpgrade(foundKittenItem)
}

function upgradeAuto(itemName) {
    const foundKittenItem = autoClickPower.find(autoCat => autoCat.name == itemName)
    // console.log(foundKittenItem)
    if (kittens < foundKittenItem.price) {
        window.alert(`You cannot afford the ${foundKittenItem.name}!`)
        return
    }
    kittens -= foundKittenItem.price
    foundKittenItem.quantity++
    foundKittenItem.price += 35
    autoPower += foundKittenItem.power
    console.log('item', itemName)
    drawKittens()
    drawAutoPower()
    drawUpgrade(foundKittenItem)
}

function kittenUpgradeTimer() {
    for (let i = 0; i < autoClickPower.length; i++) {
        const time = autoClickPower[i]
        if (time.power < 0) {
            autoPower += kittens
        }
        else {
            autoPower = 0
        }
    }
    drawKittens()
}

setInterval(timeKittens, 3000)

// function decreaseAnimalMoods() {
//     for (let i = 0; i < animals.length; i++) {
//         const animal = animals[i]
//         // animal.mood -= 1
//         // animal.mood-- // go down by one
//         let moodDecrease = 20

//         let totalSootheAmount = calculateSootheAmounts()

//         moodDecrease -= totalSootheAmount

//         animal.mood -= moodDecrease
//         // NOTE clamp
//         if (animal.mood < 0) {
//             animal.mood = 0
//         }

//         if (animal.mood > 100) {
//             animal.mood = 100
//         }

//     }
//     drawAllAnimalStats()
// }


setInterval(timeKittens, 5000)


//#endregion
//#region 🖌️ Draw
function drawKittens() {
    let counterElm = document.getElementById('kitten-counter')
    counterElm.innerText = kittens.toString()

}

function drawUpgrade(item) {
    const manualItemElem = document.getElementById(item.name)
    const spanElem = manualItemElem.querySelector('span')
    const pElem = manualItemElem.querySelector('p')
    spanElem.innerText = item.quantity.toString()
    pElem.innerText = item.price.toString()
}

function drawClickPower() {
    let PowerElm = document.getElementById('Click')
    PowerElm.innerText = clickPower.toString()
}

function drawAutoPower() {
    let PowerElm = document.getElementById('Time')
    PowerElm.innerText = autoPower.toString()
}



//#endregion


