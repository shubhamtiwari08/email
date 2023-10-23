
import { useEffect } from 'react';
import './App.css';
import EmailTab from './Components/Emailtab/EmailTab';
import Navbar from './Components/Navbar/Navbar';
import { fetchMails } from './Redux/actions';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router';
import AllMails from './Pages/AllMails';
import ReadMails from './Pages/ReadMails';
import UnreadMails from './Pages/UnreadMails';
import Favorites from './Pages/Favorites';

function App() {

  const dispatch=useDispatch()

  useEffect(()=>{
    fetchMails(dispatch)
    console.log("call")
  },[])

  return (
    <div className="App">
      <Navbar/>
    

    <Routes>
      <Route path='/' element={<AllMails/>}/>
      <Route path='/read' element={<ReadMails/>}/>
      <Route path='/unread' element={<UnreadMails/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
    </Routes>
 
    </div>
  );
}

export default App;
