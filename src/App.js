import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/UI/NavBar';
import Products from './Components/Products/Products';
import Footer from './Components/UI/Footer';
import ProductDetails from './Components/Products/ProductDetails';
import Cart from './Components/Cart/Cart';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let componentMounted = true;
    const getProductData = async () => {
      setLoading(true);
      const response = await fetch('https://fakestoreapi.com/products');
      if (componentMounted) {
        const data = await response.json();
        setData(data);
        setLoading(false);
      }
    };
    getProductData();
    return () => {
      componentMounted = false;
    };
  }, []);

  return (

    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Products items={data} />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<h1 style={{marginTop: '7rem'}} >404 Not Found</h1>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
