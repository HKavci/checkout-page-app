import { useState, useEffect } from "react";
import AddProduct from "../components/AddProduct";
import CardTotal from "../components/CardTotal";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import axios from "axios"

const Main = () => {

  const [show, setShow] = useState(false);
  const [productlist, setProductlist] = useState([]);
  
  const handleShow = () => setShow(!show);

  const getData = async () => {
    const BASE_URL = "https://63f87f376978b1f9105aade9.mockapi.io/api/checkout"
    try {
      const {data} = await axios(BASE_URL)
      setProductlist(data)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <div>
      <Header />
      <div className="text-center">
        <button className="btn btn-primary mb-3" onClick={handleShow}>
          {show ? "Hide Product Bar" : "Show Product Bar"}
        </button>
      </div>
      <div className="d-md-flex justify-content-center">
        {show && <AddProduct getData={getData} />}
        <div>
          {productlist.map((item) => (
            <ProductCard item={item} key={item.id} getData={getData} />
          ))}
          <CardTotal productlist={productlist} />
        </div>
      </div>
    </div>
  );
};

export default Main;
