import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import EmailTab from '../Components/Emailtab/EmailTab'
import SingleMail from '../Components/SingleMail/SingleMail'

function Favorites() {
    const mails = useSelector((state)=>state.emails)
    console.log(mails)

    const view = useSelector((state)=>state.view)

   const favoriteMails = mails.filter(email=>email?.favorite === true)

  return (
    <div className={`mail-box ${view ?"view":""}`} >
          <div className="all-mail-container">
      {favoriteMails.map(
        email => <EmailTab data={email}  />
      )}
      </div>
      {view &&<div className="single-mail-container">
        <SingleMail/>
      </div>}
    </div>
  )
}

export default Favorites