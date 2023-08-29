let basket = new Map(Object.entries(JSON.parse(localStorage.getItem('basketData') ?? '{}')));

let priceList = [
    {id: '0', name: 'Молоко', price: 79},
    {id: '1', name: 'Яйца', price: 49},
    {id: '2', name: 'Хлеб', price: 56},
    {id: '3', name: 'Чебупели', price: 169}
]

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
    fillBasket();
}

function updateLocalStorage(){
    let basketObject = Object.fromEntries(basket);
    let basketJson = JSON.stringify(basketObject);
    localStorage.setItem('basketData', basketJson);
}

function fillBasket(){
    const tableElement = document.querySelector('#basket');
    let totalPrice = 0;

    tableElement.innerHTML = '<tr><th>Наим. товара</th><th>Кол-во</th><th>Цена/руб.</th><th></th></tr>';


    for(let itemId of Array.from(basket.keys())){
        const product = getProduct(itemId);

        const itemName = product.name;
        const itemQuantity = basket.get(itemId);
        const itemPrice = product.price;
        
        const nameCell = document.createElement('td');
        const quantityCell = document.createElement('td');
        const priceCell = document.createElement('td');
        const buttonsCell = document.createElement('td');
    
        nameCell.className = 'product-name';
        quantityCell.className = 'product-quantity'
        priceCell.className = 'product-price';
        buttonsCell.className = 'product-buttons';
        buttonsCell.align = 'center';
    
        nameCell.innerHTML = itemName;
        quantityCell.innerHTML = itemQuantity;
        priceCell.innerHTML = itemPrice;
    
        const deleteFromBasketButton = document.createElement('button');
        deleteFromBasketButton.dataset.id = itemId;
        deleteFromBasketButton.innerHTML = '-';
        deleteFromBasketButton.addEventListener('click', deleteFromBasketHandler);
    
        const buttonText = document.createElement('div');
        buttonText.innerHTML = 'Удалить из корзины';
            
        buttonsCell.append(deleteFromBasketButton);
        buttonsCell.append(buttonText);
        
        const newRow = document.createElement('tr');
        newRow.append(nameCell);
        newRow.append(quantityCell);
        newRow.append(priceCell);
        newRow.append(buttonsCell);
    
        tableElement.append(newRow);
        totalPrice += itemPrice * itemQuantity;
    }

    let total = document.querySelector('#total');
    total.innerHTML = totalPrice;
}

function getProduct(itemId) {
    let item = priceList.find(element => element.id === itemId);
    return item;
}

function deleteFromBasketHandler(event){
    const button = event.target;
    const itemId = button.dataset.id;
    basket.delete(itemId);
    updateLocalStorage();
    fillBasket();
}
fillBasket();