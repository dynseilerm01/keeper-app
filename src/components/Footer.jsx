const date = new Date();
const currentYear = date.getFullYear();

// footer acts as a selector
function Footer() {
    return ( 
    <footer>
        <p>Copyright {currentYear}</p>
    </footer>
    );
}

export default Footer;