import React from 'react'
import { faCartShopping, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItems } from '../redux/slices/wishlistSlice'
import { addcartItems } from '../redux/slices/cartSlice'

function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlist)
  console.log(wishlistArray);

  const dispatch = useDispatch()

  const wishes = (item)=>{
    dispatch(addcartItems(item))
    dispatch(removeWishlistItems(item.id))
  }

  return (
    <>
   <div className='pt-32'>
      <h1 className='text-center text-violet-600 text-4xl'>Wishlist</h1>
       {wishlistArray?.length>0? <div className="mb-10 px-10 p-2 md:grid grid-cols-4">
       {wishlistArray?.map((item)=>(
        <div className='p-2'>
        <div className='p-3 shadow-lg rounded'>
         <div className='flex justify-center'> <img src={item?.image} alt="" className='h-40 w-44' /></div>
          <h4 className='text-center text-3xl pt-4'>{item?.title.slice(0,20)}</h4>
          <p className='pt-5 text-justify'>{item?.description.slice(0,90)}</p>
          <p className='text-2xl p-3'>Price <span className='text-violet-600'> $ {item?.price}</span></p>
          <div className='flex justify-between'>
            <button className='px-3 py-2 rounded text-white bg-red-600 hover:border hover:bg-white hover:text-red-600' onClick={()=>dispatch(removeWishlistItems(item?.id))}><FontAwesomeIcon icon={faTrash} /></button>
            <button className='px-3 py-2 rounded text-white bg-green-600 hover:text-green-600 hover:bg-white hover:border' onClick={()=>wishes(item)} ><FontAwesomeIcon icon={faCartShopping} /></button>
          </div>         
          </div>
      </div>
       )) }
          </div>
   
:
   <div className="w-full pt-10 md:grid grid-cols-3">
    <div></div>
    <div>
      <img src="https://i.pinimg.com/originals/f6/e4/64/f6e464230662e7fa4c6a4afb92631aed.png" alt="no-image" className='w-full h-auto'/>
    </div>
    <div></div>
   </div>}

   </div>
    </>
  )
}

export default Wishlist