
import { useEffect } from "react";
import { useState } from "react";
import ServiceDetails from "../ServiceDetails/ServiceDetails";
import UseTitle from "../../UseTitle/UseTitle";


const Services = () => {
    const [services, setServices] = useState([]);
    UseTitle('Service')
    useEffect(() => {
        fetch('http://localhost:5000/cars')
            .then(res => res.json())
            .then(data => setServices(data)) 
    }, []);
    return (
        <div className="text-center mt-0">
            <p className="text-[#FF3811] text-2xl">Service</p>
            <p className="text-4xl font-bold mb-2">Our Service Area</p>
            <p className="text-1xl font-medium mb-3">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-5">
                {
                    services.map(service=><ServiceDetails
                    key={service._id}
                    service = {service}
                    ></ServiceDetails>)
                }
            </div>
        </div>
    );
};

export default Services;