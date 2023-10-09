import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const ServiceCardDetail = () => {
    const [serviceDitals, setServiceDitals] = useState({})
    const { img,eventTitle,description, ticketPrice} = serviceDitals
    const { id } = useParams()
    const serviceDatas = useLoaderData()

    useEffect(() => {
        const findServices = serviceDatas?.find(serviceData => serviceData.id == id)
        setServiceDitals(findServices)
    }, [id, serviceDatas])

    console.log(serviceDatas,)

    return (
        <div>
            <div className="hero min-h-[50vh]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img data-aos="zoom-in-up" src={img} className="lg:max-w-lg max-w-xs rounded-lg " />
                    <div className="text-center">
                        <h1 data-aos="fade-down" className="text-5xl font-bold">{eventTitle}</h1>
                        <p data-aos="fade-down" className="py-6">{description}</p>
                        <button data-aos="fade-down" className="btn bg-rose-700 hover:bg-rose-600 text-white">Booking Price {ticketPrice}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCardDetail;