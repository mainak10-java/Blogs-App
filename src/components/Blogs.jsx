import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Blogs= () =>{
     const {posts,loading} = useContext(AppContext)
     console.log(posts)    
     return (
        <div className="flex flex-col justify-center items-center w-11/12 max-w-[670px] gap-y-4 mt-[80px] mb-[70px]">
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
                      
                        <div key={post.id} className="flex flex-col">
                            <p className="font-bold mb-1 text-lg">{post.title}</p>
                            <p className="mb-1 text-sm">
                                By <span className="italic">{post.author}</span>
                            </p>
                            <p className="mb-[14px] text-sm">
                                Posted on {post.date}
                            </p>
                            <p className="text-md">
                                {post.content}
                            </p>
                            <div className="flex gap-x-3 mt-[14px]">
                                {
                                    post.tags.map((tag, index) =>(
                                        <span key={index} className="underline text-blue-700 text-xs font-bold">{`#${tag}`}</span>
                                    ))
                                }
                            </div>
                        </div>
                    ))) 
                )
            }
        </div>
     );
}

export default Blogs;