let basket = new Map(Object.entries(JSON.parse(localStorage.getItem('basketData') ?? '{}')));

let priceList = [
    {id: '0', name: 'Молоко', price: 79},
    {id: '1', name: 'Яйца', price: 49},
    {id: '2', name: 'Хлеб', price: 56},
    {id: '3', name: 'Чебупели', price: 169}
]

document.addEventListener("DOMContentLoaded", ready);

function ready() {
    const tableElement = document.querySelector('#catalog');
    for (let productItem of priceList) {

        // Создание ячеек
        const nameCell = document.createElement('td');
        const priceCell = document.createElement('td');
        const addQuantityCell = document.createElement('td');
        const addQuantityInput = document.createElement('input');
        const buttonsCell = document.createElement('td');
    
        // Заполнение атрибутов ячеек
        nameCell.className = 'product-name';
        priceCell.className = 'product-price';
        addQuantityCell.className = 'product-add-quantity';
        addQuantityInput.className = 'product-add-quantity-input';
        addQuantityInput.disabled = 'disabled';
        buttonsCell.className = 'product-buttons';
        buttonsCell.align = 'center';

        addQuantityInput.value = 1;

        nameCell.innerHTML = productItem.name;
        priceCell.innerHTML = productItem.price;

        const plusQuantityButton = document.createElement('button');
        plusQuantityButton.className = 'plus-quantity-button'
        plusQuantityButton.innerHTML = '>';
        plusQuantityButton.addEventListener('click', plusQuantityHandler);

        const minusQuantityButton = document.createElement('button');
        minusQuantityButton.className = 'minus-quantity-button'
        minusQuantityButton.innerHTML = '<';
        minusQuantityButton.addEventListener('click', minusQuantityHandler);
        minusQuantityButton.disabled = 'disabled';
    
        // Кнопка добавления в корзину
        const addToBasketButton = document.createElement('button');
        addToBasketButton.dataset.id = productItem.id;
        addToBasketButton.innerHTML = '+';
        addToBasketButton.addEventListener('click', addToBasketHandler);
        
        
        // Текст "Добавить в корзину"
        const buttonText = document.createElement('div');
        buttonText.innerHTML = 'Добавить в корзину';
        
        // Добавление кнопок в ячейки для кнопок
        buttonsCell.append(addToBasketButton);
        buttonsCell.append(buttonText);

        // Создание строки
        const newRow = document.createElement('tr');

        newRow.className = 'product-row';

        newRow.append(nameCell);
        newRow.append(priceCell);
        newRow.append(addQuantityCell);
        addQuantityCell.append(addQuantityInput);
        newRow.append(buttonsCell);

        addQuantityCell.prepend(minusQuantityButton);
        addQuantityCell.append(plusQuantityButton);

        tableElement.append(newRow);
    }
}

function addToBasketHandler(event) { 
    const button = event.target;
    const itemId = button.dataset.id;

    let input = button.closest('.product-row').querySelector('.product-add-quantity-input');
    let quantity = Number(input.value);

    if(basket.has(itemId)){
        quantity = basket.get(itemId) + quantity;
    }
    basket.set(itemId, quantity);
    updateLocalStorage();
}

function updateLocalStorage(){
    let basketObject = Object.fromEntries(basket);
    let basketJson = JSON.stringify(basketObject);
    localStorage.setItem('basketData', basketJson);
}

function plusQuantityHandler(event){
    const button = event.target;
    const addQuantityInput = button.closest('.product-add-quantity').querySelector('.product-add-quantity-input');
    const minusButton = button.closest('.product-add-quantity').querySelector('.minus-quantity-button');
    let quantity = addQuantityInput.value;
    addQuantityInput.value = Number(quantity) + 1;
    if (addQuantityInput.value > 9){
        button.disabled = 'disabled';
    }
    minusButton.disabled = '';
}

function minusQuantityHandler(){
    const button = event.target;
    const addQuantityInput = button.closest('.product-add-quantity').querySelector('.product-add-quantity-input');
    const plusButton = button.closest('.product-add-quantity').querySelector('.plus-quantity-button');
    let quantity = addQuantityInput.value;
    addQuantityInput.value = Number(quantity) - 1;
    if (addQuantityInput.value < 2){
        button.disabled = 'disabled';
    }
    plusButton.disabled = '';
}