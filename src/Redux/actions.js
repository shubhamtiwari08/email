 
export const fetchMails = async (dispatch) => {
    try {
      dispatch({ type: 'FETCH_MAIL_LOADING' })
      const response = await fetch(
        'https://flipkart-email-mock.vercel.app/',
      )
      const data = await response.json()
      console.log(data,"data")
      dispatch({ type: 'FETCH_MAIL_SUCCESS', payload: data })
    } catch (error) {
      console.error('Error fetching mail data:', error)
      dispatch({ type: 'FETCH_MAIL_FAILURE' })
    }
  }

export const addToRead = (dispatch,data)=>{
    dispatch({type:"ADD_READ",payload:data})
    console.log(data)
}


export const addToFav = (dispatch,data)=>{
    dispatch({type:"ADD_FAV",payload:data})
    console.log(data)
}

export const getSingleMail = async(dispatch,id)=>{
    try {
        dispatch({ type: 'FETCH_MAIL_LOADING' })
        const response = await fetch(
          `https://flipkart-email-mock.vercel.app/?id=${id}`,
        )
        const data = await response.json()
        console.log(data,"data")
        dispatch({ type: 'FETCH_SINGLE_MAIL', payload: data })
      } catch (error) {
        console.error('Error fetching mail data:', error)
        dispatch({ type: 'FETCH_MAIL_FAILURE' })
      }
}

export const setView=(dispatch,value)=>{
    dispatch({type:"SET_VIEW",payload:value})
}