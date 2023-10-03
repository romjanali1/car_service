import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";


const Booking = () => {
    const service = useLoaderData()
    const {_id, img, title, price,} = service;
    const {user} = useContext(AuthContext);

    const hendelBookService = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const amount = form.amount.value;
        const order = {
            customerName: name,
            email,
            date,
            img,
            serviceId: _id,
            serviceTitel: title,
            amount
        }
        console.log(order)
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({order}),
            
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('Booking successfully')
            }
        })
    }
    return (
        <div>
            <h1 className="font-bold text-orange-400 text-3xl mt-10 grid justify-items-center">Booking Your {title} Service</h1>
            <form onSubmit={hendelBookService} className="bg-slate-100 p-20 rounded my-20">
                <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                <div className="space-y-8">
                    <input type="text" name="name" defaultValue={user?.name} placeholder="Your name" className="w-full rounded p-3" />
                    <input type="email" name="email" defaultValue={user?.email} placeholder="Your email" className="w-full rounded p-3" />
                </div>
                <div className="space-y-8">
                   <input type="date" name="date" className="w-full rounded p-3" />
                   <input type="text" name="amount" defaultValue={'$'+price} placeholder="Amount" className="w-full rounded p-3" />
                </div>
                </div>
                   <button className="bg-orange-500 hover:bg-orange-600 font-bold w-full my-6 p-3 rounded" type="submit">Order Confirm</button>

            </form>
            
        </div>
    );
};

export default Booking;