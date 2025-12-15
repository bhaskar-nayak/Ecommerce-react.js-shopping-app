import './Styles/Footer.css';
function Footer(){
    return(
      <footer className="footer mt-4">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Services</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Lifestyle & Shopping</h4>
            <ul>
              <li><a href="#">Fashion</a></li>
              <li><a href="#">Home Decor</a></li>
              <li><a href="#">Gadgets</a></li>
              <li><a href="#">Accessories</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Bhaskar. All rights reserved.</p>
        </div>
      </div>
    </footer>
    )
}
export default Footer;
