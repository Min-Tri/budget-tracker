import React,{useState} from "react";
import { TransactionModal } from "../TransactionModal";
import styles from './AddBtn.module.css'

export const AddBtn = () => {
    const [open,setOpen]=useState(false)
    const toggle=()=>setOpen(!open)

    return(
        <div className={styles.contain}>
            <button
                className={styles.addbtn}
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