
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('massage');
const btn = document.querySelector('.btn-form');


btn.addEventListener('click', () => {
    const formData = {
        username: username.value.trim(),
        email: email.value.trim(),
        phone: phone.value.trim(),
        message: message.value
    };

    fetch('http://localhost:9090/api/registration', {
        method: 'POST',
        body: JSON.stringify(formData), 
        headers: {
            'Content-Type': 'application/json' 
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            
            document.getElementById('form').reset();
            alert(data.message); 
           
        } else {
            
           alert('Упс, что-то пошло не так. Попробуйте ещё раз')
        }
    })
    .catch(error => {
        console.error('Произошла ошибка:', error);
    });
});