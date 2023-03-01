import axios from "axios"
import { useState } from "react"
import {BsCartXFill} from "react-icons/bs"

const AddProduct = ({getData}) => {
  
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [amount, setAmount] = useState()
  const [image, setImage] = useState("")
  const [dampingRate, setDampingRate] = useState(0.8)
  

  const handleSubmit = (e) => {
    e.preventDefault()
    const newProduct = {name, image, price: price.toFixed(2), amount, dampingRate}
    console.log(newProduct)
    setDampingRate(0.8)
    postProduct(newProduct)
    setName("")
    setPrice("")
    setAmount("")
    setImage("")
  }

  const postProduct = async (newProduct) => {
    const BASE_URL = "https://63f87f376978b1f9105aade9.mockapi.io/api/checkout"
    try {
      await axios.post (BASE_URL, newProduct)
    } catch (error) {
      console.log(error);
    }
    getData()
  }


  return (
    <form className="shadow p-3" onSubmit={handleSubmit}>
    <div className="mb-3">
      <label htmlFor="exampleInputName" className="form-label">Product Name</label>
      <input type="text" className="form-control" id="exampleInputName" value={name} onChange={(e)=>setName(e.target.value)} required />
      
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputPrice" className="form-label">Product Price</label>
      <input type="number" className="form-control" id="exampleInputPrice" value={price} onChange={(e)=>setPrice(Number(e.target.value))} required />
    </div>
    <div className="mb-3">
      <label htmlFor="exampleInputQuantity" className="form-label">Product Quantity</label>
      <input type="number" className="form-control" id="exampleInputQuantity" value={amount} onChange={(e)=>setAmount(Number(e.target.value))} required />
    </div>
    <div className="mb-3">
        <label htmlFor="basic-url" className="form-label">Product Image</label>
        <div className="input-group">
          <span className="input-group-text" id="basic-addon3">https://example.com/</span>
          <input type="url" className="form-control" id="basic-url" aria-describedby="basic-addon3" value={image} onChange={(e)=>setImage(e.target.value)} required />
        </div>
      </div>
    <button type="submit" className="btn btn-primary"><BsCartXFill /> Add To Cart</button>
  </form>
  )
}

export default AddProduct