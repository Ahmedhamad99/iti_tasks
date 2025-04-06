import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLanguage } from '../../context/LanguageContext';

const Headnav = () => {

    const cart = useSelector((state) => state.cart);
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    const { lang, toggleLang } = useLanguage();

    const links = [
        { path: "/home", label: lang === 'en' ? "Home" : "الرئيسية" },
        { path: "/products", label: lang === 'en' ? "Products" : "المنتجات" },
        { path: "/register", label: lang === 'en' ? "Register" : "تسجيل" },
    ];

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
            <div className="container">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className={`navbar-nav mb-2 mb-lg-0 ${lang === 'ar' ? 'ms-auto' : 'me-auto'}`}>
                        {links.map((link, index) => (
                            <li className="nav-item" key={index}>
                                <Link className="nav-link" to={link.path}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>

                    
                    <select 
                        value={lang} 
                        onChange={(e) => toggleLang(e.target.value)} 
                        className="form-select w-auto me-3"
                    >
                        <option value="en">English</option>
                        <option value="ar">العربية</option>
                    </select>

                    
                    <Link to="/cart" className="btn btn-outline-light position-relative">
                        Cart
                        {cartCount > 0 &&
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cartCount}
                            </span>
                        }
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Headnav;
