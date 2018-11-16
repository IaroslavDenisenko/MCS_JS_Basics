let money = prompt('Сколько у вас есть денег?');
let apples = prompt('Сколько яблок вы купили?');
let breads = prompt("Сколько батонов хлеба вы купили?");
let AppleCost = apples*parseInt(prompt('Cколько стоит одно яблочко?'));
let BreadCost = breads*parseFloat(prompt('Сколько стоит один батон?'));
let Good = parseInt(money) >= (AppleCost+BreadCost);
document.body.innerHTML = Good;