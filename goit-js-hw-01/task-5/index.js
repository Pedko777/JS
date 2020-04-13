'use strict';

let country;
let price;
let message;

country = prompt("Введите страну, в которую необходимо доставить товар");
switch (country.toLowerCase()) {

    case "китай":
    (country = country), (price = 100);
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

    case "чили":
    (country = country), (price = 250);
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

    case "австралия":
    (country = country), (price = 170);
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

    case "индия":
    (country = country), (price = 80);
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

    case "ямайка":
    (country = country), (price = 120);
    message = `Доставка в ${country} будет стоить ${price} кредитов`;
    break;

    default:
        alert("В вашей стране доставка не доступна");
    }
    
console.log(message);