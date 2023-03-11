import Home from '../src/Screens/Home.js'
import { 
  BrowserRouter as Router, 
  Routes, 
  Route

} from 'react-router-dom';
import Login from './Screens/Login.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
