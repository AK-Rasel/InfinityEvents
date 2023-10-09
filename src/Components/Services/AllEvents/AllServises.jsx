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
        <div  className="max-w-6xl mx-auto my-10" >
            
            <div className="text-center text-4xl font-bold uppercase">
                <h2  data-aos="zoom-in">Our <span className="text-rose-700">Services</span></h2>
            </div>
            <div  className=" grid grid-cols-1 px-5  md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
                {
                    serviceCards.map(serviceCard => (
                        <Link data-aos="zoom-in" to={`/serviceCard/${serviceCard.id}`} key={serviceCard.id} className="card  bg-rose-700 text-white  ">
                            <figure><img className="w-full h-64 " src={serviceCard.service_img} alt="Shoes" /></figure>
                            <div className="card-body p-3">
                                <h2 className=" text-center">{serviceCard.serviceName}</h2>
                            </div>
                        </Link>
                    ))
                }
            </div>
            
        </div>
    );
};

export default AllServises;