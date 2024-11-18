//Обьекты и методы
const user = {
    name: 'Human',
    age: 25,
    greet() {
        return `Welcome, ${this.name}!`;
    }
};
document.getElementById('greeting').textContent = user.greet();
//Массивы и Циклы
const items = ['Item 1', 'Item 2', 'Item 3'];
const list = document.getElementById('item-list');



items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;

    li.addEventListener('click', () => {
        li.classList.add('rotate');
        setTimeout(() => {
            li.classList.remove('rotate');
        }, 500);
    });

    list.appendChild(li);
});

//Это анимации
// Анимация вращения куба
    document.getElementById('animate-button').addEventListener('click', () => {
        const box = document.getElementById('box');
        box.style.transform = 'rotateY(360deg)';
        document.getElementById('animate-button').innerText = "Animate already";
    });

