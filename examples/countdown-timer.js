import { TaskScheduler } from "./TaskScheduler";

let countdown = 10;

const countdownTask = TaskScheduler.scheduleRepeating(() => {
    console.log(`Countdown: ${countdown} seconds left`);
    countdown--;

    if (countdown <= 0) {
        TaskScheduler.cancel(countdownTask);
        console.log("Countdown complete!");
    }
}, 20); // Runs every second
