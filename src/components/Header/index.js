/* eslint-disable jsx-a11y/anchor-is-valid */
import logosvg from '../../svg/logo.svg';

const Header = () =>{

    const desclogo = "Essa é a logo do blog"

    return (
        <>
            <header className='flex-space-between'>
                <div className="logo">
                    <img src={logosvg} alt={desclogo}></img>
                </div>
                <div className="search">
                    <input type='text' class='input-search' name='search'></input>
                </div>
                <ul className="menu">
                    <li> <a href="" className='nav-link'> Categorias</a> </li>
                    <li> <a href="" className='nav-link'> Sobre</a> </li>
                    <li> <a href="" className='nav-link'> Contato</a> </li>
                </ul>
            </header>  
        </> 
    );
}

export default Header;