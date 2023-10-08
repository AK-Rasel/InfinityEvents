import { useEffect, useState } from "react";



const UserReviews = () => {
    const [userReviews, setUserReviews] = useState([])
    useEffect(() => {
        fetch("/eventData.json")
            .then(res => res.json())
            .then(reviewsData => setUserReviews(reviewsData))
    }, [])
    return (

        <div className="max-w-6xl mx-auto">
            <div  data-aos="fade-up" className=" text-center text-4xl font-bold uppercase mb-9">
                <h2>User <span className="text-rose-700">Review</span></h2>
            </div>

            <div className="flex flex-wrap gap-6 justify-center">
                {
                    userReviews?.slice(0, 5).map(userReview => (
                        <div key={userReview.id}>
                            <div data-aos="fade-up" className=" w-80 h-56  rounded-xl bg-rose-500 text-white shadow-xl ">

                                <div className="card-body">
                                    <div className="flex gap-4">
                                        <div className="avatar ">
                                            <div className="w-12 h-12 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
                                                <img src={userReview.userImg} />
                                            </div>

                                        </div>
                                        <div>
                                            <h2 className="card-title">{userReview.userName}</h2>
                                            <div className="rating">
                                        <span className="mr-1">{userReview.rating}</span>
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 " checked />

                                    </div>
                                        </div>
                                    </div>
                                    
                                    <p className="mt-4">{userReview.comment}</p>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>

        </div>

    );
};

export default UserReviews;