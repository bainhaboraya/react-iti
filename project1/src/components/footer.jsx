import React from 'react';
import "../css/footer.css";

export function Footer() {
    return (
        <div className="footer-clean">
            <footer>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-4 col-md-3 item">
                            <h3>Explore</h3>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/">Books</a></li>
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Contact Us</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-md-3 item">
                            <h3>Categories</h3>
                            <ul>
                                <li><a href="/">Fiction</a></li>
                                <li><a href="/">Non-Fiction</a></li>
                                <li><a href="/">Science Fiction</a></li>
                                <li><a href="/">Fantasy</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-4 col-md-3 item">
                            <h3>Connect</h3>
                            <ul>
                                <li><a href="/">Facebook</a></li>
                                <li><a href="/">Twitter</a></li>
                                <li><a href="/">Instagram</a></li>
                                <li><a href="/">Pinterest</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 item social">
                            {/* <button><i className="icon ion-social-facebook"></i></button>
                            <button><i className="icon ion-social-twitter"></i></button>
                            <button><i className="icon ion-social-instagram"></i></button>
                            <button><i className="icon ion-social-pinterest"></i></button> */}
                            <p className="copyright">Bookstore Name © {new Date().getFullYear()}</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
