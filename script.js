const gasStation1Input = document.querySelector('.gasStation1Input')
const gasStation2Input = document.querySelector('.gasStation2Input')
const gasStation3Input = document.querySelector('.gasStation3Input')
const gasStation1 = document.querySelector('.gasStation1')
const gasStation2 = document.querySelector('.gasStation2')
const gasStation3 = document.querySelector('.gasStation3')
const totalLitersInput = document.querySelector('.totalLitersInput')
const petrolType = document.querySelector('.petrolType')
const priceOneLiter = document.querySelector('.priceOneLiter')
const totalLiter = document.querySelector('.totalLiter')
const totalPrice = document.querySelector('.totalPrice')


gasStation1.addEventListener('click', () => {
    document.querySelector('.gasStation1').classList.toggle('blue')
    let value = gasStation1Input.value
    let totalLiters = totalLitersInput.value
    let price = value * totalLiters
    petrolType.textContent = 'Petrol type: AI95'
    priceOneLiter.textContent = `Price for 1 liter: ${value} $`
    totalLiter.textContent =`Total liters: ${totalLiters}`
    totalPrice.textContent = `Total price: ${price * 0.05 + price} $`
})
gasStation2.addEventListener('click', () => {
    document.querySelector('.gasStation2').classList.toggle('blue')
    let value = gasStation2Input.value
    let totalLiters = totalLitersInput.value
    let price = value * totalLiters
    petrolType.textContent ='Petrol type: AI98'
    priceOneLiter.textContent = `Price for 1 liter: ${value} $`
    totalLiter.textContent =`Total liters: ${totalLiters}`
    totalPrice.textContent = `Total price: ${price * 0.05 + price} $`
})
gasStation3.addEventListener('click', () => {
    document.querySelector('.gasStation3').classList.toggle('blue')
    let value = gasStation3Input.value
    let totalLiters = totalLitersInput.value
    let price = value * totalLiters
    petrolType.textContent = 'Petrol type: AI100'
    priceOneLiter.textContent = `Price for 1 liter: ${value} $`
    totalLiter.textContent =`Total liters: ${totalLiters}`
    totalPrice.textContent = `Total price: ${price * 0.05 + price} $`
})