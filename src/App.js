import './App.css';
import Home from "../src/Page/Home"
import styles from "./Styles/header.module.css"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Contact from './Page/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <header className={styles.rootheader}>
            <div className={styles.header}>
              <Link to="/" className={styles.header_logo}>
                <img className={styles.header_logo_image} src={require("./Assets/img/logo.png")} alt="logo" />
                <div className={styles.header_logo_text}>Wanshop</div>
              </Link>
              <div className={styles.header_nav}>        
                    <Link to="/" className={styles.header_nav_text}>TRANG CHỦ</Link>  
                    <Link to="/contact" className={styles.header_nav_text}>LIÊN HỆ</Link>                   
              </div>
            </div>
          </header>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/contact" element={<Contact />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
