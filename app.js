//#region 🗃️ Arrays

let kittens = 0
let Clicks = 0
let clickPower = 1
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
        name: 'Christmas Tree',
        quantity: 0,
        price: 5000,
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


function upgradeManual(itemName) {
    const foundKittenItem = manualClickPower.find(manualCat => manualCat.name == itemName)
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





//#endregion


