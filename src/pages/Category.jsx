import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import PageHandler from "../components/PageHandler";

const Category = () =>{
    const location= useLocation();
    const category = location.pathname.split('/').at(-1);
    const navigate = useNavigate();

    return(
        <div className="flex flex-col items-center">
            <Header/>
            <div className="mt-[80px] flex justify-evenly gap-x-3">
                <button onClick={() => navigate(-1)} className="border px-4 py-1 rounded-md">
                    Back
                </button>
                <h2 className="px-4 py-1">Blogs on <span className="font-bold">{category}</span></h2>
            </div>

            <Blogs/>
            <PageHandler/>
        </div>
    );
}

export default Category