
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Homepage from './pages/Homepage'; 
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/adduser" element={<AddUser/>}/>
          <Route exact path="/edituser/:id" element={<EditUser/>}/>
          <Route path="/viewuser/:id" element={<ViewUser />} />

        </Routes>
      
      </Router>
      
    </div>
  );
}

export default App;
