import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";


const UserReviews = () => {
    const [userReviews, setUserReviews] = useState([])
    useEffect(() => {
        fetch("/eventData.json")
            .then(res => res.json())
            .then(reviewsData => setUserReviews(reviewsData))
    }, [])
    return (

        <div>
            <div className="text-center text-4xl font-bold uppercase">
                <h2>Our Services</h2>
            </div>
            <Marquee speed={50} className="space-x-5">
            <div className="grid grid-cols-5 space-x-1 gap-5">
                {
                    userReviews?.slice(0, 5).map(userReview => (
                        <div key={userReview.id}>
                            <div className=" rounded-xl bg-base-100 shadow-xl my-12">

                                <div className="card-body">
                                    <div className="flex gap-4">
                                        <div className="avatar ">
                                            <div className="w-12 h-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={userReview.userImg} />
                                            </div>

                                        </div>
                                        <div>
                                            <h2 className="card-title">{userReview.userName}</h2>
                                            <div className="rating">
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                            </div>
                                        </div>
                                    </div>

                                    <p>{userReview.comment}</p>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </Marquee>
        </div>

    );
};

export default UserReviews;