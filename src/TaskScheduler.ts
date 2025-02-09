import { world, system } from "@minecraft/server";

class TaskScheduler {
    private static tasks: { id: number, runAt: number, interval: number | null, callback: () => void }[] = [];
    private static taskIdCounter = 0;

    static init() {
        world.events.tick.subscribe(() => {
            const currentTick = system.currentTick;
            for (let i = this.tasks.length - 1; i >= 0; i--) {
                const task = this.tasks[i];
                if (currentTick >= task.runAt) {
                    task.callback();
                    if (task.interval !== null) {
                        task.runAt = currentTick + task.interval;
                    } else {
                        this.tasks.splice(i, 1);
                    }
                }
            }
        });
    }

    static schedule(callback: () => void, delayTicks: number): number {
        const id = ++this.taskIdCounter;
        this.tasks.push({ id, runAt: system.currentTick + delayTicks, interval: null, callback });
        return id;
    }

    static scheduleRepeating(callback: () => void, intervalTicks: number): number {
        const id = ++this.taskIdCounter;
        this.tasks.push({ id, runAt: system.currentTick + intervalTicks, interval: intervalTicks, callback });
        return id;
    }

    static cancel(taskId: number) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }
}

TaskScheduler.init();
export { TaskScheduler };
