import { useLoaderData, useNavigate } from "react-router-dom";
import './CheckOut.css'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import UseTitle from "../../UseTitle/UseTitle";

const CheckOut = () => {
    const checkOutData = useLoaderData();
    const { _id, price, img, title } = checkOutData;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
        UseTitle('CheckOut')
    const handelCheckOut = (event) => {
        event.preventDefault()
        const target = event.target;
        const name = target.name.value;
        const email = user?.email;
        const date = target.date.value;
        const price = target.price.value;
        const bookings = {
            custerName: name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            Price: price,
        }
        fetch('http://localhost:5000/bookings', {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(bookings)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "You booking successful",
                        icon: "success"
                    });
                }
                navigate('/booking')
            })
            .catch((error) => console.log(error.message))
    }
    return (
        <div>
            <form onSubmit={handelCheckOut}>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 w-[800px] mx-auto mb-5">
                    <div className="from-control mb-4">
                        <label className="block mb-3" htmlFor="">Name</label>
                        <input className="w-[350px] pl-2 pt-1 pb-1 input-all" type="text" name="name" id="" defaultValue={user?.displayName} placeholder="Enter name" required />
                    </div>
                    <div className="from-control mb-4">
                        <label className="block mb-3" htmlFor="">Email</label>
                        <input className="w-[350px] pl-2 pt-1 pb-1
                        input-all" type="email" name="email" id="" defaultValue={user?.email} placeholder="Enter email" required />
                    </div>
                    <div className="from-control mb-4">
                        <label className="block mb-3" htmlFor="">Date</label>
                        <input className="w-[350px] pl-2 pt-1 pb-1 input-all" type="date" name="date" id="" placeholder="Enter date" required />
                    </div>
                    <div className="from-control mb-4">
                        <label className="block mb-3" htmlFor="">Price</label>
                        <input className="w-[350px] pl-2 pt-1 pb-1 input-all" type="text" name="price" id="" defaultValue={'$' + price} placeholder="Enter text" required />
                    </div>
                    <input className="w-[765px] text-center bg-[#FF3811] pt-1 pb-1 rounded text-white hover:text-black" type="submit" value="Order Now" />
                </div>
            </form>
        </div>
    );
};

export default CheckOut;