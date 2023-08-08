import React, { useState, useEffect } from "react";
import Axios from "axios";
import CartItem from "./CartItem";
import Aos from "aos";
import 'aos/dist/aos.css'

import { faker } from "@faker-js/faker";
import { Container, Col, Row } from "reactstrap";

const apiKey = "INSET_YOUR_KEY_HERE";

const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";
const lo="https://jsonware.com/api/v1/json/3763a719-3198-4453-827a-c64f26035560"

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);

  

  const fetchPhotos =async() => {
    const {data} = await Axios.get(lo);

    const { photos } = data;

    const allProduct = photos.map(photo => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      prodna:faker.person.fullName(),
      productPrice: faker.commerce.price(),
      id:photo.id
    }));

    setProduct(allProduct);
  };

  
  useEffect(()=>{
    Aos.init();
  },[])

  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container fluid >
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {product.map(product => (
          <Col md={4} key={product.id}>
            <CartItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
