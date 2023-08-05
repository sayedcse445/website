import Header from "./components/header/Header";
import TopBar from "./components/topbar/TopBar";
import Home from "./components/page/home/Home";
import Single from "./components/page/home/single/Single"
import Write from "./components/page/home/write/Write"
import Setting from "./components/page/home/setting/Settings"
import Login from "./components/page/login/Login"
import Register from "./components/page/register/login/Register";


import {
  BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

function App() {
  return (
    <Router>
      <TopBar/>
      <Switch>
      <Route exact path="/register">
      <Register/>
      </Route>
      </Switch>
     
    </Router>
  );
}

export default App;




     {/* <Single /> */}
     {/* <Write /> */}
    
     {/* <Setting /> */}
     {/* <Login /> */}