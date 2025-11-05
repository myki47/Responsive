import './footer.css';
import React from "react";

function Footer() {
    return (
        <footer className="site-footer">
            <p>© {new Date().getFullYear()} My Site</p>
        </footer>
    );
}

// export default Footer so `import Footer from "./components/Footer"` works
export default Footer;