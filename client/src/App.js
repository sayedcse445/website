import Header from "./components/header/Header";
import TopBar from "./components/topbar/TopBar";
import Home from "./components/page/home/Home";
import Single from "./components/page/home/single/Single"
import Write from "./components/page/home/write/Write"
import Setting from "./components/page/home/setting/Settings"
import Login from "./components/page/login/Login"
import Register from "./components/page/register/login/Register";
import Post from "./components/posts/posts"
import Postt from "./components/postt/Postt"


import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

function App() {
  const user=false
  return (
    <Router>
      <TopBar />
      <Routes>
          			<Route path="/" element={<Home />} />
          			<Route path="/register" element={ user ? <Home/> : <Register />} />
                <Route path="/login" element={ user ? <Home/> : <Login />} />
                <Route path="/setting" element={user ? <Home/> : <Setting/>}/>
                <Route path="/write" element={user ? <Write/> : <Register/>}/>
                <Route path="/single" element={<Single/>}/>
                <Route path="/header" element={<Header/>}/>
                <Route path="/post/:postId" element={<Post/>}/>
                <Route path="/postt" element={<Postt/>}/>
        		</Routes>

    </Router>
  );
}

export default App;




{/* <Single /> */ }
{/* <Write /> */ }

{/* <Setting /> */ }
{/* <Login /> */ }