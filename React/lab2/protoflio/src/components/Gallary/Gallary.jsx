import { Container } from "react-bootstrap";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const product = [
    { name: "Cofee Shop", url: "/images.jpg" },
    { name: "Web site it", url: "/images.jpg" },
    { name: "Wroker", url: "/images.jpg" },
    { name: "Bulder", url: "/images.jpg" },
    { name: "Oragan", url: "/images.jpg" },
    { name: "Rasheed", url: "/images.jpg" },
];


const Gallry = ()=>{
 
          return(
            <>
            <Container id='skills' className="mt-7">
             
             <h1 className="text-center">My Portfolio</h1>
             <div className="row">
            { product.map((prod,index)=>(
                
                <div className="col-4 mt-5" key={index}>
                <Card >
                   <Card.Img variant="top" src={prod.url} />
                   <Card.Body>
                       <Card.Title>{prod.name}</Card.Title>
                       <Card.Text>
                       Some quick example text to build on the card title and make up the
                       bulk of the card's content.
                       </Card.Text>
                       <Button variant="primary">Go somewhere</Button>
                   </Card.Body>
                   </Card>
                </div>
                
            ))}
            </div>
                
                
            </Container>
            </>
          )

}


export default Gallry