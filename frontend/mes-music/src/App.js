import React from 'react';
import './App.css'
import {Route} from 'react-router-dom'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Common/Header/HeaderContainer'
import HomeContainer from './components/Home/HomeContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import PeoplesContainer from './components/Peoples/PeoplesContainer'
import RegistrationContainer from './components/Registration/RegistrationContainer'
import MusicContainer from './components/Music/MusicContainer'
import NewsContainer from './components/News/NewsContainer'
import TrainingContainer from './components/Training/TrainingContainer'
import FooterContainer from './components/Common/Footer/FooterContainer'
import ForgetPasswordContainer from './components/ForgetPassword/ForgetPasswordConteiner'
import {constantes} from "./static/constantes";

function App() {
  return (
    <div className="App" style={{backgroundImage : `url(${constantes.backgroundImage})`}}>
      <HeaderContainer/>
      <div className = "wrapper body">
        <Route path = '/home' render = {() => <HomeContainer/>} />
        <Route path = '/profile/:id?' render = {() => <ProfileContainer/>} />
        <Route path = '/dialogs' render = {() => <DialogsContainer/>} />
        {/*групи+друзі+фільтр */} <Route path = '/peoples' render = {() => <PeoplesContainer/>} />
        <Route path = '/registration' render = {() => <RegistrationContainer/>} />
        <Route path = '/music' render = {() => <MusicContainer/>} />
        <Route path = '/news' render = {() => <NewsContainer/>} />
        <Route path = '/training' render = {() => <TrainingContainer/>} />
        <Route path = '/forgetPassword' render = {() => <ForgetPasswordContainer/>} />
      </div>
      <FooterContainer/>
    </div>
  );
}

export default App;
