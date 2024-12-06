import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import userFetch from '../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addWishlistItems } from '../redux/slices/wishlistSlice'
import { addcartItems } from '../redux/slices/cartSlice'

function Home() {
  const data = userFetch('https://fakestoreapi.com/products')
  // console.log(data);
  const dispatch = useDispatch()
  
  return (
    <>
        <div className="pt-32 mb-10 px-10 p-2 md:grid grid-cols-4">
       {data?.length>0 && data?.map((item)=>(
        <div className='p-2'>
        <div className='p-3 shadow-lg rounded '>
          <div className='flex justify-center'><img src={item?.image} alt="" className='h-40 w-40' /></div>
          <h4 className='text-center text-xl pt-4'>{item?.title.slice(0,20)}</h4>
          <p className='pt-5 text-justify'>{item?.description.slice(0,90)}</p>
          <p className='text-lg p-3'>Price <span className='text-violet-600'> $ {item?.price} </span></p>
          <div className='flex justify-between'>
            <button className='px-3 py-2 rounded text-white bg-red-600 hover:border hover:bg-white hover:text-red-600 hover:border-red-600' onClick={()=>dispatch(addWishlistItems(item))}><FontAwesomeIcon icon={faHeart} /></button>
            <button className='px-3 py-2 rounded text-white bg-green-600 hover:border hover:bg-white hover:text-green-600 hover:border-green-600' onClick={()=>dispatch(addcartItems(item))}><FontAwesomeIcon icon={faCartShopping} /></button>
          </div>         
          </div>
      </div>

       )) }
       
        </div>
    </>
  )
}

export default Home
