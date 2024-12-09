import { Link, useLoaderData } from "react-router-dom";
import HomeCard from "../components/HomeCard/HomeCard";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Banner from "../components/Banner/Banner";
import Swal from "sweetalert2";
import b1 from "../assets/b1.jpg"
import b2 from "../assets/b2.jpg"
import promises from "../assets/promises.jpg"

const Home = () => {
    const { loading } = useContext(AuthContext)
    const loadedEquipments = useLoaderData();
    const [equipments, setEquipments] = useState(loadedEquipments);
    const homEquipments = equipments.slice(0, 9);
    const uniqueCategories = [...new Set(equipments.map(equipment => equipment.category))];

    const handleCategory = () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Under Maintenance",
        });
    }

    if (loading) {
        return (

            <div className="flex justify-center items-center my-16">
                <span className="loading loading-bars loading-lg"></span>
                <span className="loading loading-bars loading-lg"></span>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        );


    }
    return (
        <div>
            <Banner></Banner>
            <div className="mt-12 md:mt24 text-center space-y-4 ">
                <h2 className="text-3xl md:text-4xl text-cyan-800 font-bold">Equisports</h2>
                <p className="text-cyan-800/80">A reliable partner for your best Sports Equipments that you are looking for . Try it now !!!</p>
            </div>
            <section>
                <div className="w-10/12 mx-auto my-12">
                    <h3 className="text-3xl font-semibold text-cyan-800"> Our Products </h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-items-center space-y-4 gap-4 w-11/12 md:w-10/12 mx-auto">
                    {
                        homEquipments.map(equipment => <HomeCard key={equipment._id}
                            equipment={equipment}
                            equipments={equipments}
                            setEquipments={setEquipments}
                        ></HomeCard>)
                    }
                </div>
                <div className="w-10/12 mx-auto mt-8">
                    <Link to="/equipments"><button className="btn bg-cyan-800 hover:bg-cyan-900 text-base-100">Show All</button></Link>
                </div>
            </section>
            <section className="w-10/12 mx-auto my-24">
                <h3 className="text-3xl font-semibold text-cyan-800 text-center underline">Categories</h3>
                <div className="grid grid-cols-1 md:flex md:justify-between mt-16 w-11/12 mx-auto">
                    {
                        uniqueCategories.map((cat, idx) => <button
                            onClick={handleCategory}
                            className="btn bg-cyan-800/80 hover:bg-cyan-900/80 text-base-100"
                            key={idx}
                        >
                            {cat}
                        </button>)
                    }
                </div>
                <hr className="mt-12 border-2 border-cyan-800/80" />
            </section>
            <section className="mt-8 md:my-24 w-full md:w-10/12 mx-auto">
                <div className=" h-[380px] bg-black md:rounded-2xl">
                    <img className="w-full h-full opacity-50 md:rounded-2xl" src={b1} alt="" />
                </div>
                <h3 className="my-12 text-3xl font-semibold text-cyan-800 text-center">Your Trusted Sports Partner</h3>
                <div className="my-8 flex flex-col-reverse lg:flex-row justify-between items-center gap-6">
                    <div className="p-4">
                        <h3 className="text-xl text-cyan-800/80 mb-6">Why Choose Us for Sports Equipment?</h3>
                        <ul className="space-y-2 list-disc list-inside">
                            <li className=""><span className="text-lg text-cyan-800/80 font-semibold">Premium Quality Guaranteed: </span>We offer only the best, high-performance sports equipment crafted with precision and durability to meet professional standards.</li>
                            <li className=""><span className="text-lg text-cyan-800/80 font-semibold">Wide Variety: </span>From beginners to professionals, we cater to all skill levels with a diverse range of gear for every sport</li>
                            <li className=""><span className="text-lg text-cyan-800/80 font-semibold">Affordable Pricing: </span>Get top-quality equipment without breaking the bank. We believe in delivering value for every budget.</li>
                            <li className=""><span className="text-lg text-cyan-800/80 font-semibold">Expert Recommendations: </span>Our team of experts is ready to guide you to find the perfect gear tailored to your needs.</li>
                            <li className=""><span className="text-lg text-cyan-800/80 font-semibold">Trusted Brands: </span>We stock equipment from globally renowned brands, ensuring authenticity and reliability.</li>
                            <li className=""><span className="text-lg text-cyan-800/80 font-semibold">Exceptional Customer Support: </span>Your satisfaction is our priority, and we&apos;re here to assist you every step of the way</li>
                            <li className=""><span className="text-lg text-cyan-800/80 font-semibold">Innovative Products: </span>Stay ahead in your game with the latest, cutting-edge sports equipment designed for peak performance.</li>
                        </ul>
                    </div>
                    <img className="rounded-2xl w-[480px]" src={b2} alt="" />
                </div>
            </section>
            <section className="mt-8 md:my-24 w-full md:w-10/12 mx-auto">
                <h3 className="my-12 text-3xl font-semibold text-cyan-800 text-center">Our Promises</h3>
                <div className="flex flex-col lg:flex-row justify-between gap-12">
                    <img className="md:rounded-2xl lg:w-96" src={promises} />
                    <div>
                    <h3 className="ml-4 text-xl text-cyan-800/80 mb-6">No Matter what circumstances We will make sure to keep our promises to you</h3>
                        <ul className="space-y-2 list-disc list-inside ml-4">
                            <li><span className="text-lg text-cyan-800/80 font-semibold">Premium Quality :</span> Experience the best in sports equipment, crafted to ensure top-notch performance and durability for athletes of all levels.</li>
                            <li><span className="text-lg text-cyan-800/80 font-semibold" >Customization :</span> Get your fully desired customization on our products that offers.</li>
                            <li><span className="text-lg text-cyan-800/80 font-semibold" >Fast Delivery :</span> Get high-quality gear at prices that won&apos;t break the bank. We&apos;re committed to delivering exceptional value for every budget.</li>
                            <li><span className="text-lg text-cyan-800/80 font-semibold" >Affordable Pricing :</span> Enjoy quick and reliable shipping, so you can start playing with your new equipment as soon as possible.</li>
                            <li><span className="text-lg text-cyan-800/80 font-semibold" >24/7 Customer Support :</span> Our dedicated team is here around the clock to assist you with any questions or issues, ensuring a smooth and hassle-free experience.</li>
                        </ul>
                    </div>
                </div>
            </section>
            <h3 className="my-12 text-3xl font-semibold text-cyan-800 text-center underline">Thanks for Visiting Us</h3>
        </div>
    );
};

export default Home;