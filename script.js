console.log('Olá, mundo!');

// selected item
const tarefaSelecionada = document.getElementsByClassName('selected');
function selectItem(event) {
  const myEvent = event;
  if (tarefaSelecionada.length >= 1) {
    tarefaSelecionada[0].classList.remove('selected');
  }
  myEvent.target.classList.add('selected');
}

// completed items
function doubleClick(event) {
  const myEvent = event;
  myEvent.target.classList.toggle('completed');
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
  tarefa.addEventListener('dblclick', doubleClick);
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

// move items
const upButton = document.getElementById('mover-cima');
const downButton = document.getElementById('mover-baixo');
const tarefa = document.getElementsByClassName('tarefa');
function moveUp() {
  for (let index = 0; index < tarefa.length; index += 1) {
    if (tarefaSelecionada[0] !== tarefa[0] && tarefa[index] === tarefaSelecionada[0]) {
      const change = tarefa[index - 1].innerText;
      tarefa[index - 1].innerText = tarefaSelecionada[0].innerText;
      tarefa[index].innerText = change;
      tarefa[index - 1].classList.add('selected');
    }
  }
  if (tarefaSelecionada.length >= 2) {
    tarefaSelecionada[tarefaSelecionada.length - 1].classList.remove('selected');
  }
}
function moveDown() {
  for (let i = 0; i < tarefa.length; i += 1) {
    if (tarefaSelecionada[0] !== tarefa[tarefa.length - 1] && tarefa[i] === tarefaSelecionada[0]) {
      const change = tarefa[i + 1].innerText;
      tarefa[i + 1].innerText = tarefaSelecionada[0].innerText;
      tarefa[i].innerText = change;
      tarefa[i + 1].classList.add('selected');
    }
  }
  if (tarefaSelecionada.length >= 2) {
    tarefaSelecionada[0].classList.remove('selected');
  }
}
upButton.addEventListener('click', moveUp);
downButton.addEventListener('click', moveDown);

// save list
const salvar = document.getElementById('salvar-tarefas');
function saveList() {
  if (tarefa.length !== 0) {
    console.log(tarefa.length);
    const tarefasList = [];
    for (let index = 0; index < tarefa.length; index += 1) {
      tarefasList.push({
        texto: tarefa[index].innerText,
        classe: tarefa[index].className,
      });
    }
    localStorage.setItem('savedList', JSON.stringify(tarefasList));
  }
}
salvar.addEventListener('click', saveList);

function oldList() {
  const savedList = JSON.parse(localStorage.getItem('savedList'));
  if (savedList) {
    for (let index = 0; index < savedList.length; index += 1) {
      const tarefaSaved = document.createElement('li');
      tarefaSaved.innerText = savedList[index].texto;
      tarefaSaved.className = savedList[index].classe;
      oList.appendChild(tarefaSaved);
      tarefaSaved.addEventListener('click', selectItem);
      tarefaSaved.addEventListener('dblclick', doubleClick);
      saveList();
    }
  }
}
oldList();
