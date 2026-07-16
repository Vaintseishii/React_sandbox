import { Task, List, AppState } from "./types";
import { Action } from "./actions";

export const AppStateReducer = (
    state: AppState,
    action: Action
): AppState | void => {
    switch (action.type) {
        case "ADD_LIST": {
            const highestId = Math.max(...state.lists.map((list) => parseInt(list.id)));
            return { lists: [...state.lists, {
                text: action.payload,
                id: highestId + 1 + "",
                tasks: [] 
            }]}
        }
        case"ADD_TASK": {
            const { listId, text } = action.payload;
            const targetListIndex = state.lists.findIndex((list) => list.id === listId);
            if (targetListIndex < 0) {
                return state;
            }
            const targetList = state.lists[targetListIndex];
            const highestTaskId = Math.max(...targetList.tasks.map((task) => parseInt(task.id)));
            const newTask: Task = {
                id: highestTaskId + 1 + "",
                text,
            };
            const updatedList: List = {
                ...targetList,
                tasks: [...targetList.tasks, newTask],
            };
            const updatedLists = [...state.lists];
            updatedLists[targetListIndex] = updatedList;
            return { lists: updatedLists };
        }
    default:
        return state;
    }
};