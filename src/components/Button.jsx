import {AiFillMinusSquare, AiFillPlusSquare} from "react-icons/ai"
import {BsTrash} from "react-icons/bs"
import { useState } from 'react'
import axios from "axios"


const Button = ({item, getData}) => {

    const {id, price, dampingRate, amount} = item
    const [quantity, setQuantity] = useState(amount)
    
    const plusAmount = (id) => {
        setQuantity(quantity + 1)
        console.log(id);
        editAmount(id, quantity+1)
    }
    
    const minusAmount = (id) => {
        amount > 1 && setQuantity(quantity - 1)
        editAmount(id, quantity-1)
    }
    
    const BASE_URL = "https://63f87f376978b1f9105aade9.mockapi.io/api/checkout"

    const deleteProduct = async (id) => {
        try {
            await axios.delete (`${BASE_URL}/${id}`)
        } catch (error) {
            console.log(error)
        }
        getData()
    }

    const editAmount = async (id, quantity) => {
        try {
            await axios.put (`${BASE_URL}/${id}`, {amount: quantity})
        } catch (error) {
            console.log(error);
        }
        getData()
    }
    
  return (
    <div className='text-center'>
        <p className='d-flex flex-row border border-dark rounded p-1 align-items-center justify-content-center gap-3'>
            <AiFillMinusSquare className="fs-4" role="button" id={id} onClick={()=>minusAmount(id)}/>
            <span className="fs-4">{quantity}</span>
            <AiFillPlusSquare className="fs-4" role="button" id={id} onClick={()=>plusAmount(id)}/>
        </p>
        <button className='btn btn-danger mb-2' key={id} onClick={()=> deleteProduct(id)} >
            <BsTrash />
            Remove
        </button>
        <p><b>Product Total:</b> {(amount*dampingRate*price).toFixed(2)} $</p>
    </div>
  )
}

export default Button

