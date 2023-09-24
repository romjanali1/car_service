import { BiRightArrowAlt } from "react-icons/bi";

const ServicesLoding = ({ service }) => {
    const {title, img, price} = service;
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
        <div className="flex items-center relative text-orange-500">
        <p>Price:$ {price}</p>
        <p className="absolute right-0"><BiRightArrowAlt/></p>
        </div>
      </div>
    </div>
  );
};

export default ServicesLoding;
