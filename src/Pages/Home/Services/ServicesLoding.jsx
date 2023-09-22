const ServicesLoding = ({ service }) => {
    const {title, img, price} = service;
  return (
    <div className="card w-96 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-orange-500">Price:$ {price}</p>
      </div>
    </div>
  );
};

export default ServicesLoding;
