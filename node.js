let numbers = Array.from({ length: 30 }, () => Math.floor(Math.random() * 100));
let table = document.createElement("table");
let index = 0;

for (let i = 0; i < 5; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 6; j++) {
        let cletka = document.createElement("td");
        cletka.textContent = numbers[index];
        if (numbers[index] >= 50) {
            cletka.style.backgroundColor = "orange";
        }
        row.appendChild(cletka);
        index++;
    }
    table.appendChild(row);
}
document.body.appendChild(table);

function foo() {
    let cells = table.getElementsByTagName("td");
    for (let i = 0; i < cells.length; i++) {
        let number2 = Math.floor(Math.random() * 100);
        cells[i].textContent = number2;
        if (number2 >= 50) {
            cells[i].style.backgroundColor = "orange";
        }
        else {
            cells[i].style.backgroundColor = "white";
        }
    }
}
const button = document.getElementById("but");
button.addEventListener("click", foo);