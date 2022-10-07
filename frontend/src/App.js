import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import SignUpScreen from './screens/Authentication/SignUpScreen';
import Header from './components/Header/Header'
import './index.css'

function App(){
  return (
    <Router>
      <Header />
        <Routes>
          <Route path='/inregistrare' element={<SignUpScreen/>}></Route>
        </Routes>
    </Router>
  );
}


export default App;
