import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './index.css'
import Header from './components/Header/Header'
import SignUpScreen from './screens/Authentication/SignUpScreen';
import LoginScreen from './screens/Authentication/LoginScreen';
import ResetPasswordScreen from './screens/Authentication/ResetPasswordScreen';
import NewPasswordConfirmationScreen from './screens/Authentication/NewPasswordConfirmationScreen';
import HomePage from './screens/HomePage/HomePage';
import Layout from '../src/components/Layout/Layout';
import DefaultLayout from './components/Layout/DefaultLayout';

function App(){
  return (
    <Router>
      <DefaultLayout>
        <Routes>
            <Route element={<Layout/>}>
              <Route exact path='/' element={<HomePage/>}></Route>
            </Route>
            <Route path='/inregistrare' element={<SignUpScreen/>}></Route>
            <Route path='/conectare' element={<LoginScreen/>}></Route>
            <Route path='/resetare-parola' element={<ResetPasswordScreen/>}></Route>
            <Route path='/password/reset/confirm/:uid/:token' element={<NewPasswordConfirmationScreen/>}></Route>
        </Routes>
      </DefaultLayout>
    </Router>
  );
}


export default App;
