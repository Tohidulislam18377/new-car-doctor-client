import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/icons/logo.svg'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import UseTitle from "../../UseTitle/UseTitle";
const Header = () => {
    const { logOut, user } = useContext(AuthContext);
    const navigate = useNavigate();
    UseTitle('Header')
    const handelSingOut = () => {
        logOut()
            .then(() => { 
                localStorage.removeItem('new-car-doctor')
                navigate('/');
            })
            .catch((error) => console.log(error.message))
    }
    return (
        <div style={{ position: 'sticky', zIndex: '1000', top: '0px' }} >
            <div className="navbar bg-base-100 mt-3 mb-3">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="mr-5"><Link to={'/'}>Home</Link></li>
                            <li>
                                <Link className="mr-5" to={'/about'}>About</Link>
                            </li>
                            <li className="mr-5"><Link to={'/services'}>Services</Link></li>
                            <li className="mr-5"><Link to={'/blog'}>Blog</Link></li>
                        </ul>
                    </div>
                    <img className="h-[54px] w-[100px]" src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu-horizontal px-1">
                        <li className="mr-5"><Link to={'/'}>Home</Link></li>
                        <li>
                            <Link className="mr-5" to={'/about'}>About</Link>
                        </li>
                        <li className="mr-5"><Link to={'/services'}>Services</Link></li>
                       {user && <li className="mr-5"><Link to={'/booking'}>MyBooking</Link></li>}
                    </ul>
                </div>
                <div className="navbar-end">
                {user ? <><button className="bg-[#FF3811] pl-3 pr-3 pt-1 pb-1 rounded-2xl" onClick={handelSingOut}>SingOut</button></>:<Link className="bg-[#FF3811] pl-4 pr-4 pt-1 pb-1 rounded-2xl" to={'/login'}>Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default Header;