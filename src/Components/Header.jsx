import { faBars, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {

 
  const wishlistArray = useSelector((state)=>state.wishlist)
  const cartItemsCount = useSelector((state)=>state.cartList)

  const [show,setShow] = useState(false)
  return (
    <nav className='bg-indigo-950 text-white p-5 w-full fixed'>

    <div className="md:flex items-center md:px-10 px-5">

     <div className='flex w-full'> 
        <Link to={'/'}>
        <h2 className='text-3xl'> 
          <FontAwesomeIcon icon={faCartShopping} className='me-3'/> 
          E-cart
          </h2>
          </Link>
          <button onClick={()=>setShow(!show)} className='border border-white p-3 text-white rounded ms-auto md:hidden'><FontAwesomeIcon icon={faBars} /></button>
     </div>

{/* showing wishlist and cart while clicking on bars */}

     {show &&  <ul className='mt-6 md:hidden flex'>

<li>
 <Link to={'/Wishlist'}>
    <button className='border border-white p-3 rounded  hover:bg-white hover:text-indigo-950 flex'>
       <FontAwesomeIcon icon={faHeart} style={{color: "#741302",}} className='me-3' />Wishlist
       <span className='border bg-white rounded px-1 ms-2 text-black'>
        {wishlistArray.length}
       </span>
       </button>
 </Link>
</li>

<Link to={'/Cart'}>
  <li>
    <button className='border border-white p-3 rounded ms-3 hover:bg-white hover:text-indigo-950 flex '>
    <FontAwesomeIcon icon={faCartShopping} style={{color:'#27cc24'}} className='me-3'/>Cart
       <span className='border bg-white rounded px-1 ms-2 text-black'>
        {cartItemsCount.length}
       </span>
       </button>
  </li>
</Link>

</ul> }

     <ul className='ms-auto md:flex hidden'>

        <li>
         <Link to={'/Wishlist'}>
            <button className='border border-white p-3 rounded  hover:bg-white hover:text-indigo-950 flex'>
               <FontAwesomeIcon icon={faHeart} style={{color: "#741302",}} className='me-3' />Wishlist
               <span className='border bg-white rounded px-1 ms-2 text-black'>
               {wishlistArray.length}
               </span>
               </button>
         </Link>
        </li>

       <Link to={'/Cart'}>
          <li>
            <button className='border border-white p-3 rounded ms-3 hover:bg-white hover:text-indigo-950 flex '>
            <FontAwesomeIcon icon={faCartShopping} style={{color:'#27cc24'}} className='me-3'/>Cart
               <span className='border bg-white rounded px-1 ms-2 text-black'>
               {cartItemsCount.length}
               </span>
               </button>
          </li>
       </Link>

      </ul> 

    </div>

    </nav>
  )
}

export default Header