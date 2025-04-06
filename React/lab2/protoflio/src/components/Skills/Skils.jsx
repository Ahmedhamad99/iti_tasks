
import { Container,ProgressBar } from "react-bootstrap";



const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 100 },
    { name: "Pyhton", level:100 },
    { name: "Java", level: 90 },
  ];
const products=[
    {title:"UI/UX"},
    {title:"Full-stack"},
    {title:"Front-end"},
    {title:"Responsev web page"},
    {title:"Angluar"},
]
const Skills = ()=>{

    return(
        <>
        <Container id='skills' className="mt-7">
          <h2 className="text-center mb-2 mt-3">Skills</h2>
          <p className="text-center mt-3 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur adipisci reprehenderit, asperiores hic labore assumenda et quos dignissimos quasi! Sapiente similique, sed hic dignissimos illum qui cumque commodi rem vel doloribus, doloremque voluptate provident earum voluptatibus maxime. Totam laborum maxime eos. Aliquam officia adipisci sint ad repudiandae sed porro, totam tenetur doloremque, vitae reprehenderit iste culpa! Consectetur velit iure dolores similique nostrum porro totam maiores quod quasi commodi, laboriosam accusamus!
          </p>
         <div className="row text-center">
            <div className="col-4 mt-5">
                <h1>My Ptoduct</h1>
                <hr />
             {
                products.map((product,index)=>(
                    <div className="mt-3" key={index}>
                     <h4>{product.title}</h4>
                    </div>
                ))
             }
            </div>
            <div className="col-8">
            {
            skills.map((skill,index)=>(
                <div key={index} className="My-2">

                 <div className="row m-5">
                 <strong className="col-3">{skill.name}</strong>
                 <ProgressBar className="col-5" now={skill.level} label={`${skill.level}`}/>
                 </div>
                </div>
            ))
          }
            </div>
         </div>
        </Container>
        </>
    )
}


export default Skills