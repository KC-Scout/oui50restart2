import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-4 offset-1">
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/adventure">Adventure</Link></li>
                            <li><Link to="/health">Health & Wellness</Link></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-4 text-center">
                        <img src="../assets/images/cropped-50ui-300x175.png"/>
                    </div>
                    <div className="col-sm-3 text-center">
                        <h5 id="footer">Follow Us!</h5>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer