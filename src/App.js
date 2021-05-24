import React, { useState, useEffect} from "react";
import Navbar from "../src/components/Navbar";
import Header from "../src/components/Header";
import Products from "../src/components/Products";
import About from "../src/components/About";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import {css} from "@emotion/react";
import './index.css';
import PacmanLoader from "react-spinners/PacmanLoader"; 
// https://www.davidhu.io/react-spinners/ // for more loading effects



function App() {
   
  const [loading,setLoading] = useState(false);
  const override = css`
  display:flex;
  justify-content:center;
  border-color:red;
  margin-top:20%;
  `;

  useEffect (() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 5000);
  },[])

  return (
    <div className="App">
      { loading ? <PacmanLoader color={"#367c1b"} loading={loading} css={override} size={60}/>
    :
    <>
    <Navbar/> 
    <Header/> 
    <Products/> 
    <About/>
    <Contact/>
    <Footer/>
    </>
    }
    </div>
  );
}

export default App;
