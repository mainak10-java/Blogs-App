import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Header from "../components/Header";
import PageHandler from "../components/PageHandler";

const Tag = () =>{

    const navigate = useNavigate();
    const location = useLocation();
    const tag =  location.pathname.split('/').at(-1);

    return(
        <div className="flex flex-col items-center">
            <Header/>
            <div className="mt-[80px] flex justify-start gap-x-3">
                <button onClick={() => navigate(-1)} className="border px-4 py-1 rounded-md">
                    Back
                </button>

                <h2 className="px-4 py-1">Blogs Tagged <span className="font-bold">#{tag}</span></h2>
            </div>

            <Blogs/>
            <PageHandler/>

        </div>
    );
}

export default Tag