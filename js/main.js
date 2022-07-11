const listaSpesa = ['patate', 'sale', 'latte', 'pane', 'pomodori'];

const listaDom = document.getElementById('Lista');

let i = 0;
while (i < listaSpesa.length) {
    listaDom.innerHTML += `<li class="elementi">${listaSpesa[i]}</li>`
    i++;
}