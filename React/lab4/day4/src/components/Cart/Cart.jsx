
import { useDispatch, useSelector } from "react-redux";
import {  removeFromCart, increaseQty, decreaseQty } from '../../redux/cartSlice';
const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (cart.length === 0) return <h3 className="text-center mt-5">Empty Cart</h3>

    return (
        <div className="container mt-4">
            <h3>Cart</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Remove</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => (
                        <tr key={item.id}>
                            <td><img src={item.images[0]} alt=""style={{width:"100px",height:"100px"}} /></td>
                            <td>{item.title}</td>
                            <td>
                                <button className="btn btn-sm btn-success mx-1" onClick={() => dispatch(increaseQty(item.id))}>+</button>
                                |
                                {item.quantity}
                                |
                                <button className="btn btn-sm btn-danger mx-1" onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                            </td>
                            <td>
                                <button className="btn btn-sm btn-outline-danger" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                            </td>
                            <td>${item.price * item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h4>Total: ${total}</h4>
        </div>
    );
};

export default Cart;
