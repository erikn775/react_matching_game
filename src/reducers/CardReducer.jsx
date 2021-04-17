	
export default function CardReducer(state = {flipped1: null, flipped2: null, matched: []}, action){
switch (action.type) {
    case "FLIP":
        if(state.flipped1 === null){
            return {...state, flipped1: action.payload}
        }
        else{
            return {...state, flipped2: action.payload}
        }
    default:
      return state;
  }
}
 
