import '../styles/index.scss'

import Inputmask from 'inputmask';

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('massage');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs()
})

const setError = (element, message) => {
    const inputControll = element.parentElement
    const errorDisplay = inputControll.querySelector('.error')

    errorDisplay.innerText = message;
    inputControll.classList.add('error')
    inputControll.classList.remove('success')

}

const setSuccess = element => {
    const inputControll = element.parentElement
    const errorDisplay = inputControll.querySelector('.error')

    errorDisplay.innerText = '';
    inputControll.classList.add('success');
    inputControll.classList.remove('error')
}

const isValidEmail = email => {
    const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

const validateInputs = () => {
    const userNameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const messageValue = message.value

    if (userNameValue === '') {
        setError(username, 'Username is required')
    } else {
        setSuccess(username)
    }

    if (emailValue === '') {
        setError(email, 'Емаил обязательный')
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Недопустимый емэйл')
    } else {
        setSuccess(email)
    }

    if (phoneValue === '') {
        setError(phone, 'Номер телефона обязателен');
    }  else {
        Inputmask({ mask: '+7 (999) 999-99-99' }).mask(phone);
        if (!Inputmask.isValid(phoneValue, { mask: '+7 (999) 999-99-99' })) {
            setError(phone, 'Недопустимый номер телефона');
        } else {
            setSuccess(phone);
        }

    }

    if (messageValue === '') {
        setError(message, 'Напишите, пожалуйста, ваше обращение')
    } else {
        setSuccess(message)
    }
    
}

