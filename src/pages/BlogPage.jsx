import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useLocation, useNavigate } from "react-router-dom";
import BlogData from "../components/BlogData";
import Spinner from "../components/Spinner";
import Header from "../components/Header";

const BlogPage = () =>{
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);

    const {loading, setLoading} = useContext(AppContext);
    const location = useLocation();
    const blogId= location.pathname.split('/').at(-1);
    const navigate = useNavigate();

    async function fetchBlogs(){
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`
        console.log(url)
        try{
            const res = await fetch(url);
            const data = await res.json();
            
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(e){
            console.log("Error aagya in blog id wali call");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

        useEffect( () => {
            if(blogId) {
                fetchBlogs();
                console.log('Function chlled')
            }
        }, [location.pathname] )
    
        return(
            <div className="flex flex-col items-center">
                <Header/>
                <div className="mt-[80px]">
                    <button
                    onClick={() => navigate(-1)}
                    className="border px-4 py-1 rounded-md">
                        Back
                    </button>
                </div>
                <div className="flex flex-col items-center justify-center w-11/12 max-w-[670px] gap-y-4">
                {
                    loading ?
                    (<div>
                        <Spinner/>
                    </div>) :
                    blog ?
                    (<div className="flex flex-col gap-y-4">
                        <BlogData post={blog} />
                        <h2 className="font-bold my-[25px] text-2xl "> Related Blogs </h2>
                        {
                            relatedBlogs.map( (post) => (
                                <div key = {post.id}>
                                    <BlogData post={post} />
                                </div>
                            ) )
                        }

                    </div>) :
                    (<div>
                        <p>No Blog Found</p>
                    </div>)
       
                }
                </div>
            </div>
        );
    
    }

    

export default BlogPage