import { useLoaderData } from "react-router-dom";

const Details = () => {
    const equipment = useLoaderData() ;
    console.log(equipment);
    return (
        <div>
            
        </div>
    );
};

export default Details;