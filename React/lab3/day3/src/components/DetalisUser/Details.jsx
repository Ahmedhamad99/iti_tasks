import { useParams } from "react-router-dom"

const Details = ()=>{
    const {id} = useParams()
  console.log(id)
  return<>
    <h1>Deatlsi.... {id}</h1>

  
  </>
}

export default Details