import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import BlogData from "./BlogData";

const Blogs= () =>{
     const {posts,loading} = useContext(AppContext)
     console.log(posts)    
     return (
        <div className="flex flex-col justify-center items-center w-11/12 max-w-[670px] gap-y-4 mt-[10px] mb-[70px]">
            {
                loading 
                ?
                (<Spinner/>) : 

                (
                    posts.length === 0 ? 
                    (<div>
                        <p>No Post Found</p>
                    </div>) :

                    (posts.map((post) => (   
                        <BlogData key={post.id} post={post}/>
                    ))) 
                )
            }
        </div>
     );
}

export default Blogs;