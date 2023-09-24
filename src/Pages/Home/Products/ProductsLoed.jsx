

const ProductsLoed = ({product}) => {
    const {title, img, price} = product;
    return (
        <div className="card w-96 shadow-xl lg:mx-20">
        <figure className="p-20 m-10 bg-slate-100">
          <img
            src={img}
            alt="Shoes"
            className="rounded-md"
          />
        </figure>
        <div className="card-body text-center">
          <h2>{title}</h2>
          <div className="flex items-center relative text-orange-500">
          <p>Price:$ {price}</p>
          </div>
        </div>
      </div>

    );
};

export default ProductsLoed;