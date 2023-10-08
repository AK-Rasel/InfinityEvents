import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const PopularEvent = () => {
    const [pupolerEventCards, setPupolerEventCards] = useState([])
    useEffect(() => {
        fetch("/eventData.json")
            .then(res => res.json())
            .then(data => setPupolerEventCards(data))
    }, [])
    return (
        <div>
            <div>
                <div className="text-center text-4xl font-bold uppercase my-9">
                    <h2>Popular <span className="text-rose-700"> Event</span></h2>
                </div>
            </div>
            <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4">
                {
                    pupolerEventCards?.slice(0, 3).map(pupolerEventCard => (

                        <Link to={`/serviceCard/${pupolerEventCard.id}`} key={pupolerEventCard.id} className="card  bg-rose-700 text-white shadow-xl ">
                            <figure><img className="w-full h-64 " src={pupolerEventCard.service_img} alt="Shoes" /></figure>
                            <div className="card-body p-3">
                                <h2 className=" text-center">{pupolerEventCard.serviceName}</h2>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default PopularEvent;