//Create an array for items and price

let item1 = {
	name: 'Bread',
	price: 1.99
}
let item2 = {
	name: 'Milk',
	price: 2.49
}
let item3 = {
	name: 'Eggs',
	price: 0.99
}
let item4 = {
	name: 'Butter',
	price: 2.79
}

let items = [
	item1, item2, item3, item4
];

let total = 0;
let button = '<button id="add">Add to List</button>';

//let addEvent = document.querySelectorAll('#add')[0];
//addEvent.addEventListener('click', addToTotal);

let listEvent = document.querySelectorAll('#listbutton')[0];
listEvent.addEventListener('click', listItemsToHtml);

let totalEvent = document.querySelectorAll('#displaytotal')[0];
totalEvent.addEventListener('click', displayTotal);

function displayTotal() {
	let html = '';
	html += 'Total: ' + total;

	document.getElementById('displaytotal').innerHTML = html;
}

function addToTotal() {

	total += items.price;
}


function listItemsToHtml() {
	let html = '';
	


	for (let i = 0; i < items.length; i++) {
		html += 'Item: ' +
			items[i].name +
			' Price: ' + items[i].price + button + '<br />';
	}
	document.getElementById('list_items').innerHTML = html;


}






