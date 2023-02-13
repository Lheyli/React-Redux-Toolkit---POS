import React, {useState} from 'react'
import { useParams } from "react-router-dom";
import { addToCart, decreaseCart,increaseCart} from '../reducers/productSlice';
import axios from 'axios'
import { Card, Button, Rate} from 'antd';

import { useDispatch } from 'react-redux';

function ViewProduct() {
  let { id } = useParams();
  const dispatch = useDispatch()
  const [product, setProduct] = React.useState({});
  const [quantity, setQuantity] = React.useState(1);

  React.useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        setProduct(res.data);
      });
  }, [id]);


  const handleDecreaseCart = (product) => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      dispatch(decreaseCart(product));
    }
  };
  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
   
  };
  const handleIncreaseCart = (product) => {
    setQuantity(quantity + 1);
    dispatch(increaseCart(product));
   
  };

  

  const [rating, setRating] = useState(0);


  return (
    <>
      <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>  <br></br>
      <Card >
       <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card className="col-md-6"  justify="center" align="middle">
      <br></br><br></br><br></br><br></br><br></br><br></br>
        <img alt={product.title} src={product.image} 
         height="400px" weight="400px"  />
        </Card>
        <Card >
        <br></br>
        <br></br> <br></br>
                <h4 className='text-uppercase text-black-50'>
                    {product.category}
                </h4>
                <h1 className='display-5'>{product.title}</h1>
                
                <h3 className='display-6 fw-bold my-4'>
                    $ {product.price}
                </h3>
                <p className='lead'>{product.description}</p>
                <p className='lead fw-bolder'>
                    Rating {product.rating && product.rating.rate}
                    <i className='fa fa-star'></i>
                </p>
             
        <Rate value={rating} onChange={setRating} />
      <p>Your rating: {rating}</p>
        <br></br> <br></br>
        <Button  className="btn btn-outline-dark " style={{  borderColor: "gray" }} col-md-3 onClick={() => handleDecreaseCart(product)}>
                  -
                </Button>
              &nbsp;  {quantity}  &nbsp;
                  <Button   className="btn btn-outline-dark "style={{  borderColor: "black" }} onClick={() => handleIncreaseCart(product)}>+</Button>
                  &nbsp; <Button className="btn btn-outline-dark " style={{  borderColor: "black" }}  onClick={() => handleAddToCart(product)}>
                Add to Cart</Button>
      </Card>
    </div>
    </Card >
   

   

    </>
  );
}

export default ViewProduct;