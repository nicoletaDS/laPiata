import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './index.css'
import Header from './components/Header/Header'
import SignUpScreen from './screens/Authentication/SignUpScreen';
import LoginScreen from './screens/Authentication/LoginScreen';
import ResetPasswordScreen from './screens/Authentication/ResetPasswordScreen';
import NewPasswordConfirmationScreen from './screens/Authentication/NewPasswordConfirmationScreen';

function App(){
  return (
    <Router>
      <Header />
        <Routes>
          <Route path='/inregistrare' element={<SignUpScreen/>}></Route>
          <Route path='/conectare' element={<LoginScreen/>}></Route>
          <Route path='/resetare-parola' element={<ResetPasswordScreen/>}></Route>
          <Route path='/password/reset/confirm/:uid/:token' element={<NewPasswordConfirmationScreen/>}></Route>
        </Routes>
    </Router>
  );
}


export default App;
