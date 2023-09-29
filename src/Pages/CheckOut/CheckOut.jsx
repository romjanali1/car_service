import { Link, useLoaderData } from "react-router-dom";


const CheckOut = () => {
    const service = useLoaderData()
    const {_id, img, title, price, description} = service;
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 my-10">
            <div>
                <img className="rounded-md" src={img} alt="" />
            </div>
            <div className="self-center space-y-4">
                <h1 className="text-4xl	font-bold text-orange-500">{title}</h1>
                <h1>{description}</h1>
                <p className="text-3xl	font-bold text-orange-500 pb-5">Price: ${price}</p>

                <Link to={`/booking/${_id}`}>
                <button className="bg-orange-500 hover:bg-orange-600 py-2 px-7 font-bold rounded-md">Check Out</button>
                </Link>
                
            </div>

        </div>
    );
};

export default CheckOut;