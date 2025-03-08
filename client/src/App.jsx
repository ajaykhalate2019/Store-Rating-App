import './App.css'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import AdminDash from './components/Dashboard/AdminDash'
import RatingFrom from './components/Rating/RatingFrom'
import AddUser from './pages/AddUser'
import Sidebar from './pages/Sidebar'
import {BrowserRouter as Router,Routes, Route } from 'react-router-dom';
function App() {


  return (
    <> 
       {/* <Signup /> */}
       {/* <Sidebar/> */}
       {/* <AdminDash/> */}
       {/* <RatingFrom/> */}
       {/* <Login/> */}

       <Route>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/sidebar' element={<Sidebar/>}/>
          <Route path='/add' element={<AddUser/>}/>
          <Route path='/' element={<Login/>}/>

        </Routes>
       </Route>
    </>
  )
}

export default App
