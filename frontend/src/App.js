import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import SignUpScreen from './screens/Authentication/SignUpScreen';
import LoginScreen from './screens/Authentication/LoginScreen';
import './index.css'

function App(){
  return (
    <Router>
        <Routes>
          <Route path='/inregistrare' element={<SignUpScreen/>}></Route>
          <Route path='/conectare' element={<LoginScreen/>}></Route>
        </Routes>
    </Router>
  );
}


export default App;
