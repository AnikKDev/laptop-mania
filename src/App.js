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
import RequireAuth from './Components/RequireAuth/RequireAuth';
import { Toaster } from 'react-hot-toast';
import MyItems from './Components/MyItems/MyItems';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/my-items" element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path="/inventory/:id" element={
          <RequireAuth>
            <UpdateItem></UpdateItem>
          </RequireAuth>
        }></Route>
        <Route path="/manage-inventories" element={
          <RequireAuth>
            <ManageInventories></ManageInventories>
          </RequireAuth>
        }></Route>
        <Route path="/add-item" element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        }></Route>
        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <Toaster />
    </div>
  );
}

export default App;
