import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const Update = () => {
    const equipment = useLoaderData();
    const { _id, name, photo, price, rating, description, category, availability, customization, processTime } = equipment;
    const navigate = useNavigate()

    const handleUpdate = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get("name");
        const category = form.get("category");
        const price = parseFloat(form.get("price"));
        const rating = parseFloat(form.get("rating"));
        const customization = form.get("customization");
        const processTime = form.get("processTime");
        const availability = form.get("availability");
        const photo = form.get("photo");
        const description = form.get("description");
        const updatedEquipment = { name, price, category, rating, customization, processTime, availability, photo, description }

        fetch(`http://localhost:5000/equipments/${_id}` ,{
            method : "PUT" ,
            headers : {
                "content-type" : "application/json"
            } ,
            body : JSON.stringify(updatedEquipment)
        }) 
        .then(res => res.json())
        .then(data => {
            console.log(data);
          if(data.modifiedCount > 0){
            Swal.fire({
                title: 'Success!',
                text: 'Product Updated Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
          }
          navigate("/")
        })
    }
    return (
        <div className="mt-5 flex flex-col justify-center items-center w-10/12 mx-auto ">
            <h2 className="text-3xl text-cyan-800 font-semibold text-center mb-12">Update Product</h2>
            <form onSubmit={handleUpdate} className="w-11/12">
                <div className="md:flex space-y-4 md:space-y-0 gap-4 mb-6">
                    <label className="mb:4 input border-cyan-800/80  flex items-center gap-2 md:w-1/2">
                        <p className = "text-cyan-800 font-semibold">Name : </p>
                        <input type="text" className="grow" defaultValue={name} placeholder={`Item Name`} name="name" />
                    </label>
                    <label className=" input border-cyan-800/80  flex items-center gap-2 md:w-1/2">
                         <p className = "text-cyan-800 font-semibold">Category : </p>
                        <input type="text" className="grow" defaultValue={category} placeholder={`Category Name`} name="category" />
                    </label>
                </div>
                <div className="md:flex space-y-4 md:space-y-0 gap-4 mb-6">
                    <label className="input border-cyan-800/80  flex items-center gap-2  md:w-1/2">
                        <p className = "text-cyan-800 font-semibold">Price : </p>
                        <input type="text" className="grow" defaultValue={price} placeholder={`Price`} name="price" />
                    </label>
                    <label className="input border-cyan-800/80  flex items-center gap-2  md:w-1/2">
                        <p className = "text-cyan-800 font-semibold">Rating : </p>
                        <input type="text" className="grow" defaultValue={rating} placeholder={`Rating`} name="rating" />
                    </label>
                </div>
                <div className="md:flex space-y-4 md:space-y-0 gap-4 mb-6">
                    <label className="input border-cyan-800/80  flex items-center gap-2  md:w-1/2">
                        <p className = "text-cyan-800 font-semibold">Customization : </p>
                        <input type="text" className="grow" defaultValue={customization} placeholder={`Customization:`} name="customization" />
                    </label>
                    <label className="input border-cyan-800/80 flex items-center gap-2  md:w-1/2">
                        <p className = "text-cyan-800 font-semibold">Process Time : </p>
                        <input type="text" className="grow" defaultValue={processTime} placeholder={`Process Time`} name="processTime" />
                    </label>
                </div>
                <div className="md:flex space-y-4 md:space-y-0 gap-4 mb-6">
                    <label className="input border-cyan-800/80 flex items-center gap-2  md:w-1/2">
                        <p className = "text-cyan-800 font-semibold">Stock Status : </p>
                        <input type="text" className="grow " defaultValue={availability} placeholder={`Stock Status`} name="availability" />
                    </label>
                    <label className="input border-cyan-800/80  flex items-center gap-2  md:w-1/2">
                        <p className = "text-cyan-800 font-semibold">Photo URL : </p>
                        <input type="text" className="grow" defaultValue={photo} placeholder={`Photo URL`} name="photo" />
                    </label>
                </div>
                <div className="my-6">
                    <p className = "text-cyan-800 font-semibold">Description :</p>
                    <textarea className="textarea resize-none w-full h-32 border-cyan-800/80" defaultValue={description} placeholder={`Description`} name="description"></textarea>
                </div>
                <button className="btn btn-block bg-cyan-800/80 hover:bg-cyan-800 text-base-100">Update Equipment</button>
            </form>
        </div>
    );
};

export default Update;