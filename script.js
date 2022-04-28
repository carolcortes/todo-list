console.log('Olá, mundo!');

// select item list
function selectItem(event) {
  const myEvent = event;
  const tarefaSelecionada = document.getElementsByClassName('tarefa selecionada');
  if (tarefaSelecionada.length >= 1) {
    tarefaSelecionada[0].classList.remove('selecionada');
  }
  myEvent.target.classList.add('selecionada');
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

window.onload = () => {
};
