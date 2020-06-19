import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/adventure">Adventure</Link></li>
                            <li><Link to="/health">Health & Wellness</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4 text-center">
                        <img src="../assets/images/cropped-50ui-300x175.png" alt="Oui50 Logo"/>
                    </div>
                    <div className="col-md-4 text-center">
                        <h5 id="footer">Follow Us!</h5>
                        <a className="btn btn-social-icon btn-twitter btn-light" href="http://twitter.com/oui_50"><i className="fa fa-twitter fa-lg" aria-label="Twitter Logo" /></a>{' '}
                        <a className="btn btn-social-icon btn-google btn-light" href="https://www.youtube.com/channel/UCEvkWG11yDDvEkwaUJbRIRg"><i className="fa fa-youtube fa-lg" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;