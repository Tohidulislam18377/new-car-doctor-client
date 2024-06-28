import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";
import UseTitle from "../../UseTitle/UseTitle";


const BookingRow = ({ booking, setBookings, bookings}) => {
    const { _id, Price, img, service, date,  status} = booking;
    UseTitle('Booking')
    const handelDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your booking has been deleted.",
                                icon: "success"
                            });
                            const remaining = bookings.filter(bk => bk._id !== _id);
                            setBookings(remaining);
                        }
                    })
            }
        })
    };
    
    const handelBookingConfirm = (_id) => {
        fetch(`http://localhost:5000/bookings/${_id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== _id);
                    const updated = bookings.find(booking => booking._id === _id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ... remaining];
                    setBookings(newBookings);
                }
            })
    };
    
    return (
        <tr>
            <th>
                <label>
                    <button className="text-red-500" onClick={() => handelDelete(_id)}><RiDeleteBin5Line className="h-7 w-8" /></button>
                </label>
            </th>
            <td>
                <div className="avatar">
                    <div className="h-24 w-24 rounded">
                        <img src={img} />
                    </div>
                </div>
            </td>
            <td>
                {service}
            </td>
            <td>{date}</td>
            <td>{Price}</td>
            <th>
                { status === 'confirm'? <span className="text-purple-500">Confirmed</span>:
                    <button onClick={() => handelBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>}
            </th>
        </tr>
    );
};

export default BookingRow;