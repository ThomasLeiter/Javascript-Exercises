const productNameInput = document.getElementById("productNameInput");
const productPriceInput = document.getElementById("productPriceInput");

const outputTable = document.getElementById("outputTable");

const productTable = [];

function inputData(){
    let productName = productNameInput.value;
    let productPrice = parseFloat(productPriceInput.value);
    productTable.push({name: productName, price: productPrice});
    alert(`Sie haben ${productName} zum Preis von ${productPrice} in den Einkaufswagen gelegt!`);
}

function checkout(){
    printTable();
}

function calculateTotal(){
    let totalSum = 0;
    for (let product of productTable){
        totalSum += product.price;
    }
    return totalSum;
}

function printTable(){
    let tableHTML = "<tr><th>Produkt</th><th>Preis</th></tr>";
    for (let product of productTable){
        tableHTML += `<tr><td>${product.name}</td><td>${product.price}</td></tr>`;
    }
    tableHTML += `<tr><th>Summe</th><td>${calculateTotal()}</td></tr>`
    outputTable.innerHTML = tableHTML;
}