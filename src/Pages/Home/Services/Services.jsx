import { useEffect, useState } from "react";
import ServicesLoding from "./ServicesLoding";


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div className="grid justify-items-center">
            <div className="text-center space-y-4">
                <h2 className="text-orange-500 text-2xl font-bold">Service</h2>
                <h2 className="text-3xl font-bold">Our Service Area</h2>
                <p>
                the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. 
                </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    services.map(service => <ServicesLoding
                    key={service._id}
                    service={service}
                    ></ServicesLoding>)
                }

            </div>
            <div className="py-8 text-center">
            <button className="btn btn-outline text-orange-500 hover:bg-orange-400">More Services</button>
            </div>
            
        </div>
    );
};

export default Services;