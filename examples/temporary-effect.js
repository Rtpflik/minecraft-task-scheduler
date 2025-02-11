import { world } from "@minecraft/server";
import { TaskScheduler } from "./TaskScheduler";

world.events.playerJoin.subscribe((event) => {
    const player = event.player;

    console.log(`${player.name} has received a temporary effect!`);

    TaskScheduler.schedule(() => {
        console.log(`${player.name}'s effect has worn off.`);
    }, 400); // 20 seconds 
});
