import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import BookingList from "./BookingList";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const hendelDelete = id  => {
    const proced = confirm('Are you delete')
    if(proced) {
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
           if(data.deletedCount > 0){
            alert('delete successful');
            const remaining = bookings.filter(booking => booking._id !== id);
            setBookings(remaining)
           }
        })
    }
}

  const url = `http://localhost:5000/bookings?email=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, []);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <tbody>
            {
                bookings.map(booking => <BookingList
                key={booking._id}
                booking={booking}
                hendelDelete={hendelDelete}
                ></BookingList>)
            }

        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
