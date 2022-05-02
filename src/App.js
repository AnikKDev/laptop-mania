import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import Login from './Components/Login/Login';
import UpdateItem from './Components/Home/Inventory/UpdateItem/UpdateItem';
import ManageInventories from './Components/ManageInventories/ManageInventories';
import AddItem from './Components/AddItem/AddItem';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/inventory/:id" element={<UpdateItem></UpdateItem>}></Route>
        <Route path="/manage-inventories" element={<ManageInventories></ManageInventories>}></Route>
        <Route path="/add-item" element={<AddItem></AddItem>}></Route>
      </Routes>
    </div>
  );
}

export default App;
