import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { Link } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handelClick = (id)=>{
        navigate(`/Productdetalis/${id}`)
    }

    return (
        <div className="card col-lg-3 col-md-4 col-sm-6 col-12 m-3  m-3 shadow-sm" style={{ minWidth: "200px" }}>
            <img className="card-img-top" src={product.images[0]} alt={product.title} style={{ height: "200px", objectFit: "cover" }} />
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Price: ${product.price}</p>

                <div className="d-flex justify-content-between">
                    <button 
                        className="btn btn-outline-success btn-sm" 
                        onClick={() => dispatch(addToCart(product))}
                    >
                        Add to Cart
                    </button>

                   
                    <button className="btn btn-outline-primary btn-sm" onClick={() => handelClick(product.id)}>
                        Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
