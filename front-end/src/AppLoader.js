import React, { useState, useEffect } from 'react';
import AppContext from "./AppContext";
import logo from "./ui/logo-coral.svg";

import "./css/uifont.css";
import "./css/Props.css";
import "./css/App.css";

import {
    Route,
    Switch,
    BrowserRouter,
    HashRouter
} from "react-router-dom";

//Screen
import Sidebar from "./screens/sidebar";
import HomePage from "./screens/home";
import Rightbar from "./screens/rightbar";
import CoursePage from "./screens/course";
import DiscoverPage from "./screens/discover";
import CategoriesPage from "./screens/categories";
import MyCoursesPage from "./screens/mycourses";
import AdminHome from './screens/Admin/adminHome';
import AdminCat from './screens/Admin/adminCat';
import Accueil from './screens/accueil';

import AccountPage from "./screens/oauth";

import fire_base from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
global.fire = {
    ID: null
};
global.firebase = fire_base;
var firebaseConfig = {
    apiKey: "AIzaSyDEjbrp2tBYhxJu7wBDsGEgiv092-nKeF0",
    authDomain: "filrouge-e8236.firebaseapp.com",
    projectId: "filrouge-e8236",
    storageBucket: "filrouge-e8236.appspot.com",
    messagingSenderId: "985019836996",
    appId: "1:985019836996:web:88f2999a515c2718d96a11"
  };
  global.firebase.initializeApp(firebaseConfig);



function AppLoader(){

    const [isFireUser, setIsFireUser] = useState(false);

    const initFirebase = async (context) => {
        global.firebase.auth().onAuthStateChanged((user)=>{
          if(user){
              console.log("You are signed in...")
              setIsFireUser(true);
          }else{
            console.log("You are guest...");
            setIsFireUser(false);
            setTimeout(()=>{
                context.setAppLoaded(true);
            }, 500);
          }
        });
    }

    const splash = (context) => {
        return (
            <div className="App flex">      
                <div className="splash abs abc">
                    <img src={logo} className="bl" />
                </div>
            </div>
        )
    }

    const loadApp = async (context) => {
        await initFirebase(context);
    }

    const UserPath = ({match}) => {
        return(
          <HashRouter>
            <Sidebar/>
            <div className="app-content">
            <Route exact path="/" component={HomePage} />
            <Route path="/course/:courseid" exact component={CoursePage} />
            <Route path="/discover" exact component={DiscoverPage} />
            <Route path="/cates" exact component={CategoriesPage} />
            <Route path="/my-courses" exact component={MyCoursesPage} />
            <Route path="/oauth" exact component={AccountPage} />
            </div>
          </HashRouter>
        );
      };
      
      const AdminPath = ({match}) => {
        return(
          <HashRouter>
            <Route path="/" exact component={AdminHome} />
            <Route path="/categories" component={AdminCat} />
          </HashRouter>
        );
      };

    return (
        
        <AppContext.Consumer>
            {
                context => {
                    return (
                        context.appLoaded() ? 
                        <div className="App flex">      
                            <BrowserRouter>
                            <Route path="/" exact component={Accueil} />
                            <Route path='/user' component={UserPath} />
                            <Route path='/admin' component={AdminPath} />
                            </BrowserRouter>

                        </div>
                        : 
                        <AppContext.Consumer>
                            {
                                context => {
                                    loadApp(context);
                                    return (splash(context))
                                }
                            }
                        </AppContext.Consumer>
                    )
                }
            }
        </AppContext.Consumer>
    )

} 
export default AppLoader;