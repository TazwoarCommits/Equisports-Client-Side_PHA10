import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../Providers/AuthProvider';

const AddEquipment = () => {
    const {user} = useContext(AuthContext) ;
    const handleSubmit = e => {
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
        const equipment = {
            name,
            price,
            category,
            rating,
            customization,
            processTime,
            availability,
            photo,
            description,
            author : {
                userMail : user.email,
                userName : user.displayName
            }
        }
         
        console.log(equipment);
        fetch("https://equisports-server-side.vercel.app/equipments" ,{
            method : "POST" ,
            headers : {
                "content-type" : "application/json"
            } ,
            body : JSON.stringify(equipment)
        }) 
        .then(res => res.json())
        .then(data => {
            console.log(data);
          if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Product Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
          }
        })

        e.target.reset();
    }

    return (
        <div className="mt-5 flex flex-col justify-center items-center w-10/12 mx-auto ">
            <h2 className="text-3xl text-cyan-800 font-semibold text-center mb-12">Add new Equipment</h2>
            <h4 className='my-8 text-xl md:text-2xl'><span className='text-cyan-900/80 font-medium'>User :</span> {user? user.displayName : user.email}</h4>
            <form onSubmit={handleSubmit} className="w-11/12">
                <div className="md:flex space-y-4 md:space-y-0 gap-4 mb-6">
                    <label className="mb:4 input border-cyan-800/80  flex items-center gap-2 md:w-1/2">
                        <input type="text" className="grow" placeholder="Item Name" name="name" />
                    </label>
                    <label className=" input border-cyan-800/80  flex items-center gap-2 md:w-1/2">
                        <input type="text" className="grow" placeholder="Category Name" name="category" />
                    </label>
                </div>
                <div className="md:flex space-y-4 md:space-y-0 gap-4 mb-6">
                    <label className="input border-cyan-800/80  flex items-center gap-2  md:w-1/2">
                        <input type="text" className="grow" placeholder="Price" name="price" />
                    </label>
                    <label className="input border-cyan-800/80  flex items-center gap-2  md:w-1/2">
                        <input type="text" className="grow" placeholder="Rating" name="rating" />
                    </label>
                </div>
                <div className="md:flex space-y-4 md:space-y-0 gap-4 mb-6">
                    <label className="input border-cyan-800/80  flex items-center gap-2  md:w-1/2">
                        <input type="text" className="grow" placeholder="Customization" name="customization" />
                    </label>
                    <label className="input border-cyan-800/80 flex items-center gap-2  md:w-1/2">
                        <input type="text" className="grow" placeholder="Process Time" name="processTime" />
                    </label>
                </div>
                <div className="md:flex space-y-4 md:space-y-0 gap-4 mb-6">
                    <label className="input border-cyan-800/80 flex items-center gap-2  md:w-1/2">
                        <input type="text" className="grow " placeholder="Stock Status" name="availability" />
                    </label>
                    <label className="input border-cyan-800/80  flex items-center gap-2  md:w-1/2">
                        <input type="text" className="grow" placeholder="Photo URL" name="photo" />
                    </label>
                </div>
                <div className="mb-6">
                    <textarea className="textarea resize-none w-full h-32 border-cyan-800/80" placeholder="Description" name="description"></textarea>
                </div>
                <button className="btn btn-block bg-cyan-800/80 hover:bg-cyan-800 text-base-100">Add Equipment</button>
            </form>
        </div>
    );
};

export default AddEquipment;