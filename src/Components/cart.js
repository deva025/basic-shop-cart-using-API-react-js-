import React from "react";
import { Container,ListGroup,ListGroupItem,Button,CardBody,Card,CardHeader,CardFooter,Col,Row } from "reactstrap";


const Cart=({cartItem,buyNow,removeItem})=>{
let amount =0;
cartItem.forEach((itr)=>{
amount=parseFloat(amount)+parseFloat(itr.productPrice)
})

return (
    <Container fluid>
        <h1 className="text-success">your cart </h1>
        <ListGroup>
            {cartItem.map((it)=>(
                <ListGroupItem key={it.id}>
                    <Row>
                        <Col>
                            <img height={80} src={it.tinyImage}/>
                        </Col>
                        <Col className="text-center">
                            <div className="text-primary">{it.prodna}</div>
                            <span>price :- {it.productPrice}</span>
  
                            <Button Color="danger" onClick={()=>removeItem(it)}>remove</Button>
                        </Col>
                    </Row>
                </ListGroupItem>



            ))}
        </ListGroup>
        {
            cartItem.length >= 1 ? (
                <Card className="text-center mt-3"><CardHeader>
                    grand total</CardHeader><CardBody>your total is {amount}</CardBody><CardFooter><Button Color="success" onClick={buyNow}>pay here</Button></CardFooter></Card>
            ):(
                <h1 className="text-warning"> cart is empty</h1>
            )
        }
    </Container>
)
}

export default Cart;

