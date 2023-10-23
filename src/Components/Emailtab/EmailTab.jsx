import React from 'react'
import './emailTab.css'
import { addToRead, getSingleMail, setView } from '../../Redux/actions'
import { useDispatch, useSelector } from 'react-redux'

function EmailTab({data}) {

  const dispatch = useDispatch()

  const view = useSelector((state)=>state.view)
  const singleMail = useSelector((state)=>state.singleMail)

  const {id,from,date,subject,short_description} = data

  const firstLetter = from?.name.slice(0,1).toUpperCase()
 
  const handleRead=()=>{
    getSingleMail(dispatch,id)
    addToRead(dispatch,data)
    if(data.read !== true){
      setView(dispatch,true)

    }else if(view === false){
       setView(dispatch,true)
    }
    else if(singleMail.id === data.id){
      setView(dispatch,false)
      getSingleMail(dispatch,999)
    }
  }

  const dateandtime = new Date(date)

 const mailDate = JSON.stringify(dateandtime).slice(1,11)
 const mailTime = JSON.stringify(dateandtime).slice(12,17)

  return (
    <div className='email-tab-container' style={{backgroundColor:data?.read ? "#F2F2F2":"#FFFFFF",border:singleMail.id === data.id?"1px solid red":""}} onClick={handleRead}>
        <div className="profile">
            <div className="profile-circle">
                <div className="first-letter">{firstLetter}</div>
            </div>
        </div>
        <div className="email-info">
          <p>From: <span>{from?.name } &lt; {from?.email} &gt;</span></p>
          <p>Subject: <span>{subject}</span></p>
          <p>{short_description}</p>
          <div className="date-other-info">
          <p>{mailDate} {mailTime}</p>
          <p>{data?.favorite? "Favorite":""}</p>
          </div>
        </div>
    </div>
  )
}

export default EmailTab