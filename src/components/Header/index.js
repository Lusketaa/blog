import logo from '../../svg/logo.svg';

const Header = () => {
    return (
        <>
            <header>
                <div className="logo">
                    <img src={logo} alt='logo do blog'/>
                </div>
                <div className="search">

                </div>
                <div className="menu">

                </div>
            </header>
        </>
    );
}

export default Header;