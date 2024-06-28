import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/images/login/login.svg'
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { IoEye, IoEyeOffSharp } from "react-icons/io5";
import UseTitle from "../../UseTitle/UseTitle";
import { toast } from "react-toastify";

const SingUp = () => {
    const { createUser, sinInGoogle } = useContext(AuthContext);
    UseTitle('SingUp')
    const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const handelSingUP = (event) => {
        event.preventDefault();
        const target = event.target;
        const name = event.target.name.value;
        const email = target.email.value;
        const password = target.password.value;
        createUser(email, password)
            .then((result) => {
                const loggedUser = result.user;
                const user = {
                    email:loggedUser.email
                }
                fetch('http://localhost:5000/jwt',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(user)
                })
                .then( res =>res.json())
                .then(data =>{
                    localStorage.setItem('new-car-doctor', data.token)
                    userName(loggedUser, name);
                    navigate('/');
                    target.reset();
                    console.log(loggedUser);
                })
            })
            .catch((error) => {
                console.log(error.message)
                if (error.message) {
                    toast.error('Already have an account please login',{
                        position:'top-center'
                    }) 
                }

            })
    };

    const userName = (user, name) => {
        updateProfile(user, {
            displayName: name
        })
    };

    // useEffect(() => {
    //     getRedirect()
    //         .then((result) => {
    //             const loggedUser = result.user;
    //             console.log(loggedUser);
    //             navigate('/')
    //         })
    //         .catch((error) => console.log(error.message))

    // }, [navigate]);

    const handelGoogle = () => {
        sinInGoogle()
            .then((result)=>{
                const loggedUser = result.user
                const user = {
                    email:loggedUser.email
                }
                fetch('http://localhost:5000/jwt',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(user)
                })
                .then(res=>res.json())
                .then(data =>{
                    localStorage.setItem('new-car-doctor', data.token)
                    console.log(loggedUser);
                    navigate('/')
                })
            })
            .catch((error) => console.log(error.message))

    };
    return (
        <div>
            <div className="hero  bg-base-200 rounded-xl">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="mr-12 w-1/2">
                        <img src={logo} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handelSingUP} className="card-body">
                            <h1 className="text-3xl font-bold">SingUp</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input style={{ border: '1px solid black' }} type="text" name="name" placeholder="name" className="outline-none pl-3 pt-2 pb-2 rounded" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input style={{ border: '1px solid black' }} type="email" name="email" placeholder="email" className="outline-none pl-3 pt-2 pb-2 rounded" required />
                            </div>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div style={{ border: '1px solid black' }} className='flex items-center rounded pr-1'>
                                    <input className='pl-3 pt-2 pb-2 rounded w-72 outline-none ' type={show ? "text" : "password"} name="password" id="" placeholder='password' required />
                                    <p onClick={() => setShow(!show)}>{show ? <IoEye className='ml-2 h-8 w-6' /> : <IoEyeOffSharp className='ml-2 h-8 w-6' />}</p>
                                </div>
                            </div>
                            <div className="form-control">
                                <input className=" p-3 rounded hover:text-white bg-[#FF3811]" type="submit" value="SingUp" />
                            </div>
                            <div className='text-center'>
                                <p className='mb-2'>Or Sign In with</p>
                                <button onClick={handelGoogle} className='btn btn-circle mb-2'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g>
                                        <path d="M4.6875 10.0001C4.6875 9.00919 4.96051 8.08095 5.4348 7.28614V3.91474H2.0634C0.725313 5.65255 0 7.77048 0 10.0001C0 12.2297 0.725313 14.3476 2.0634 16.0854H5.4348V12.714C4.96051 11.9192 4.6875 10.991 4.6875 10.0001Z" fill="#FBBD00" />
                                        <path d="M10 15.3126L7.65625 17.6564L10 20.0001C12.2296 20.0001 14.3475 19.2748 16.0854 17.9367V14.5689H12.7175C11.9158 15.0449 10.9836 15.3126 10 15.3126Z" fill="#0F9D58" />
                                        <path d="M5.43488 12.7139L2.06348 16.0854C2.3284 16.4294 2.61688 16.7589 2.92902 17.0711C4.81777 18.9598 7.32898 20 10.0001 20V15.3125C8.06164 15.3125 6.3627 14.2688 5.43488 12.7139Z" fill="#31AA52" />
                                        <path d="M20 10.0001C20 9.39169 19.9449 8.78216 19.8363 8.18849L19.7483 7.70806H10V12.3956H14.7442C14.2835 13.312 13.5752 14.0597 12.7175 14.5689L16.0853 17.9367C16.4294 17.6718 16.7589 17.3833 17.0711 17.0712C18.9598 15.1824 20 12.6712 20 10.0001Z" fill="#3C79E6" />
                                        <path d="M13.7565 6.24354L14.1708 6.65783L17.4854 3.3433L17.0711 2.92901C15.1823 1.04026 12.6711 6.10352e-05 10 6.10352e-05L7.65625 2.34381L10 4.68756C11.419 4.68756 12.7531 5.24014 13.7565 6.24354Z" fill="#CF2D48" />
                                        <path d="M10.0001 4.68756V6.10352e-05C7.32902 6.10352e-05 4.81781 1.04026 2.92902 2.92897C2.61688 3.24112 2.3284 3.57061 2.06348 3.91471L5.43488 7.28612C6.36273 5.73131 8.06168 4.68756 10.0001 4.68756Z" fill="#EB4132" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_351_972">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg></button>
                                <p>Already have an account?<Link className='text-[#FF3811] hover:underline' to={'/login'}>Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;