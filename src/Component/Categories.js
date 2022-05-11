import React from 'react'
import "../App.css"
import styles from "../Styles/categories.module.css"
import {CgMenuGridR} from "react-icons/cg"
export default function Categories() {
    return (
                <div className='col-2' >
                    <div >
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                        <CgMenuGridR style={{marginRight: "10px"}}/>
                        <div className={styles.category_text}>DANH MỤC</div>
                        </div>
                        <ul className={styles.category}>
                            <li className={styles.category_item}>Áo thun</li>
                            <li className={styles.category_item}>Ba lô</li>
                        </ul>
                    </div>
                </div>
    )
}
