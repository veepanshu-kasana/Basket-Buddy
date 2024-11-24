import React from 'react'
import {FaShoppingCart} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='bg-blue-500'>
        <div className='flex flex-row justify-between'>
            <NavLink to="/">
                <div>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZK9xTikP53xzxBMHEnoTqN40KxVntgW0Gg&s' height={20} width={100}/>
                </div>
            </NavLink>

            <div>
                <NavLink to="/">
                    <p>Home</p>
                </NavLink>

                <NavLink to="/cart">
                    <div>
                        <FaShoppingCart/>
                    </div>
                </NavLink>
            </div>

        </div>
    </div>
  )
}