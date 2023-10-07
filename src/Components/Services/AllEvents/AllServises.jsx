import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllServises = () => {
    const [serviceCards, setServiceCards] = useState([])


    useEffect(() => {
        fetch("/eventData.json")
            .then(res => res.json())
            .then(data => setServiceCards(data))
    }, [])
    return (
        <div className="max-w-6xl mx-auto my-10" >
            <div className="text-center text-4xl font-bold uppercase">
                <h2>Our Services</h2>
            </div>
            <div className="grid grid-cols-1 px-5  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
                {
                    serviceCards.map(serviceCard => (
                        <Link to={`/serviceCard/${serviceCard.id}`} key={serviceCard.id} className="card  bg-gray-200 ">
                            <figure><img className="w-full h-64 " src={serviceCard.service_img} alt="Shoes" /></figure>
                            <div className="card-body ">
                                <h2 className="card-title">{serviceCard.serviceName}</h2>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default AllServises;