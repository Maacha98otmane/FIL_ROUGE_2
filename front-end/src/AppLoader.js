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
import Sidebar from "./screens/User/sidebar";
import HomePage from "./screens/User/home";
import Rightbar from "./screens/User/rightbar";
import CoursePage from "./screens/User/course";
import DiscoverPage from "./screens/User/discover";
import CategoriesPage from "./screens/User/categories";
import MyCoursesPage from "./screens/User/mycourses";
// import AdminHome from './screens/Admin/adminHome';
// import AdminCat from './screens/Admin/adminCat';
import Accueil from './screens/accueil';
import AccountPage from "./screens/User/oauth";

//import screen admin
import AdminSidebar from "./screens/Admin/components/sidebar/Sidebar";
import AdminTopbar from "./screens/Admin/components/topbar/Topbar";
import AdminHome from "./screens/Admin/pages/home/Home";
import AdminCustomersList from "./screens/Admin/pages/customerList/CustomerList";
import AdminCustomer from "./screens/Admin/pages/customer/Customer";
import AdminNewCustomer from "./screens/Admin/pages/newCustomer/NewCustomer";
import AdminFormersList from "./screens/Admin/pages/formerList/FormerList";
import AdminFormer from "./screens/Admin/pages/former/Former";
import AdminNewFormer from "./screens/Admin/pages/newFormer/NewFormer";
import AdminProductList from "./screens/Admin/pages/productList/ProductList";
import AdminProduct from "./screens/Admin/pages/product/Product";
import AdminNewProduct from "./screens/Admin/pages/newProduct/NewProduct";

//import screen former
import FormerSidebar from "./screens/Former/components/sidebar/Sidebar";
import FormerTopbar from "./screens/Former/components/topbar/Topbar";
import FormerHome from "./screens/Former/pages/home/Home";
import FormerUserList from "./screens/Former/pages/userList/UserList";
import FormerUser from "./screens/Former/pages/user/User";
import FormerNewUser from "./screens/Former/pages/newUser/NewUser";
import FormerProductList from "./screens/Former/pages/productList/ProductList";
import FormerProduct from "./screens/Former/pages/product/Product";
import FormerNewProduct from "./screens/Former/pages/newProduct/NewProduct";





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
            <AdminTopbar />
      <div className="container">
        <AdminSidebar />
        <Switch>
          <Route exact path="/">
            <AdminHome />
          </Route>
          <Route path="/customers">
            <AdminCustomersList />
          </Route>
          <Route path="/customer/:userId">
            <AdminCustomer />
          </Route>
          <Route path="/newCustomer">
            <AdminNewCustomer />
          </Route>
          <Route path="/formers">
            <AdminFormersList />
          </Route>
          <Route path="/former/:userId">
            <AdminFormer />
          </Route>
          <Route path="/newFormer">
            <AdminNewFormer />
          </Route>
          <Route path="/products">
            <AdminProductList />
          </Route>
          <Route path="/product/:productId">
            <AdminProduct />
          </Route>
          <Route path="/newproduct">
            <AdminNewProduct />
          </Route>
        </Switch>
      </div>
          </HashRouter>
        );
      };

      const FormerPath = ({match}) => {
        return(
          <HashRouter>
            <FormerTopbar />
      <div className="container">
        <FormerSidebar />
        <Switch>
          <Route exact path="/">
            <FormerHome />
          </Route>
          <Route path="/users">
            <FormerUserList />
          </Route>
          <Route path="/user/:userId">
            <FormerUser />
          </Route>
          <Route path="/newUser">
            <FormerNewUser />
          </Route>
          <Route path="/products">
            <FormerProductList />
          </Route>
          <Route path="/product/:productId">
            <FormerProduct />
          </Route>
          <Route path="/newproduct">
            <FormerNewProduct />
          </Route>
        </Switch>
      </div>
          </HashRouter>
        );
      };

    return (
        
        <AppContext.Consumer>
            {
                context => {
                    return (
                        context.appLoaded() ? 
                        <div className="App">      
                            <BrowserRouter>
                            <Route path="/" exact component={Accueil} />
                            <div className='flex'>
                            <Route path='/user' component={UserPath} />
                            </div>
                            <Route path='/admin' component={AdminPath} />
                            <Route path='/former' component={FormerPath} />
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