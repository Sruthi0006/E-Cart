import { faBackward, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removecartItems } from '../redux/slices/cartSlice'

function Cart() {
  const [total,setTotal] = useState(0)
  const cartArray = useSelector((state)=>state.cartList)
  console.log(cartArray);

 const dispatch = useDispatch()

 const navigate = useNavigate()

 const getTotal = () =>{
  if(cartArray.length>0){
    setTotal(cartArray?.map((item)=>item.price)?.reduce((n1,n2)=>n1+n2))
  }
 }

 const handleCheckout = () => {
  alert('You have successfully ordered')
  dispatch(emptyCart())
  navigate('/')
 }

  useEffect(()=>{
    getTotal()
  },[cartArray])


  return (
    <>
    <div className='pt-32'>
    <h1 className='text-center text-violet-600 text-4xl'>Cart</h1>
   { cartArray?.length>0 ?
    <div className='md:grid grid-cols-[2fr_1fr] m-10'>

      <div className='p-3'>
        <table className='rounded w-full border border-gray-200 text-center shadow-lg'>
          <thead className='bg-gray-500 text-white'>
            <tr>
              <th className='border border-gray-200 p-3 '>#</th>
              <th className='border border-gray-200 p-3 '>Title</th>
              <th className='border border-gray-200 p-3 '>Image</th>
              <th className='border border-gray-200 p-3 '>Price</th>
              <th className='border border-gray-200 p-3 '>Action</th>
            </tr>
          </thead>
          <tbody>
           {cartArray?.map((items,index)=>(
              <tr>
              <td className='p-3 border border-gray-200'>{index+1}</td>
              <td className='p-3 border border-gray-200'>{items?.title}</td>
              <td className='flex justify-center'>
                <img className='mt-2' src={items?.image} alt="" style={{width:'70px' , height:'70px'}} />
                </td>
              <td className='p-3 border border-gray-200'>$ {items?.price}</td>
              <td className='p-3 border border-gray-200'>
                <button className='bg-red-700 text-white py-3 px-5 rounded hover:bg-white hover:border hover:text-red-600 ' onClick={()=>dispatch(removecartItems(items?.id))}><FontAwesomeIcon icon={faTrash} /></button></td>
            </tr>
           )) }
          </tbody>
        </table>
      </div>
      
      <div className='pt-5 px-10'>
        <div className='shadow p-4'>
          <h1 className='text-center text-3xl p-5'>Cart Summary</h1>
          <p className='text-xl mt-4'>Total No.of Products : {cartArray?.length}</p>
          <p className='text-xl mt-2'>Grand Total : $ {total}  </p>
          <button className='w-full bg-green-600 p-3 mt-5 rounded hover:bg-white hover:border hover:border-green-600 hover:text-green-600' onClick={handleCheckout}>Check out</button>
        </div>
      </div>


    </div>
    
   :

    <div className="w-full pt-10 md:grid grid-cols-3">
    <div></div>
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzibBVD9w_go7Ofo5BK44_ufJf_y7qQAoPKg&s" alt="no-image" className='w-full h-auto mb-10'/>
      <div className='text-center mb-10'>
     <Link to={'/'}><button className='bg-green-600 p-3 mt-5 rounded hover:bg-white hover:border hover:border-green-600 hover:text-green-600 '><FontAwesomeIcon icon={faBackward} className='me-2' />Back Home </button></Link></div>
    </div>
    <div></div>
   </div>
   }
   </div>
    </>
  )
}

export default Cart