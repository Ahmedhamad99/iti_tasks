
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import "./cont.css"
const Content = ()=>{
    return(
        <>
        <div className="imageback">
            <div>
                <h1>Welcome to My Portfolio</h1>
                <p>I'm a passionate web developer.</p>
                <Button variant="primary" href="#bio">Learn More</Button>
            </div>
        </div>
        </>
    )
}


export default Content;