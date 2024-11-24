import React, { useEffect, useState } from 'react'
import { Product } from '../components/Product';
import {Spinner} from "../components/Spinner";

export const Home = () => {

    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    async function fetchProductData() {
        setLoading(true);
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setPosts(data);
        }
        catch(error) {
            console.log("Error aagya ji");
            setPosts([]);
        }
        setLoading(false);
    }

    useEffect( () => {
        fetchProductData();
    },[])

  return (
    <div>
        {
            loading ? <Spinner/> :
            posts.length > 0 ?
            (<div>
                {
                    posts.map( (posts) => (
                    <Product key={posts.id} posts={posts}/>
                    ))
                }
            </div>) :
            <div>
                <p>No Data Found</p>
            </div>
        }
    </div>
  );
}
