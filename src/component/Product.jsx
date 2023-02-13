import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../reducers/productSlice';
import { Card, Row } from 'antd';
import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';


const Product = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      
      <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                    <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                    <hr />
                </div>
            </div> </div>
      <Row gutter={16} justify="center" align="middle">
        {products.map((product, key) =>

          <Card key={key} justify="center" align="middle" style={{ width: 400, height: 380, margin: '10px',  borderColor: "black" }}>
            
            <Link to={`/products/${product.id}`}>
              <img src={product.image} className="img-fluid" justify="center" align="middle" width={150} height={150} alt={product.name} />
            </Link>
<br></br>
            <p>{product.title}</p>
            <p>${product.price}</p>
            
       




          </Card>
        )}
      </Row>

    </>
  );
};

export default Product;