import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Typography } from 'antd';
import {
  removeFromCart, clearCart, increaseCart, decreaseCart,
  getTotals,
} from '../reducers/productSlice';
import { useEffect } from 'react';
import '../component/Cart.css';
const Addtocart = () => {

  const { product } = useSelector(state => state.products);
  const dispatch = useDispatch();

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleIncreaseCart = (product) => {
    dispatch(increaseCart(product));
  };

  useEffect(() => {
    dispatch(getTotals());
  }, [product, dispatch]);


  return (

    <>
      <br></br> <br></br> <br></br> <br></br>
<Card>
  <Typography.Title level={1} style={{ color: 'black' }} justify="center" align="middle">Add to Cart</Typography.Title>
      <Button className="btn btn-outline-dark " style={{ borderColor: "black" }} onClick={() => dispatch(clearCart())}>
        Clear Cart
      </Button>
</Card>
 
      <Card justify="center" align="middle">


        <br></br> <br></br>
        <table className="cart-table ">
          <thead>
            <tr>
              <th>Product</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {product.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{<img alt={product.time} src={product.image} width={300} height={250} />}</td>
                <td>${product.price}</td>
                <td><Button style={{ borderColor: "gray" }} col-md-3 onClick={() => handleDecreaseCart(product)}>
                  -
                </Button>
                  &nbsp; {product.cartQuantity} &nbsp;
                  <Button style={{ borderColor: "black" }} onClick={() => handleIncreaseCart(product)}>+</Button></td>

                <td> ${product.price * product.cartQuantity}</td>
                <td>    <Button className="btn btn-outline-dark " style={{ borderColor: "black" }}
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  Remove
                </Button></td>

              </tr>
            ))}
          </tbody>
        </table>

      </Card>
    </>


  );
}

export default Addtocart;


