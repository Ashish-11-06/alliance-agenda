import '../style/Welcome.css'
import logo from '../Assets/images/logo.svg'

function Header() {
    return (
        <header className="site-header">
            <div className="container">
                <div className="site-header-inner">
                    <div className="brand header-brand">
                        <h1 className="m-0">
                            <a href="/">
                                <img className="header-logo-image" src={logo} alt="Logo"/>
                            </a>
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;