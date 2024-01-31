import { createStore, createEvent } from "effector";

export const $task = createStore([]);

export const addTask = createEvent();

$task.on(addTask, (store, item) => [...store, item]); // ивент, который перезаписывае значение
