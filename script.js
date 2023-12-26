//1. Function decoration
//Возвращение функции(сохранение)
function calculateNumber() {
	let x = 5;
	x = x + 100;
	x = x / 5;

	return x;
}

const result = calculateNumber();
console.log(result);

//Параметры функции
function calculateNumber(initialValue) {
	let x = initialValue;
	x = x + 200;
	x = x / 5;

	return x;
}

const result1 = calculateNumber(5);
console.log(result1);
const result2 = calculateNumber(10);
console.log(result2);
const result3 = calculateNumber(10000);
console.log(result3);

//Пример
// Площадь круга = число П умноженное на радиус в квадрате
// S = п * r^2
function calculateCircleArea(circleRadius) {
	return 3.14 * circleRadius ** 2;
}

const circleArea1 = calculateCircleArea(5);
console.log(circleArea1);

const circleArea2 = calculateCircleArea(10);
console.log(circleArea2);

//Пример 2

function htmlElement(tag, id, text) {
	const element = document.createElement(tag);
	element.id = id;
	element.innerText = text;

	return element;
}

const h1Element = htmlElement('h1', 'header', 'просто текст');
console.log(h1Element);

const textHeaderElement = htmlElement('p', 'header__text', 'Описание страницы');

console.log(textHeaderElement);

// Добавляем элемент на страницу

document.body.append(h1Element);
document.body.append(textHeaderElement);

//кнопка + параметры по умолчанию

function createHTMLElement(tag = 'button', text = 'отправить', id) {
	const element = document.createElement(tag);
	element.innerText = text;
	element.id = id;

	return element;
}

const startElement = createHTMLElement();
document.body.append(startElement);

//arguments

function logArgsToConsole() {
	if (!arguments.length) {
		return;
	}
	for (let argument of arguments) {
		console.log(argument);
	}
	console.log('Больше аргументов нет');
}

logArgsToConsole(1, 2, 3, 5, 7, 9);

//2. Function expression - работает как переменная, не можем вызвать ее до создания

const sayHallo = function () {
	console.log('Hallo');
};

sayHallo();

// 3. Стрелочные функции - они безымянные, а значит их нужно создавать через переменную как Function expression

const sayBye = () => {
	console.log('Bye');
};

sayBye();

//return в стрелочных функциях

const saiBye = () => {
	console.log('Bye');
	return 6;
};

const value = saiBye();

//а можем вообще не писать ретерн, если аргумент один
// параметр arguments не работает
// нет возможности создавать свой контекст "this"

const satBye = () => 12;
console.log(satBye());
satBye();

// Пример стрелочной функции
// массив со сломанными функциями

const brokenLinks = ['vk', 'youtube', 'facebook'];

const fixLinksArray = linksArray => {
	const correctLinks = [];
	linksArray.forEach(function (brokenLink) {
		const fixedLink = 'https://' + brokenLink + '.com';
		correctLinks.push(fixedLink);
	});
	return correctLinks;
};

console.log(fixLinksArray(brokenLinks));
