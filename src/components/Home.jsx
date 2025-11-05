import './home.css';
import { Link } from 'react-router-dom';        

function Home() {
    return (
        <div className="home">
            <div className="navbar">
                <div className="logo">Logo</div>
                <div className="nav-links">$ git push --set-upstream origin main
                    <Link to="/Home">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
            </div>
        <h1>Welcome to React Router</h1>
        </div>
    )
}
export default Home;