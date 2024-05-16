import Logo from "../assets/image/logo.svg"
export const TopBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                        <div>
                            <img src={Logo} alt="" />
                        </div>
                        <div>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Our Service & Solution</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Partner eith us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn btn-light">
                                        <i class="bi bi-telephone me-2"></i>
                                        <span>contact</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}