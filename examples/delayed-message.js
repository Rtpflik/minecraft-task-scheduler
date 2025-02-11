import { TaskScheduler } from "./TaskScheduler";

console.log("Waiting 5 seconds...");

TaskScheduler.schedule(() => {
    console.log("Hello, this message was delayed by 5 seconds!");
}, 100);
