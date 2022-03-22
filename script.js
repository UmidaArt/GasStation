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
let oneLiterPrice = 67
let vat = 5


gasStations.forEach((petrolStation,idx) => {
    petrolStation.addEventListener('click', () => {
        gasStations.forEach(item => item.classList.remove('active'))
        petrolStation.classList.add('active')
        petrolType = petrols[idx]
        oneLiterPrice = petrolStationInput[idx].value
    })
})

btn.addEventListener('click', () => {
    if (totalLitersInput.value.length === 0) {
        alert('Введите количество литров')
    } else if (oneLiterPrice.length === 0) {
        alert('Выведите цену топливо')
    } else {
        petrolTypeBill.textContent = petrolType
        priceOneLiterBill.textContent = oneLiterPrice
        totalLiterBill.textContent = totalLitersInput.value
        vatBill.textContent = `${vat}%`
        totalPriceBill.textContent = (oneLiterPrice * totalLitersInput.value) * 1.05.toFixed(2)
    }

})
