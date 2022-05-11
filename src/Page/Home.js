import React from 'react'
import Categories from '../Component/Categories'
import Item from '../Component/Item'
import Footer from "../Component/Footer"

export default function Home() {
  return (
    <div style={{ backgroundColor: "#f5f5f5" }}>
      <div className='gird'>
        <div className='row' style={{marginTop: "50px"}}>
          <Categories />
          <div className='row-10'>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
