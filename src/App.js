import "./App.css"
import LoginPage from "./components/login";
import Dashboard from "./pages/Dashboard";
import {Route, Routes } from "react-router-dom";
import Home from "./pages/Home";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} >
            <Route path="/" element={<Home/>}/> 
            <Route path="Students" element={<div>students</div>}/> 
            <Route path="Staf" element={<div>Staf</div>}/> 
            <Route path="Result" element={<div>result</div>}/> 
            <Route path="Atendance" element={<div>Atendance</div>}/> 
            <Route path="Setting" element={<div>Setting</div>}/> 
        </Route>
        <Route path="/login" element = {<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
