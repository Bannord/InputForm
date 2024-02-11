// 

import './index.js'


// 
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('massage');
const btn = document.querySelector('.btn-form');

//

btn.addEventListener('click', () => {
    
    const formData = {
        username: username.value.trim(),
        email: email.value.trim(),
        phone: phone.value.trim(),
        message: message.value
    };
    console.log(formData)
    
    // Отправляем запрос на сервер с помощью функции fetch
    fetch('http://localhost:9090/api/registration', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data) {
            
            console.log(data);
            // Очистить поля формы
            document.getElementById('form').reset();
            // Вывести сообщение пользователю
        } else {
            // Обработка ошибочного ответа
            console.error('Ошибка: ', data.fields);
            // Вывести сообщение об ошибке
        }
    })
    .catch(error => {
        console.error('Произошла ошибка:', error);
    });
});