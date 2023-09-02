export class Tomato {
  constructor(
    obj = { tasktime: 25, pausetime: 5, bigpausetime: 15, tasks: [] },
  ) {
    this.taskTime = obj.tasktime;
    this.pauseTime = obj.pausetime;
    this.bigPauseTime = obj.bigpausetime;
    this.tasks = obj.tasks;
    this.activeTask = [];
  }
  addTask(task) {
    return this.tasks.push(task);
  }
  activateTask(id) {
    for (const task of this.tasks) {
      if (task.id === id) {
        this.activeTask.push(task);
      }
    }
  }

  runTimer() {
    let seconds = this.taskTime * 60;
    if (this.activeTask.length) {
      let x = setInterval(() => {
        if (seconds > 0) {
          time(seconds);
          seconds--;
        } else {
          console.log('You need a rest');
          clearInterval(x);
          this.activeTask[0].increaseCount();
          let restSec =
            this.activeTask[0].getTaskCount % 3
              ? this.pauseTime * 60
              : this.bigPauseTime * 60;
          let rest = setInterval(() => {
            if (restSec > 0) {
              time(restSec);
              restSec--;
            } else {
              console.log('You resttime is over');
              clearInterval(rest);
            }
          }, 1000);
        }
      }, 1000);
    } else {
      console.warn('Нет активной задачи');
    }
  }

  increaseTaskCount(id) {
    for (const task of this.tasks) {
      if (task.id === id) {
        task.increaseCount();
      }
    }
  }
}

const time = (seconds) => {
  const min = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const sec = (seconds % 60).toString().padStart(2, '0');
  console.log(`${min}:${sec}`);
};
