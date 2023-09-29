
import { Link } from "react-router-dom";

const ServicesLoding = ({ service }) => {
    const {_id, title, img, price} = service;
  return (
    <div className="card w-96 shadow-xl lg:mx-20">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex items-center relative">
        <p>Price:$ {price}</p>
        <div className="absolute right-0">
          <Link to={`/checkout/${_id}`}>
          <button className="bg-orange-500 text-white rounded px-2">Book Now</button>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesLoding;
