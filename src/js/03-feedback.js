// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт 
// з полями email і message, у яких зберігай поточні значення полів форми.
// Нехай ключем для сховища буде рядок "feedback-form-state".

// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, 
// заповнюй ними поля форми.В іншому випадку поля повинні бути порожніми.

// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт 
// з полями email, message та їхніми поточними значеннями.

// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. 
// Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const LS_KEY = "feedback-form-state";

form.addEventListener('input', throttle(handlerInput, 500));
form.addEventListener('submit', handlerSubmit);
document.addEventListener('DOMContentLoaded', renderPage);

let userData = localStorage.getItem(LS_KEY) || {};

// function input
function handlerInput(e) {
    const target = e.target;
    const formElValue = target.value;
    const formElName = target.name;
    userData[formElName] = formElValue;
    localStorage.setItem(LS_KEY, JSON.stringify(userData));
}

// function submit
function handlerSubmit(event) {
    event.preventDefault();
    const { email, message } = event.currentTarget.elements;

    if (!email.value || !message.value) {
        alert("all fields must be filled")
    }

    data = {
        email: email.value,
        message: message.value
    };

    localStorage.getItem(LS_KEY);
    console.log(data);

    event.currentTarget.reset();
    localStorage.removeItem(LS_KEY);
}

// function DOM
function renderPage() {
    const userDataFromLS = JSON.parse(localStorage.getItem(LS_KEY));

    const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
    };
    
    if (!userDataFromLS) {
        return;
    }
    const formElements = form.elements;
    for (const key in userDataFromLS) {
        if (userDataFromLS.hasOwnProperty(key)) {
            formElements[key].value = userDataFromLS[key];
            if (userDataFromLS[key]) {
                userData[key] = userDataFromLS[key]
            }
        }
    }
}


