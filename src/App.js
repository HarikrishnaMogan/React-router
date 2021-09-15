import React from "react";
import Home from "./Home";
import About from "./About";
import Posts from "./posts";
import {BrowserRouter,Route,Switch,Redirect,Link,NavLink} from "react-router-dom";
import Not from "./Notfound";
import "./App.css";
import Postsub from "./postSub";


function App()
{
    return(
        <>
       
        <BrowserRouter>
        <div>
            <NavLink exact activeClassName="home" to="/">Home</NavLink>
            <NavLink activeStyle={{color:"green"}} to="/about">About</NavLink>
            <NavLink activeStyle={{color:"green"}} to="/post">Posts</NavLink>
        </div>
        <Switch>
         <Route exact path="/" component={Home} />
         <Route path="/about" component={About} />
         <Route path="/post/:id" component={Postsub}/>
         <Route path="/post" component={Posts}/>
         <Route path="/home">
             <Redirect to ="/" />
         </Route>
         {
        // <Route path="*" component={Not} />
}
         </Switch>
        </BrowserRouter>
        </>
    );
}
export default App;

