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
                <div className="hero-content  flex-row-reverse">
                    <img src={img} className="max-w-lg rounded-lg " />
                    <div>
                        <h1 className="text-5xl font-bold">{eventTitle}</h1>
                        <p className="py-6">{description}</p>
                        <button className="btn bg-rose-700 text-white">Ticket Price {ticketPrice}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCardDetail;