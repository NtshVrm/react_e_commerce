export function Footer(){
    return(
        <footer className="footer">
                <div className="footer-docs">
                    <Link className="doc-item" to="/">About Us</Link>
                    <Link className="doc-item" to="/">Customer Service</Link>
                    <Link className="doc-item" to="/">Delivery</Link>
                    <Link className="doc-item" to="/">Terms & Conditions</Link>
                </div>
                <div className="footer-social">
                    <Link className="social-item" to="/"><i className="fab fa-facebook"></i></Link>
                    <Link className="social-item" to="/"><i className="fab fa-twitter"></i></Link>
                    <Link className="social-item" to="/"><i className="fab fa-instagram"></i></Link>
                    <div className="sep-item">|</div>
                    <div className="pay-item"><i className="fab fa-google-pay"></i></div>
                    <div className="pay-item"><i className="fab fa-cc-visa"></i></div>
                    <div className="pay-item"><i className="fab fa-cc-paypal"></i></div>
                    <div className="pay-item"><i className="fab fa-cc-mastercard"></i></div>
                    <div className="pay-item"><i className="fab fa-cc-apple-pay"></i></div>
                    <div className="pay-item"><i className="fab fa-cc-amex"></i></div>
                    <div className="pay-item"><i className="fab fa-cc-amazon-pay"></i></div>

                </div>
                <div className="footer-copyright">
                    <div className="copyright-item"><i className="far fa-copyright"></i> 2022 NtshVrm.All right reserved.</div>
                </div>
        </footer>
    )
}