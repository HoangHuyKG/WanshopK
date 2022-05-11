import React from 'react'
import styles from "../Styles/footer.module.css"
import { MdLocationOn } from "react-icons/md"
import { BsFillTelephoneFill } from "react-icons/bs"
import { GrMail } from "react-icons/gr"
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, } from "react-icons/fa"
export default function Header() {
  return (
    <div style={{ backgroundColor: "#666666" }}>
      <div className='gird'>
        <div className='row'>
          <div className='col-3' style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "flex-start", flexDirection: "column" }}>
              <div className={styles.footer_logo}>Wanshop</div>
              <div>
                <ul style={{ margin: 0, padding: 0 }}>
                  <li style={{ listStyle: "none", textAlign: "start" }}>
                    <a style={{ textDecoration: "none", color: "white" }} href='/'>Trang chủ</a>
                  </li>
                  <li style={{ listStyle: "none", textAlign: "start" }}>
                    <a style={{ textDecoration: "none", color: "white" }} href='/contact'>Liên hệ</a>
                  </li>
                </ul>
                <div style={{ fontSize: "12px", marginTop: "20px" }}>Copyright © by Huy Hoang {"&"} Nhat Duy </div>
              </div>
            </div>
          </div>
          <div className='col-3' style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
            <div style={{ display: "flex", alignItems: "flex-start", flexDirection: "column" }}>
              <div style={{ display: "flex", justifyContent: "center", marginTop: "16px", color: "white", fontSize: "14px" }}>
                < MdLocationOn style={{ padding: "4px", borderRadius: "50%", backgroundColor: "#33383b", color: "white", marginRight: "8px" }} />
                Quận Ninh Kiều, Cần Thơ
              </div>
              <div style={{ display: "flex", justifyContent: "center", marginTop: "16px", color: "white", fontSize: "14px" }}>
                < BsFillTelephoneFill style={{ padding: "4px", borderRadius: "50%", backgroundColor: "#33383b", color: "white", marginRight: "8px" }} />
                +84 999.999.999
              </div>
              <div style={{ display: "flex", justifyContent: "center", marginTop: "16px", color: "white", fontSize: "14px" }}>
                < GrMail style={{ padding: "4px", borderRadius: "50%", backgroundColor: "#33383b", color: "white", marginRight: "8px" }} />
                shopshop@gmail.com
              </div>
            </div>
          </div>
          <div className='col-3' style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "16px", color: "white", fontSize: "16px", marginBottom: "30px" }}>Thông tin liên hệ</div>
            <div style={{ display: "flex", alignItems: "flex-start", flexDirection: "column" }}>
              <div>
                <a target="_blank" href='https://www.facebook.com/profile.php?id=100015875765060'><FaFacebookSquare style={{ color: "#33383b", marginRight: "8px", fontSize: "25px" }} /></a>
                <FaTwitterSquare style={{ color: "#33383b", marginRight: "8px", fontSize: "25px" }} />
                <FaInstagramSquare style={{ color: "#33383b", marginRight: "8px", fontSize: "25px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
