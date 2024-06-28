import banner1 from '../../assets/images/banner/1.jpg';
import banner2 from '../../assets/images/banner/2.jpg';
import banner3 from '../../assets/images/banner/3.jpg';
import banner4 from '../../assets/images/banner/4.jpg';
import banner5 from '../../assets/images/banner/5.jpg';
import banner6 from '../../assets/images/banner/6.jpg';
import about from '../../assets/images/about_us/parts.jpg'
import './Home.css'
import UseTitle from '../../UseTitle/UseTitle';

const Home = () => {
    UseTitle('Home')
    return (
        <div>
            {/* banner section */}
            <div className="carousel w-full mb-7">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full rounded-xl" />
                    <div className="absolute flex transform top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] left-0 right-5 pl-7 rounded-xl bottom-0 items-center">
                        <div className='text-white w-1/2'>
                            <h2 className='text-6xl font-bold mb-2'>Affordable Price For <br /> Car Servicing</h2>
                            <p className='mb-3'>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
                            <button className="btn btn-secondary mr-4">Discover More</button>
                            <button className="btn btn-outline text-white ">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide6" className="btn btn-circle mr-5 bg[rgba(255, 255, 255, 0.20)]">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-[#FF3811]">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full rounded-xl" />
                    <div className="absolute flex transform top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] left-0 right-5 pl-7 rounded-xl bottom-0 items-center">
                        <div className='text-white w-1/2'>
                            <h2 className='text-6xl font-bold mb-2'>Affordable Price For <br /> Car Servicing</h2>
                            <p className='mb-3'>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
                            <button className="btn btn-secondary mr-4">Discover More</button>
                            <button className="btn btn-outline text-white ">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5 bg[rgba(255, 255, 255, 0.20)]">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-[#FF3811]">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={banner3} className="w-full rounded-xl" />
                    <div className="absolute flex transform top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] left-0 right-5 pl-7 rounded-xl bottom-0 items-center">
                        <div className='text-white w-1/2'>
                            <h2 className='text-6xl font-bold mb-2'>Affordable Price For <br /> Car Servicing</h2>
                            <p className='mb-3'>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
                            <button className="btn btn-secondary mr-4">Discover More</button>
                            <button className="btn btn-outline text-white ">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className="btn btn-circle mr-5 bg[rgba(255, 255, 255, 0.20)]">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-[#FF3811]">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={banner4} className="w-full rounded-xl" />
                    <div className="absolute flex transform top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] left-0 right-5 pl-7 rounded-xl bottom-0 items-center">
                        <div className='text-white w-1/2'>
                            <h2 className='text-6xl font-bold mb-2'>Affordable Price For <br /> Car Servicing</h2>
                            <p className='mb-3'>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
                            <button className="btn btn-secondary mr-4">Discover More</button>
                            <button className="btn btn-outline text-white ">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="btn btn-circle mr-5 bg[rgba(255, 255, 255, 0.20)]">❮</a>
                        <a href="#slide5" className="btn btn-circle bg-[#FF3811]">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={banner5} className="w-full rounded-xl" />
                    <div className="absolute flex transform top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] left-0 right-5 pl-7 rounded-xl bottom-0 items-center">
                        <div className='text-white w-1/2'>
                            <h2 className='text-6xl font-bold mb-2'>Affordable Price For <br /> Car Servicing</h2>
                            <p className='mb-3'>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
                            <button className="btn btn-secondary mr-4">Discover More</button>
                            <button className="btn btn-outline text-white ">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn btn-circle mr-5 bg[rgba(255, 255, 255, 0.20)]">❮</a>
                        <a href="#slide6" className="btn btn-circle bg-[#FF3811]">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={banner6} className="w-full rounded-xl" />
                    <div className="absolute flex transform top-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] left-0 right-5 pl-7 rounded-xl bottom-0 items-center">
                        <div className='text-white w-1/2'>
                            <h2 className='text-6xl font-bold mb-2'>Affordable Price For <br /> Car Servicing</h2>
                            <p className='mb-3'>There are many variations of passages of  available, <br /> but the majority have suffered alteration in some form</p>
                            <button className="btn btn-secondary mr-4">Discover More</button>
                            <button className="btn btn-outline text-white ">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide5" className="btn btn-circle mr-5 bg[rgba(255, 255, 255, 0.20)]">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-[#FF3811]">❯</a>
                    </div>
                </div>
            </div>
            {/* about section */}
            <div className='flex gap-x-20 items-center mb-10'>
                <div className='about-image w-1/2'>
                <img className='w-[227px] h-[220px] mt-72 ml-64 border-solid border-4 rounded border-white' src={about} alt="" />
                </div>
                <div className='w-1/2'>
                    <p className='text-[#FF3811] text-3xl font-medium mb-1'>About Us</p>
                    <p className='text-4xl font-bold leading-none mb-2'>We are qualified <br /> & of experience <br /> in this field</p>
                    <p className='mb-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p className='mb-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <button className="btn btn-secondary mr-4">Discover More</button>
                </div>
            </div>
        </div>
    );
};

export default Home;