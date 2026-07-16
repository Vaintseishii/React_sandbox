// export type Action = {
//     type: "ADD_LIST";
//     payload: string;
// } | {
//     type: "ADD_TASK";
//     payload: { text: string, listId: string };
// };

interface AddListAction {
    type: "ADD_LIST";
    payload: string;
}

interface AddTaskAction {
    type: "ADD_TASK";
    payload: { text: string, listId: string };
}


export type Action = AddListAction | AddTaskAction;