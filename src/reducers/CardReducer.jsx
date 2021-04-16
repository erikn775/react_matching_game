	
export default function CardReducer(state = {flippedArr: [], matched: []}, action){
switch (action.type) {
    case "FLIP":
        return {...state, flippedArr: action.payload};
    default:
      return state;
  }
}
 
