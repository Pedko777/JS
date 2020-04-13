'use strict';
let message = 'Добро пожаловать!';
const adminPassword = 'jqueryismyjam';
const pass = prompt ('Введите пароль', '');
    if (pass === adminPassword) {
        alert( message );
    } else if (pass == '' || pass == null) {
        message = 'Отменено пользователем';
        alert( message );
    } else {
        message = 'Доступ запрещен, неверный пароль!'
        alert( message );
    }