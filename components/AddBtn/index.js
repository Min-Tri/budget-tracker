import React,{useState} from "react";
import { TransactionModal } from "../TransactionModal";

export const AddBtn = () => {
    const [open,setOpen]=useState(false)
    const toggle=()=>setOpen(!open)

    return(
        <div className="flex flex-col justify-center">
            <button
                className=" bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mx-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setOpen(true)}
            >
                Add
            </button>
          
            <TransactionModal 
                show={open}
                hide={toggle}
            />

        </div>
    )
}