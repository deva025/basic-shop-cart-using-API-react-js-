import React, { useState,useEffect } from "react";
import logo from "./logo.svg";

import Aos from "aos";
import 'aos/dist/aos.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Cart from "./Components/cart";
import { toast ,ToastContainer} from "react-toastify";
import BuyPage from "./Components/BuyPage";
import { Container,Row,Col } from "reactstrap";

function App() {
  const [cartItem, setCartItem] = useState([]);

  const addInCart = item => {
    const isAlreadyAdded = cartItem.findIndex(function(array) {
      return array.id === item.id;
    });


    

    if (isAlreadyAdded !== -1) {
      toast("already added in cart", {
        type: "error"
      });
    }
    else{

    setCartItem([...cartItem, item]);
    }
  };

  useEffect(()=>{
    Aos.init();
  },[])

  const buyNow = () => {
    setCartItem([]);

    toast("Purchase Complete", {
      type: "success"
    });
  };

  

  const removeItem = item => {
    setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id));
  };

  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md='8' ><BuyPage addInCart={addInCart}/></Col>
       
        <Col md='4'><Cart cartItem={cartItem} buyNow={buyNow} removeItem={removeItem}/></Col>
        
      </Row>
    </Container>
  );
}

export default App;
