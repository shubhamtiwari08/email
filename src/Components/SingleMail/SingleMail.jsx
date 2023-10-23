import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './singleMail.css'
import { addToFav } from '../../Redux/actions'

function SingleMail() {

    const oneMail = useSelector((state)=>state.singleMail)
    
   const emails = useSelector((state)=>state.emails)

   const selectedEmail = emails.find(mail=>mail.id === oneMail.id)

   const firstLetter = selectedEmail?.from?.name.slice(0,1).toUpperCase()


   const dispatch = useDispatch()

   const handleFav=()=>{
      addToFav(dispatch,selectedEmail)
   }

   const dateandtime = new Date(selectedEmail?.date)

   const mailDate = JSON.stringify(dateandtime).slice(1,11)
   const mailTime = JSON.stringify(dateandtime).slice(12,17)

  return (
    <div className='singlemail-container'>
        <header>
        <div className="profile">
            <div className="profile-circle">
                <div className="first-letter">{firstLetter}</div>
            </div>
          <div className="name-box">
          <h2>{selectedEmail?.from?.name}</h2>
            <p>{mailDate}{mailTime}</p>
          </div>
        </div>
        <button onClick={handleFav}>favorite</button>
        </header>
        <div className="mail-body">
        <div dangerouslySetInnerHTML={{__html:oneMail.body}}/>
        </div>
    </div>
  )
}

export default SingleMail