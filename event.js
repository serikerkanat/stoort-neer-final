// Массивы продуктов
const electronics = [
    { name: 'Disk of album MÖRRINJÖ', price: 10.99 },
    { name: 'Disk of album aret utan sommar', price: 12.99 },
    { name: 'Notes(gp7) fo album MÖRRINJÖ', price: 5.99 },
    { name: 'Notes(gp7) of album aret utan sommar', price: 7.99 },
];

const clothing = [
    { name: 'Hoodie', price: 25.99 },
    { name: 'Cap', price: 15.99 },
];

const allProducts = [...electronics, ...clothing]; 

function showTime() {
    const timeElement = document.getElementById('time-display');
    const currentTime = new Date().toLocaleTimeString();
    timeElement.textContent = `Current Time: ${currentTime}`;
    localStorage.setItem('selectedFilter', 'time');
}

function filterProducts(category) {
    localStorage.setItem('selectedFilter', category);
    switch (category) {
        case 'electronics':
            displayProducts(electronics);
            break;
        case 'clothing':
            displayProducts(clothing);
            break;
        case 'time':
            showTime();
            break;
        default:
            displayProducts(allProducts);
    }
}

function displayProducts(products) {
    const productContainer = document.getElementById('product-list'); 
    productContainer.innerHTML = ''; 

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.textContent = `${product.name} - $${product.price.toFixed(2)}`;
        productContainer.appendChild(productElement); 
    });

    document.getElementById('time-display').textContent = ''; // Скрываем время при показе продуктов
}

window.addEventListener('load', () => {
    const savedFilter = localStorage.getItem('selectedFilter');
    if (savedFilter) {
        filterProducts(savedFilter);
    }
});

// Событие для кнопки "Show Current Time"
document.getElementById('show-time').addEventListener('click', () => {
    filterProducts('time');
});

// Навигация по элементам меню
const menuItems = document.querySelectorAll('.menu-item');
let currentIndex = 0;

function setFocus() {
    menuItems[currentIndex].focus();
    menuItems[currentIndex].classList.add('focused'); 
}

function removeFocus() {
    menuItems[currentIndex].classList.remove('focused');
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
        removeFocus();
        currentIndex = (currentIndex + 1) % menuItems.length;
        setFocus();
    } else if (event.key === 'ArrowUp') {
        removeFocus();
        currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
        setFocus();
    }
});

// Действия для кнопок меню
menuItems[0].addEventListener('click', () => {
    alert('Button 1 clicked!'); 
});

menuItems[1].addEventListener('click', () => {
    document.getElementById('text-element').textContent = 'Text has been changed!';
});

menuItems[2].addEventListener('click', () => {
    document.body.classList.toggle('dark-mode'); 
});

setFocus();
