import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
import { useNavigate } from "react-router-dom";

export const AppContext= createContext();

export default function AppContextProvider({children}){
    const [loading, setLoading]= useState(false);
    const [posts, setPosts] =useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
    const navigate = useNavigate();

    async function fetchData(page=1, tag=null, category){
        setLoading(true);
        let url=`${baseUrl}?page=${page}`

        if(tag){
            url +=`&tag=${tag}`;
        }

        if(category){
            url +=`&category=${category}`;
        }

        try{
            const response = await fetch(url);
            const output= await response.json();

            if (!output.posts || output.posts.length === 0)
                throw new Error("Something Went Wrong");
            
            setPage(output.page);
            setPosts(output.posts);
            setTotalPages(output.totalPages);
            
        }
        catch(e){
            alert('Could not fetch data')
            setPage(1);
            setTotalPages(null);
            setPosts([]);
        }
        setLoading(false)
    } 

    function changePageHandler(page){
        navigate( { search: `?page=${page}`});
        setPage(page);
    }

    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchData,
        changePageHandler
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}