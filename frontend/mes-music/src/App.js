import React from 'react';
import './App.css'
import {Route} from 'react-router-dom'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Common/Header/HeaderContainer'
import HomeContainer from './components/Home/HomeContainer'
import MessagesContainer from './components/Messages/MessagesContainer'
import PeoplesContainer from './components/Peoples/PeoplesContainer'
import RegistrationContainer from './components/Registration/RegistrationContainer'
import MusicContainer from './components/Music/MusicContainer'
import NewsContainer from './components/News/NewsContainer'
import TrainingContainer from './components/Training/TrainingContainer'
import FooterContainer from './components/Common/Footer/FooterContainer'
import ForgetPasswordContainer from './components/ForgetPassword/ForgetPasswordConteiner'

function App() {
  return (
    <div className="App">
      <HeaderContainer/>
      <div className = "wrapper">
        <Route path = '/home' render = {() => <HomeContainer/>} />
        <Route path = '/profile/:id?' render = {() => <ProfileContainer/>} />
        <Route path = '/messages' render = {() => <MessagesContainer/>} />
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
