import { useNavigate } from "react-router-dom";
const ProductCard = ({product,key})=>{
    const navigate = useNavigate()
    const handelClick = (id)=>{
        navigate(`/Productdetalis/${id}`)
    }

   return <>
   
   <div className="card col-4 m-3 shadow-sm" style={{ width:"30%" }}>
            <img 
                className="card-img-top" 
                src={product.images[0]} 
                alt={product.title} 
                style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-muted">Brand: {product.brand}</p>
                <p className="card-text">Category: {product.category}</p>
                <p className="card-text fw-bold">Price: ${product.price}</p>
                <p className="card-text text-success">Discount: {product.discountPercentage}%</p>

                
                {product.stock > 0 ? 
                    <span className="badge bg-success mb-2">In Stock</span> : 
                    <span className="badge bg-danger mb-2">Out of Stock</span>
                }

                
                <div className="d-flex justify-content-between">
                    <button className="btn btn-outline-primary btn-sm" onClick={() => handelClick(product.id)}>
                        Details
                    </button>
                    <button className="btn btn-outline-secondary btn-sm">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
   </>

}


export default ProductCard