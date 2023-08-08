import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button
} from "reactstrap";

const CartItem = ({ product, addInCart }) => {
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <Card className="mt-2 mb-1" data-Aos='zoom-in' data-aos-duration='1000'>
      <CardImg top height="250" width="100%" src={product.smallImage} />
      <CardBody className="text-center">
        <CardTitle>{product.prodna}</CardTitle>
        <CardText className="secondary">
          price: RS {product.productPrice}
          
        </CardText>
        <Button color="success" onClick={() => addInCart(product)}>
          Buy Now
        </Button>
      </CardBody>
    </Card>
  );
};

export default CartItem;
