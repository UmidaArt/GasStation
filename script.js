const petrolStationInput = document.querySelectorAll('.gasStationInput')
const gasStations = document.querySelectorAll('.gasStation')
const totalLitersInput = document.querySelector('.totalLitersInput')
const petrolTypeBill = document.querySelector('.petrolType')
const priceOneLiterBill = document.querySelector('.priceOneLiter')
const totalLiterBill = document.querySelector('.totalLiter')
const vatBill = document.querySelector('.vat')
const totalPriceBill = document.querySelector('.totalPrice')
const btn = document.querySelector('.btn')

const petrols = ['Ai95', 'AI98', 'AI100']
let petrolType = 'AI95'
let oneLiterPrice = 0
let vat = 5


gasStations.forEach((petrolStation,idx) => {
    if (petrolStation.classList.contains('active')) {
        clickPetrol()
    }
    petrolStation.addEventListener('click', () => {
        gasStations.forEach(item => item.classList.remove('active'))
        petrolStation.classList.add('active')
        clickPetrol()
        petrolType = petrols[idx]
        oneLiterPrice = petrolStationInput[idx].value
    })
})

btn.addEventListener('click', () => {
    if (oneLiterPrice.length === 0) {
        alert('Выведите цену топливо')
    } else if (totalLitersInput.value.length === 0) {
        alert('Введите количество литров')
    } else {
       clickPetrol()
    }

})
function clickPetrol () {
    petrolTypeBill.textContent = petrolType
    priceOneLiterBill.textContent = oneLiterPrice
    totalLiterBill.textContent = totalLitersInput.value
    vatBill.textContent = `${vat}%`
    totalPriceBill.textContent = (oneLiterPrice * totalLitersInput.value) * 1.05.toFixed(2)
}
