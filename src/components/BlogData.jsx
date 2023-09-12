import { NavLink } from "react-router-dom";

const BlogData = ({post}) =>{
    return(
        <div className="flex flex-col justify-center ">
            <NavLink to={`/blog/${post.id}`}>
                <p className="font-bold mb-1 text-lg cursor-pointer">{post.title}</p>
            </NavLink>

            <p className="mb-1 text-sm">
                By 
                <span className="italic">{post.author} </span>
                <NavLink to ={`/categories/${post.category.replaceAll(' ','-')}`}>
                    <span  className="font-bold underline">{post.category}</span>
                </NavLink>
            </p>

            <p className="mb-[14px] text-sm">Posted on {post.date}</p>

            <p className="text-md">{post.content}</p>

            <div className="flex gap-x-3 mt-[14px]">
                {
                    post.tags.map((tag , index) => (
                        <NavLink key={index} to = {`/tags/${tag.replaceAll(' ','-')}`}>
                            <span className="underline text-blue-700 text-xs font-bold">{`#${tag}`}</span>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
}

export default BlogData;