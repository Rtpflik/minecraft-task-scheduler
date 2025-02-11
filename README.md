# 📌 Bedrock Async Task Scheduler

A lightweight and efficient task scheduling system for Minecraft Bedrock scripting. Works like setTimeout() and setInterval() in JavaScript, enabling delayed and repeating tasks without manual tick tracking.

# 📦 Installation

## Option 1: Clone the Repository

```git clone https://github.com/Rtpflik/minecraft-task-scheduler.git```

## Option 2: Download Manually
	1.	Download the latest version from the Releases page.
	2.	Copy the src folder into your Bedrock scripting project.

# Import the Module in Your Script

```import { TaskScheduler } from "./TaskScheduler";```

# ⚡ Features

✅ Schedule delayed tasks (Run a function after X ticks)

✅ Schedule repeating tasks (Loop every X ticks)

✅ Cancel scheduled tasks (Stop any running task)

✅ Lightweight & optimized (No unnecessary event listeners)

# 🚀 Usage Examples

## 🔹 Schedule a Delayed Function
```
TaskScheduler.schedule(() => {
    console.log("This message appears after 5 seconds!");
}, 100);
```
## 🔹 Schedule a Repeating Task
```
const taskId = TaskScheduler.scheduleRepeating(() => {
    console.log("This message repeats every 2 seconds!");
}, 40);
```
## 🔹 Cancel a Repeating Task
```
const taskId = TaskScheduler.scheduleRepeating(() => {
    console.log("Repeating task running...");
}, 40);

// Stop the task after 10 seconds
TaskScheduler.schedule(() => {
    TaskScheduler.cancel(taskId);
    console.log("Repeating task stopped.");
}, 200);
```
## 🔹 Create a Countdown Timer
```
let countdown = 10;

const countdownTask = TaskScheduler.scheduleRepeating(() => {
    console.log(`Countdown: ${countdown} seconds left`);
    countdown--;

    if (countdown <= 0) {
        TaskScheduler.cancel(countdownTask);
        console.log("Countdown complete!");
    }
}, 20); // Runs every second (20 ticks)
```
## 🔹 Delay Player Action (Simulating async behavior)
```

world.events.playerJoin.subscribe((event) => {
    const player = event.player;
    
    console.log(`${player.name} joined. Preparing their environment...`);
    
    TaskScheduler.schedule(() => {
        console.log(`${player.name}, welcome! Here’s a starter kit.`);
    }, 100); // 5-second delay
});
```
## 🔹 Create a Temporary Effect That Removes Itself
```

world.events.playerJoin.subscribe((event) => {
    const player = event.player;
    
    console.log(`${player.name} has temporary night vision!`);

    TaskScheduler.schedule(() => {
        console.log(`${player.name}'s night vision effect has ended.`);
    }, 400); // Effect lasts for 20 seconds (400 ticks)
});
```
## 🛑 Canceling a Task Manually
```
const taskId = TaskScheduler.schedule(() => {
    console.log("This task will be canceled before running!");
}, 100);

// Cancel the task before it runs
TaskScheduler.cancel(taskId);
```
# 📜 API Documentation

## 🔹 TaskScheduler.schedule(callback, delayTicks)

Runs a function once after a specified number of ticks.

### Parameters:
	•	callback: () => void – The function to execute.
	•	delayTicks: number – The delay in game ticks (20 ticks = 1 second).

### fReturns:
	•	number – The task ID (used for cancellation).

### Example:

```TaskScheduler.schedule(() => console.log("Hello after 5 seconds!"), 100);```

## 🔹 TaskScheduler.scheduleRepeating(callback, intervalTicks)

Runs a function repeatedly every specified number of ticks.

### Parameters:
	•	callback: () => void – The function to execute.
	•	intervalTicks: number – The interval in game ticks (20 ticks = 1 second).

### Returns:
	•	number – The task ID (used for cancellation).

### Example:

```const taskId = TaskScheduler.scheduleRepeating(() => console.log("Repeating..."), 40);```

## 🔹 TaskScheduler.cancel(taskId)

Stops a scheduled task.

### Parameters:
	•	taskId: number – The ID of the task to cancel.

### Example:

```TaskScheduler.cancel(taskId);```

# 📜 License

This project is licensed under a modified MIT License. It allows free use, modification, and distribution, but reselling the code as-is is prohibited

# 🔗 Links & Credits

✅ GitHub Repository: https://github.com/Rtpflik/minecraft-task-scheduler

✅ Author: Rtpflik

✅ Discord: rtpflik

You can message me on discord if you have any suggestions or if you need support.
