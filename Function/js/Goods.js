function haveEnough(money, apples, breads, AppleCost, BreadCost){
	return (money >= (apples*AppleCost+breads*BreadCost))? 'Вам хватает денег на покупки' : 'Вам не хватает денег';
}
let money = parseFloat(prompt('Сколько у вас есть денег?'));
let apples = parseInt(prompt('Сколько яблок вы купили?'));
let breads = parseInt(prompt("Сколько батонов хлеба вы купили?"));
let AppleCost = parseFloat(prompt('Cколько стоит одно яблочко?'));
let BreadCost = parseFloat(prompt('Сколько стоит один батон?'));
document.body.innerHTML = haveEnough(money, apples, breads, AppleCost, BreadCost);