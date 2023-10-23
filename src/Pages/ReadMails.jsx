import React from 'react'
import { useSelector } from 'react-redux'
import EmailTab from '../Components/Emailtab/EmailTab'
import SingleMail from '../Components/SingleMail/SingleMail'

function ReadMails() {
    const mails = useSelector((state)=>state.emails)
    console.log(mails)

    const view = useSelector((state)=>state.view)
    const readMails = mails.filter(mail=> mail?.read === true)

  return (
    <div  className={`mail-box ${view ?"view":""}`}>
        <div className="all-mail-container">
      {readMails.map(
        email => <EmailTab data={email}/>
      )}
      </div>
      {view &&<div className="single-mail-container">
        <SingleMail/>
      </div>}
      </div>
    
  )
}

export default ReadMails