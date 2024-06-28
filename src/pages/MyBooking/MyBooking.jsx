import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import BookingRow from "../BookingRow/BookingRow";
import UseTitle from "../../UseTitle/UseTitle";
import { useNavigate } from "react-router-dom";


const MyBooking = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const navigate= useNavigate() 
  UseTitle('MyBooking')
  const url = `http://localhost:5000/bookings?email=${user?.email}`
  console.log(url);
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
          authorization:`Bearer ${localStorage.getItem('new-car-doctor')}`
      }
    })
      .then(res => res.json())
      .then(data => {
        if (!data.error) {
          setBookings(data)
        }
        else{
            navigate('/')
        }
      })
      .catch((error) => console.log(error.message))
  }, [url, navigate]);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
              </th>
              <th>Image</th>
              <th>Title</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              bookings.map(booking => <BookingRow
                key={booking._id}
                booking={booking}
                bookings={bookings}
                setBookings={setBookings}
              ></BookingRow>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;