const usersDatabase = JSON.parse(localStorage.getItem('usersDatabase')) || [];

// Логин
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    
    const user = usersDatabase.find(user => user.username === username);

    if (user && user.password === password) {
        showMessage(`Welcome back, ${username}!`, 'success');
        localStorage.setItem('username', username); 
        document.getElementById('login-username').value = '';
        document.getElementById('login-password').value = '';
        setTimeout(() => {
            window.location.href = 'index.html'; 
        }, 2000);
    } else if (user) {
        showMessage('Incorrect password. Please try again.', 'danger');
    } else {
        showMessage('User not found. Please register.', 'warning');
    }
});

// Регистрация
document.getElementById('register-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const newUsername = document.getElementById('register-username').value;
    const newPassword = document.getElementById('register-password').value;

    const passwordRegex = /^(?=.*[a-zA-Z]).{8,}$/; 

    if (!passwordRegex.test(newPassword)) {
        showMessage('Password must be at least 8 characters long and contain at least one letter.', 'danger');
        return; 
    }

    if (usersDatabase.find(user => user.username === newUsername)) {
        showMessage('User already exists. Try logging in.', 'warning');
    } else {
        usersDatabase.push({ username: newUsername, password: newPassword });
        localStorage.setItem('usersDatabase', JSON.stringify(usersDatabase)); 
        showMessage(`User ${newUsername} successfully registered! Please log in.`, 'success');
        document.getElementById('login-username').value = newUsername; 
        document.getElementById('register-username').value = '';
        document.getElementById('register-password').value = '';
    }
});

// Сообщения пользователю
function showMessage(message, type) {
    const messageBox = document.getElementById('message-box');
    messageBox.textContent = message;
    messageBox.className = `alert alert-${type} text-center mb-4`;
    messageBox.style.display = 'block';

    setTimeout(() => {
        messageBox.style.display = 'none';
    }, 3000);
}
