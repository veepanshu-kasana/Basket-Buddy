import React from 'react'

export const Product = ({posts}) => {
  return (
    <div>
      <div>
        <p>{posts.title}</p>
      </div>
      <div>
        <p>{posts.description}</p>
      </div>
      <div>
        <img src={posts.image}/>
      </div>
      <div>
        <p>{posts.price}</p>
      </div>
      <button>
        {
          false ? <p>Remove Item</p> : <p>Add to Cart</p>
        }
      </button>
    </div>
  )
}