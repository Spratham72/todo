import { add,delete_completed,edit, remove, toggle } from "./constant"

export const add_todo=(payload)=>{
    
    return {
        type: add,
        payload:payload
    }
}
export const remove_todo=(payload)=>{
    
    return {
        type:remove,
        payload:payload
    }
}
export const edit_todo=(payload)=>{
    return { 
        type:edit,
        payload:payload
    }
}
export const toggle_status=(payload)=>{
    return {
        type:toggle,
        payload:payload
    }
}
export const remove_completed=()=>{
    return {
        type:delete_completed,
    }
}
