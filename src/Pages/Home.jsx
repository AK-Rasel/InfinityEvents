
import Banner from "../Components/Header/Banner/Banner";
import PopularEvent from "../Components/PopularEvent/PopularEvent";
import AllServises from "../Components/Services/AllEvents/AllServises";
import UserReviews from "../Components/UserReviews/UserReviews";



const Home = () => {
    return (
        <div>
            <Banner/>
            <div >
                <AllServises/>
            </div>
            <UserReviews/>
            <div className="max-w-6xl mx-auto">
                <PopularEvent/>
            </div>
            
        </div>
    );
};

export default Home;