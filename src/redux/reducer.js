import { add, delete_completed, edit, remove, toggle } from "./constant";

const initialState = [];
export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case add:
      return [...state, payload];
    case remove:
      return state.filter((el) => el.id !== payload);
    case edit:
        console.log(payload)
      return state.map(el=>{
          if(el.id==payload.id){
              return payload
          }else{
              return el
          }
      });
      
    case toggle:
      return state.map((el) =>
        el.id === payload ? { ...el, ["status"]: !el.status } : el
      );
    case delete_completed:
      return state.filter((el) => el.status === false);
    default:
      return state;
  }
};
