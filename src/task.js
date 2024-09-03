let currentTaskId = 0;

export function CreateTask(title, dueDate, priority, notes) {
  this.title = title;
  this.dueDate = dueDate;
  this.priority = priority;
  this.notes = notes;
  this.id = currentTaskId;
  currentTaskId++;
}
