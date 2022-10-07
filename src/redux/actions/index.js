import { WRITE_MY_NAME  , ADD_NAME_TO_STORE , ADD_ROUTE , EDIT_ROUTE , DELETE_ROUTE, EDIT_TASK, ADD_TASK, DELETE_TASK } from "../types";


export const WriteMyName = (name) => {
    return {
        type: WRITE_MY_NAME,
        payload: name
    }
}


export const AddMyName = (name) => {
    return {
        type: ADD_NAME_TO_STORE,
        payload: name
    }
}



export const AddRoute = (route) => {
    return {
        type: ADD_ROUTE,
        payload: route
    }
}


export const EditRoute = (route) => {
    return {
        type: EDIT_ROUTE,
        payload: route
    }
}

export const DeleteRoute = (id) => {
    return {
        type: DELETE_ROUTE,
        payload:id
    }
}


// to-do-list-actions

export const AddTask = (route) => {
    return {
        type: ADD_TASK,
        payload: route
    }
}


export const EditTask = (route) => {
    return {
        type: EDIT_TASK,
        payload: route
    }
}


export const DeleteTask = (id) => {
    return {
        type: DELETE_TASK,
        payload:id
    }
}

// the-end-of-to-do-list-actions


