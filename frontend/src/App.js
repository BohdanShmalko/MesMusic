import React from 'react'
import './App.css'
import {Link, NavLink, Route} from 'react-router-dom'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Common/Header/HeaderContainer'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import PeoplesContainer from './components/Peoples/PeoplesContainer'
import RegistrationContainer from './components/Registration/RegistrationContainer'
import MusicContainer from './components/Music/MusicContainer'
import NewsContainer from './components/News/NewsContainer'
import TrainingContainer from './components/Training/TrainingContainer'
import FooterContainer from './components/Common/Footer/FooterContainer'
import ForgetPasswordContainer from './components/ForgetPassword/ForgetPasswordConteiner'
import {constantes} from './static/constantes'
import 'antd/dist/antd.css'
import {authorizationAPI} from './DAL/API'
import {Layout, Menu, Breadcrumb} from 'antd'
import {UserOutlined, CustomerServiceOutlined} from '@ant-design/icons'
import Home from './components/Home/Home'

const {SubMenu} = Menu
const {Header, Content, Footer, Sider} = Layout

function App() {
    //authorizationAPI.getToken()
    return (
        <Layout>
            <Header className="header">
                <div className="logo"/>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">Username</Menu.Item>
                    <Menu.Item key="2"><Link to = '/home'>Home</Link></Menu.Item>
                    <Menu.Item key="3"><Link to = '/home'>Log out</Link></Menu.Item>
                    <Menu.Item key="4"><Link to = '/registration'>Registration</Link></Menu.Item>
                </Menu>
            </Header>
            <Content style={{padding: '0 50px'}}>
                <Breadcrumb style={{margin: '16px 0'}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                    <Sider className="site-layout-background" width={200}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%'}}
                        >
                            <SubMenu key="sub1" icon={<UserOutlined/>} title="User Menu">
                                <Menu.Item key="1"><Link to = '/profile'>My profile</Link></Menu.Item>
                                <Menu.Item key="2"><Link to = '/dialogs'>Dialogs</Link></Menu.Item>
                                <Menu.Item key="3"><Link to = '/news'>News</Link></Menu.Item>
                                <Menu.Item key="4"><Link to = '/peoples'>My friends</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<CustomerServiceOutlined/>} title="Music">
                                <Menu.Item key="5"><Link to = '/music'>Music</Link></Menu.Item>
                                <Menu.Item key="6"><Link to = '/training'>Training</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content style={{padding: '0 24px', minHeight: 280}}>
                        <Route path='/home' render={() => <Home/>}/>
                        <Route path='/profile/:id?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/peoples' render={() => <PeoplesContainer/>}/>
                        <Route path='/registration' render={() => <RegistrationContainer/>}/>
                        <Route path='/music' render={() => <MusicContainer/>}/>
                        <Route path='/news' render={() => <NewsContainer/>}/>
                        <Route path='/training' render={() => <TrainingContainer/>}/>
                        <Route path='/forgetPassword' render={() => <ForgetPasswordContainer/>}/>
                    </Content>
                </Layout>
            </Content>
            <Footer style={{textAlign: 'center'}}>MesMusic ©2019 Created by students</Footer>
        </Layout>
        // <div className='App' style={{backgroundImage : `url(${constantes.backgroundImage})`}}>
        //   <HeaderContainer/>
        //   <div className = 'wrapper body'>

        //   </div>
        //   <FooterContainer/>
        // </div>
    );
}

export default App;
