import throttle from "lodash.throttle";

const emailElem = document.querySelector('input[type = email]');
const messageElem = document.querySelector('textarea[name = message]');
const formElem = document.querySelector('.feedback-form');
const FORM_KEY = 'feedback-form-state';

formElem.addEventListener('input', throttle(onFormElem, 500));
formElem.addEventListener('submit', ButtonClick);

let formData = {};

function onFormElem(event) {
    if (event.target.nodeName !== 'INPUT' && event.target.nodeName !== 'TEXTAREA') {
        return;
    };
    formData = {
        email: emailElem.value,
        message: messageElem.value
        }
    formData = JSON.stringify(formData);
    localStorage.setItem(FORM_KEY, formData);
};

function ButtonClick(event) {
    event.preventDefault();
    event.target.reset();
    localStorage.removeItem(FORM_KEY);
    console.log(formData);

};

function formOutput() {
    const userInput = localStorage.getItem(FORM_KEY);
    formData = JSON.parse(userInput);
    if (userInput) {
        emailElem.value = formData.email;
        messageElem.value = formData.message;

    };
};
formOutput();