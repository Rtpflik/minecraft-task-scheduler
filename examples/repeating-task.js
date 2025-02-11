import { TaskScheduler } from "./TaskScheduler";

console.log("Starting repeating task...");

const taskId = TaskScheduler.scheduleRepeating(() => {
    console.log("This runs every 2 seconds!");
}, 40);

TaskScheduler.schedule(() => {
    TaskScheduler.cancel(taskId);
    console.log("Repeating task stopped after 10 seconds.");
}, 200); // Stops after 10 seconds
