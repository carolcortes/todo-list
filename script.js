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
function selectItem(event) {
  const myEvent = event;
  const tarefaSelecionada = document.getElementsByClassName('tarefa selected');
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

// remove completed items
const removeCompletedItems = document.getElementById('remover-finalizados');
function clearCompleted() {
  const completed = document.getElementsByClassName('completed');
  for (let index = completed.length - 1; index >= 0; index -= 1) {
    completed[index].remove();
  }
}
removeCompletedItems.addEventListener('click', clearCompleted);

window.onload = () => {
};
