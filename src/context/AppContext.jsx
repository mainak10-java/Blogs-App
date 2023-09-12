import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext= createContext();

export default function AppContextProvider({children}){
    const [loading, setLoading]= useState(false);
    const [posts, setPosts] =useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    async function fetchData(page=1){
        setLoading(true);
        let url=`${baseUrl}?page=${page}`
        try{
            const response = await fetch(url);
            const output= await response.json();
            setPage(output.page);
            setTotalPages(output.totalPages);
            setPosts(output.posts);
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
        setPage(page);
        fetchData(page);
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