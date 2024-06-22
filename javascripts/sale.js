 const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
const productElement= document.getElementById("product");
let purchases = [];

function add() {
  const productId= parseInt(productElement.value);
  const product= products[productId];
  const price = parseInt(priceElement.value);
  const number = parseInt(numberElement.value);
  let purchase = {
    price: price,
    number: number,
    nombre: product.nombre,
    id: productId
    };
  purchases.push(purchase);
  window.alert(`${display()}\nEl subtotal es de ${subtotal()} yenes`);
  
}



function display() {
  let string = "";
  for (let i = 0; i < purchases.length; i++) {
    string += `${purchases[i].nombre} ${purchases[i].price} yenes ${purchases[i].number} unidades\n`;
  }
  return string;
}

function subtotal() {
  let sum = 0;
  for (let i = 0; i < purchases.length; i++) {
    sum +=  purchases[i].price * purchases[i].number;
  }
  return sum;
}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  window.alert(`El subtotal es: ${sum} yenes, costo del envio: ${postage} yenes, costo total: ${sum + postage} yenes`);
  purchases = [];
  priceElement.value = "";
  numberElement.value = "";
}

function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0;
  } else if (sum < 2000) {
    return 500;
  } else {
    return 250;
  }
}

const products = {
  "500": { id: "500", nombre: "Mezcla Original 200g", price: 500 },
  "900": { id: "900", nombre: "Mezcla Original 500g", price: 900 },
  "700": { id: "700", nombre: "Mezcla Especial 200g", price: 700 },
 "1200": { id: "1200", nombre: "Mezcla Especial 500g", price: 1200 },
};



























































































