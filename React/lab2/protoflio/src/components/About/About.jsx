
import React from "react";
import './about.css'
import { Container } from "react-bootstrap";

const About = ()=>{

    return(

    <>
    <Container id="about" className="my-5 about">
        <div className="row m-5">
        <h1 className="col-3">About Me</h1>
        <div className="col-6">
        <p>I am a web devloper skillde in react, java, c++,python, javascript and more</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, vitae ipsum illum sapiente nam placeat. Obcaecati, ex nostrum impedit quos aliquid a autem recusandae, voluptas maxime animi dignissimos incidunt sit?</p>
        </div>
        </div>
        <a className="btn btn-dark ml-5 bt-d" variant="secondary" href="open.pdf" download="My_Resume.pdf">
                Download
            </a>        
    </Container>
    </>

    )
}


export default About;