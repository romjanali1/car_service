const BookingList = ({ booking, hendelDelete, hendelBookingUpdate }) => {
    const {_id, customerName, email, date, img, serviceTitel, amount, status} = booking;


  return (
    <tr>
      <th>
      <button onClick={() => hendelDelete(_id)} className="btn btn-circle btn-outline hover:bg-red-600">
       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
     </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className=" w-20 rounded-md">
              <img
                src={img}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Customer: {customerName}</div>
            <div className="text-sm opacity-50">Service: {serviceTitel}</div>
          </div>
        </div>
      </td>
      <td>
        {amount}
      </td>
      <td>{date}</td>
      <th>
        {status === 'confirm' ? <span className="font-bold text-primary">confirm</span>:
            <button onClick={() => hendelBookingUpdate(_id)} className="btn btn-ghost btn-xs">Please confirm</button>
        }

      </th>
    </tr>
  );
};

export default BookingList;
