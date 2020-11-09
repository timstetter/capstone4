let nameArray = [];
let priceArray = [];

function addToCart(productName, productPrice) {
	nameArray.push(productName);
	priceArray.push(productPrice);
}

function printCart() {
	let i;
	let total = 0;
	
	for (i = 0; i < priceArray.length; i++) {
		total += priceArray[i];
	}
	
	let totalCart = document.getElementById("totalcart");
	
	totalCart.innerHTML = "Total: $" + total;
	
}