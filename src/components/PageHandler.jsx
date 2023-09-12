import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const PageHandler= () =>{
    const {page, totalPages,changePageHandler} = useContext(AppContext)
    return (
        <div className="fixed bottom-0 flex bg-white w-full justify-center border shadow-md">
            <div className="flex justify-between w-11/12 max-w-[670px] py-2">
                <div className="flex gap-x-2">
                    { page > 1 && 
                        (
                            <button onClick={() =>changePageHandler(page-1)} className="rounded-md py-1 px-2 border-solid border-2">
                                Previous
                            </button>
                        )
                    }

                    {
                        page < totalPages && 
                            (
                                <button onClick={() =>changePageHandler(page+1)} className="rounded-md py-1 px-2 border-solid border-2">
                                    Next
                                </button>
                            ) 
                    }
                </div>
                <p>
                    Page {page} of {totalPages}
                </p>
            </div>
        </div>
    );
}

export default PageHandler;