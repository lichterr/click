//Объявление переменных
var massiveText=[
	'Здравствуйте,пользователь!',
	'Привет,пользователь!',
	'Добрый день,пользователь!'
];
var randomNum=Math.floor(Math.random()*3);
alert(massiveText[randomNum]);
var shop=document.getElementById('openShop');
var back=document.getElementById('back');
var h1Id=document.getElementById('h1');
var settings=document.getElementById('settings');
var buttonId=document.getElementById('button');
var upgrade1Button=document.getElementById('upgrade1');
var upgrade2Button=document.getElementById('upgrade2');
var upgrade3Button=document.getElementById('upgrade3');
var upgrade4Button=document.getElementById('upgrade4');
var upgrade5Button=document.getElementById('upgrade5');
var settings=document.getElementById('settings');
var backSettings=document.getElementById('backSettings');
var grey=document.getElementById('grey');
var popUp=document.getElementById('popUp');
var popUpClose=document.getElementById('close');
var popUpText=document.getElementById('mistake');
var form=document.getElementById('form');
let massiveGreen=document.getElementsByClassName('green');
var picker=document.getElementById('colorPickerId');
var submitFormPicker=document.getElementById('colorPickerSubmit');
let clickPerMinuteVarriable=document.getElementById('clickPerMinute');
let clickPerMinuteUpgradeShop=document.getElementById('shopClickPerMinute');
let clickUpgradeShop=document.getElementById('shopClick');
let backShop=document.getElementById('backShop');



//Главная динамика кликера
submitFormPicker.addEventListener('click',function(event){
	event.preventDefault();
	for(var z=0;z<massiveGreen.length;z++){
		massiveGreen[z].style.backgroundColor=picker.value;
	}
});
if(sessionStorage.getItem('count')){
	var counter=parseInt(sessionStorage.getItem('count'));
	h1Id.textContent='Кликов сделано:'+counter;
}
else{
	var counter=0;
}
if(sessionStorage.getItem('upgrade')){
	var upgrade0=parseInt(sessionStorage.getItem('upgrade'));
	h1Id.textContent='Кликов сделано:'+counter;
}
else{
	var upgrade0=1;
}
function clickPerTime(){
	counter++;
	h1Id.textContent='Кликов сделано:'+counter;
	sessionStorage.setItem('count',counter);
	sessionStorage.setItem('upgrade',upgrade0);
}
setInterval(clickPerTime,60000);
popUpClose.addEventListener('click',function(){
	grey.classList.add('hidden');
	popUp.classList.add('hidden');
});
document.addEventListener('keydown',function(event){
	if(event.keyCode=13){
		buttonId.blur();
	}
});




//Окно апгрейдов
upgrade1Button.addEventListener('click',function(){
	if(10>counter){
		popUp.classList.remove('hidden');
		grey.classList.remove('hidden');
		popUpText.textContent='Ошибка!Вы должны набрать не менее 10 кликов!';
	}
	else{
	counter=counter-10;
	upgrade0=upgrade0+1;
	h1Id.textContent='Кликов сделано:'+counter;
}

});
upgrade2Button.addEventListener('click',function(){
	if(20>counter){
		popUp.classList.remove('hidden');
		grey.classList.remove('hidden');
		popUpText.textContent='Ошибка!Вы должны набрать не менее 20 кликов!';
	}
	else{
	counter=counter-20;
	upgrade0=upgrade0+2;
	h1Id.textContent='Кликов сделано:'+counter;
}

});
upgrade3Button.addEventListener('click',function(){
	if(30>counter){
		popUp.classList.remove('hidden');
		grey.classList.remove('hidden');
		popUpText.textContent='Ошибка!Вы должны набрать не менее 30 кликов!';
	}
	else{
	counter=counter-30;
	upgrade0=upgrade0+3;
	h1Id.textContent='Кликов сделано:'+counter;
}

});
upgrade4Button.addEventListener('click',function(){
	if(40>counter){
		popUp.classList.remove('hidden');
		grey.classList.remove('hidden');
		popUpText.textContent='Ошибка!Вы должны набрать не менее 40 кликов!';
	}
	else{
	counter=counter-40;
	upgrade0=upgrade0+4;
	h1Id.textContent='Кликов сделано:'+counter;
}

});
upgrade5Button.addEventListener('click',function(){
	if(50>counter){
		popUp.classList.remove('hidden');
		grey.classList.remove('hidden');
		popUpText.textContent='Ошибка!Вы должны набрать не менее 50 кликов!';
	}
	else{
	counter=counter-50;
	upgrade0=upgrade0+5;
	h1Id.textContent='Кликов сделано:'+counter;
	}

});




//Кнопки привязки hidden
buttonId.addEventListener('click',function(){
	counter=counter+upgrade0;
	h1Id.textContent='Кликов сделано:'+counter;
	sessionStorage.setItem('count',counter);
	sessionStorage.setItem('upgrade',upgrade0);
});
settings.addEventListener('click',function(){
	shop.classList.add('hidden');
	backSettings.classList.remove('hidden');
	settings.classList.add('hidden');
	form.classList.remove('hidden');
});
backSettings.addEventListener('click',function(){
	shop.classList.remove('hidden');
	backSettings.classList.add('hidden');
	settings.classList.remove('hidden');
	form.classList.add('hidden');
});
clickUpgradeShop.addEventListener('click',function(){
	upgrade1Button.classList.remove('hidden');
	upgrade2Button.classList.remove('hidden');
	upgrade3Button.classList.remove('hidden');
	upgrade4Button.classList.remove('hidden');
	upgrade5Button.classList.remove('hidden');
	back.classList.add('hidden');	
	clickUpgradeShop.classList.add('hidden');
	backShop.classList.remove('hidden');
	clickPerMinuteUpgradeShop.classList.add('hidden');
});
shop.addEventListener('click',function(){
	shop.classList.add('hidden');
	back.classList.remove('hidden');
	settings.classList.add('hidden');
	clickUpgradeShop.classList.remove('hidden');
	clickPerMinuteUpgradeShop.classList.remove('hidden');

});
backShop.addEventListener('click',function(){
	back.classList.remove('hidden');
	backShop.classList.add('hidden');
	upgrade1Button.classList.add('hidden');
	upgrade2Button.classList.add('hidden');
	upgrade3Button.classList.add('hidden');
	upgrade4Button.classList.add('hidden');
	upgrade5Button.classList.add('hidden');
	clickUpgradeShop.classList.remove('hidden');
	clickPerMinuteUpgradeShop.classList.remove('hidden');
});
back.addEventListener('click',function(){
	shop.classList.remove('hidden');
	back.classList.add('hidden');
	upgrade1Button.classList.add('hidden');
	upgrade2Button.classList.add('hidden');
	upgrade3Button.classList.add('hidden');
	upgrade4Button.classList.add('hidden');
	upgrade5Button.classList.add('hidden');
	settings.classList.remove('hidden');
	clickUpgradeShop.classList.add('hidden');
	clickPerMinuteUpgradeShop.classList.add('hidden');
});
clickPerMinuteUpgradeShop.addEventListener('click',function(){
	back.classList.add('hidden');	
	clickUpgradeShop.classList.add('hidden');
	backShop.classList.remove('hidden');
	clickPerMinuteUpgradeShop.classList.add('hidden');
});