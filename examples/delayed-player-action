import { world } from "@minecraft/server";
import { TaskScheduler } from "./TaskScheduler";

world.events.playerJoin.subscribe((event) => {
    const player = event.player;
    
    console.log(`${player.name} joined. Preparing environment...`);

    TaskScheduler.schedule(() => {
        console.log(`${player.name}, welcome! Here’s a starter kit.`);
    }, 100); // 5-second delay
});
