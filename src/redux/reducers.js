
function categoryReducer(state = "", action) {
     switch (action.type) {
       case "CHANGE_CATEGORY":
         return action.payload;         
      case "UPDATE_SELECTED_LINK":
        return action.payload;
       default:
         return state;
     }
   }

   export default categoryReducer;