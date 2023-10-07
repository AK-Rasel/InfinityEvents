import { useParams } from "react-router-dom";


const ServiceCardDetail = () => {
 const {id} = useParams()
 
 console.log(id)
//  console.log(serviceCard.id)
    return (
        <div>
            <h1>{id}</h1>
        </div>
    );
};

export default ServiceCardDetail;