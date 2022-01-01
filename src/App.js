import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

// Pages
import Home from "./pages/Home/Home";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Sale from "./pages/Sale/Sale";
import Error from "./pages/Error/error";
function App() {
  const [company,setCompany]=useState([])
  useEffect(()=>{
    (async()=>{
        const DATA = await fetch(`http://localhost:4000/buy`,{
            method:"GET",
            headers: {
                "Content-Type": "Application/json",
               },
               
           })
           const allData = await DATA.json()
           setCompany(await allData)
          })()
          
        },[]);
  return (
    <div className="div" >
    <Header/>
      <Switch>
        <Route path="/"  exact>
          <Home  company={company} />
        </Route>
        <Route path='/buy' >
          <Sale company={company}/>

        </Route>
        {/* <Route path='*' >
          <Error/>
        </Route> */}
      </Switch>
    <Footer/>
    </div>
  );
}

export default App;
