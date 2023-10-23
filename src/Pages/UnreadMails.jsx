import React from 'react'
import { useSelector } from 'react-redux'
import EmailTab from '../Components/Emailtab/EmailTab'
import SingleMail from '../Components/SingleMail/SingleMail'

function UnreadMails() {
    const mails = useSelector((state)=>state.emails)
    console.log(mails)

    const unreadMails = mails.filter((email)=> email?.read !== true)

    const view = useSelector((state)=>state.view)
    console.log(unreadMails)
  return (
    <div  className={`mail-box ${view ?"view":""}`}>
          <div className="all-mail-container">
      {unreadMails.map(
        email => <EmailTab data={email}/>
      )}
      </div>
       {view &&<div className="single-mail-container">
        <SingleMail/>
      </div>}
    </div>
  )
}

export default UnreadMails