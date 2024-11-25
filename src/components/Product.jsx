import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { add,remove } from '../redux/slices/CartSlice';

export const Product = ({posts}) => {

  const {cart = []} = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(posts));
    toast.success("Item added to Cart");
  }

  const removeFromCart = () => {
    dispatch(remove(posts.id));
    toast.error("Item removed from Cart");
  }

  return (
    <div>

      <div>
        <p>{posts.title}</p>
      </div>

      <div>
        <p>{posts.description}</p>
      </div>

      <div>
        <img src={posts.image} alt=''/>
      </div>

      <div>
        <p>{posts.price}</p>
      </div>

      {
        cart.some((p) => p.id === posts.id) ?
        (<button onClick={removeFromCart}>
          Remove Item
        </button>) :
        (<button onClick={addToCart}>
          Add to Cart
        </button>)
      }
      
    </div>
  )
}