//#region 🗃️ Arrays

let kittens = 0

const catItems = [
    {
        name: 'Yarn',
        quantity: 0,
        price: 150,
        kitten: 5
    },
    {
        name: 'Temptations',
        quantity: 0,
        price: 300,
        kitten: 15
    },
    {
        name: 'Salmon',
        quantity: 0,
        price: 1000,
        kitten: 80
    },
    {
        name: 'Christmas Tree',
        quantity: 0,
        price: 5000,
        kitten: 500
    }

]




//#endregion
//#region 🧠 Logic

function mineKittens() {
    kittens += 1
    console.log('kitten clicked', kittens)
    drawKittens()
}










//#endregion
//#region 🖌️ Draw
function drawKittens() {
    let counterElm = document.getElementById('kitten-counter')
    console.log('kitten clicked', kittens)
    counterElm.innerText = kittens.toString()
}

//#endregion



