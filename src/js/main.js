import { Task } from './task';
import { Tomato } from './tomato';

let count = 0;
const imp = ['default', 'important', 'so-so'];
document
  .querySelector('.button-importance')
  .addEventListener('click', ({ target }) => {
    count += 1;
    if (count >= imp.length) {
      count = 0;
    }

    for (let i = 0; i < imp.length; i++) {
      if (count === i) {
        target.classList.add(imp[i]);
      } else {
        target.classList.remove(imp[i]);
      }
    }
  });

// console.log(task);
// console.log(task.increaseCount());
// task.changeName('Продать слона');
// console.log(task);
// console.log(task.increaseCount());
const tomato = new Tomato();

console.log(tomato);
tomato.addTask(new Task('Купить слона', 5));
tomato.addTask(new Task('Помыть слона', 5));
tomato.addTask(new Task('Продать слона', 5));

console.log(tomato.tasks[1].id);
tomato.activateTask(tomato.tasks[1].id);
console.log(tomato);
