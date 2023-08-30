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
    console.log(id);
    for (let i = 0; i < this.tasks.length; i++) {
      console.log(this.tasks[i].id);
      if (this.tasks[i].id === id) {
        console.log(this.tasks[i]);
        this.activeTask.push(this.tasks[i]);
      }
    }
  }
}
// taskTime = 25, pauseTime = 5, bigPauseTime = 15, tasks = []
