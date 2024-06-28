
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import UseTitle from "../../UseTitle/UseTitle";


const ServiceDetails = ({ service }) => {
    const {_id, price, img, title } = service;
    UseTitle('ServiceDetails')
    return (
        <div>
            <div className="card w-72 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body ">
                    <h2 className="text-left text-2xl ">{title}</h2>
                    <div className="flex items-center">
                        <p className="text-left text-[#FF3811]">Price: ${price}</p>
                        <Link to={`/checkOut/${_id}`}><FaArrowRightLong className="text-[#FF3811]" /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;