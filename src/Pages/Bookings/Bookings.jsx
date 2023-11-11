import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import BookingList from "./BookingList";
import { useNavigate } from "react-router-dom";


const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

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

const hendelBookingUpdate = id => {
  fetch(`http://localhost:5000/bookings/${id}`,{
    method:'PATCH',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({status:'confirm}'})
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if(data.modifiedCount > 0){
      const reming = bookings.filter(booking => booking._id !== id);
      const update = bookings.find(booking => booking._id === id);
      update.status = 'confirm'
      const newBookings = [update, ...reming];
      setBookings(newBookings);

    }
  })

}

  const url = `http://localhost:5000/bookings?email=${user.email}`;
  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('car-access-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        if(!data.error){
          setBookings(data);
        }
        else{
          navigate('/')
        }
        
      });
  }, [url, navigate]);
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <tbody>
            {
                bookings.map(booking => <BookingList
                key={booking._id}
                booking={booking}
                hendelDelete={hendelDelete}
                hendelBookingUpdate={hendelBookingUpdate}
                ></BookingList>)
            }

        </tbody>
      </table>
    </div>
  );
};

export default Bookings;
