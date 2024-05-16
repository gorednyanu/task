import React from 'react';
import Logo from '../assets/image/logo.svg'
export const Footer = () => {
    return (
        <>
            <footer class="bg-dark text-white text-center py-4 mt-auto">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 mb-3 mb-md-0">
                            <img src={Logo} alt='' className='mb-5' />
                            <p>DisCover the power of our secure and rewaring devlopemnt.</p>
                        </div>
                        <div class="col-md-3 mb-3 mb-md-0">
                            <h5>Company</h5>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">About us</li>
                                <li className="nav-item">Our solution</li>
                                <li className="nav-item">Career</li>
                                <li className="nav-item">Contact</li>
                                <li className="nav-item">Blog</li>
                            </ul>
                        </div>
                        <div class="col-md-3 mb-3 mb-md-0">
                            <h5>Contact Us</h5>
                            <p>Email: info@example.com<br />Phone: (123) 456-7890</p>
                        </div>
                        <div class="col-md-3 mb-3 mb-md-0">
                            <h5>Follow Us</h5>
                            <a href="#" class="text-white me-2"><i class="bi bi-facebook"></i></a>
                            <a href="#" class="text-white me-2"><i class="bi bi-twitter"></i></a>
                            <a href="#" class="text-white"><i class="bi bi-instagram"></i></a>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-12">
                            <p class="mb-0">&copy; 2024 Your Company. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}