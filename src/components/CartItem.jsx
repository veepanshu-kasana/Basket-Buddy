import React from 'react'
import {AiFillDelete} from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

export const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed From Cart");
  }

  return (
    <div className='flex items-center md:p-5 p-2 justify-between mt-2 mb-2 md:mx-5 border-b-[2px] border-slate-500'>

      <div className='flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center'>

        <div className='w-[30%]'>
          <img src={item.image} className='object-cover'/>
        </div>
  
        <div className='w-[100%] md:w-[70%] self-start space-y-5 md:ml-10'>

          <h1 className='text-xl text-slate-700 font-semibold'>{item.title}</h1>
          <h1 className='text-base text-slate-700 font-medium'>{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>

          <div className='flex items-center justify-between'>

            <p className='text-green-600 font-bold text-lg'>${item.price}</p>

            <button className='text-red-800 bg-red-200 group-hover:bg-red-400 transition-transform 
              duration-300 cursor-pointer rounded-full p-3 mr-3'
              onClick={removeFromCart}>
              <AiFillDelete/>
            </button>

          </div>

        </div>
  
      </div>

    </div>
  )
}