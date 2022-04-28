console.log('Olá, mundo!');

// completed item
function removeCompleted(event) {
  const myEvent = event;
  myEvent.target.classList.remove('completed');
}

function completedItem(event) {
  const myEvent = event;
  myEvent.target.classList.add('completed');
  myEvent.target.addEventListener('dblclick', removeCompleted);
}

// selected item
const tarefaSelecionada = document.getElementsByClassName('selected');
function selectItem(event) {
  const myEvent = event;
  if (tarefaSelecionada.length >= 1) {
    tarefaSelecionada[0].classList.remove('selected');
  }
  myEvent.target.classList.add('selected');
  myEvent.target.addEventListener('dblclick', completedItem);
}

// create list
const input = document.getElementById('texto-tarefa');
const oList = document.getElementById('lista-tarefas');
const addButton = document.getElementById('criar-tarefa');
function createList() {
  const tarefa = document.createElement('li');
  tarefa.innerText = input.value;
  oList.appendChild(tarefa);
  tarefa.className = 'tarefa';
  tarefa.addEventListener('click', selectItem);
  input.value = '';
}
addButton.addEventListener('click', createList);

// clear list
const clearButton = document.getElementById('apaga-tudo');
function clearList() {
  oList.textContent = '';
}
clearButton.addEventListener('click', clearList);

// remove items
const removeCompletedItems = document.getElementById('remover-finalizados');
const removeSelectedButton = document.getElementById('remover-selecionado');
function clearCompleted() {
  const completed = document.getElementsByClassName('completed');
  for (let index = completed.length - 1; index >= 0; index -= 1) {
    completed[index].remove();
  }
}
function removeSelectedItem() {
  tarefaSelecionada[0].remove();
}
removeCompletedItems.addEventListener('click', clearCompleted);
removeSelectedButton.addEventListener('click', removeSelectedItem);

window.onload = () => {
};
