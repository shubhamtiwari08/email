const initialState = {
    emails: [],
    singleMail:{},
    view:false,
    loading:false,
    error:null,
  };
  
  const emailReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_MAIL_LOADING":
        return {
          ...state,
          loading: true,
          error: null
        };
      case "FETCH_MAIL_SUCCESS":
        return {
          ...state,
          emails: [...action.payload.list]
        };
      case "FETCH_MAIL_FAILURE":
        return {
          ...state,
          error: "error fetching data",
          loading: false
        };
        case "ADD_READ":
          const mails = state.emails.map(item=>{
            if(item.id === action.payload.id){
                return ({...item,read:true})
            }else{
                return item
            }
          })

            return {
              ...state,
              emails:[...mails],
              error:null,
              loading:false,
            };
            case "ADD_FAV":
                const fav = state.emails.map(item=>{
                    if(item.id === action.payload.id){
                        return ({...item,favorite:true})
                    }else{
                        return item
                    }
                  })
                    return {
                      ...state,
                      emails:[...fav],
                      error:null,
                      loading:false,
                    };
              
            case"FETCH_SINGLE_MAIL":
            return{
                ...state,
                singleMail:{...action.payload}
            }
            case"SET_VIEW":
            return{
                ...state,
                view:action.payload,
            }
      default:
        return state;
    }
  };
  
  export default emailReducer;
  