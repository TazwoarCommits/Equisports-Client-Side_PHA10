

const Update = () => {
    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <div className="mt-5 flex flex-col justify-center items-center w-10/12 mx-auto ">
            <h2 className="text-3xl mb-12">Update Product</h2>
            <form onSubmit={handleSubmit} className="w-11/12">
                <div className="md:flex space-y-4 md:space-y-0 gap-4 mb-6">
                    <label className="mb:4 input input-bordered flex items-center gap-2 md:w-1/2">
                        <input type="text" className="grow" placeholder="Item Name" name="name" />
                    </label>
                    <label className=" input input-bordered flex items-center gap-2 md:w-1/2">
                        <input type="text" className="grow" placeholder="Category Name" name="category" />
                    </label>
                </div>
                <div className="md:flex space-y-4 md:space-y-0 gap-4 mb-6">
                    <label className="input input-bordered flex items-center gap-2  md:w-1/2">
                        <input type="text" className="grow" placeholder="Price" name="price" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2  md:w-1/2">
                        <input type="text" className="grow" placeholder="Rating" name="rating" />
                    </label>
                </div>
                <div className="md:flex space-y-4 md:space-y-0 gap-4 mb-6">
                    <label className="input input-bordered flex items-center gap-2  md:w-1/2">
                        <input type="text" className="grow" placeholder="Customization" name="customization" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2  md:w-1/2">
                        <input type="text" className="grow" placeholder="Process Time" name="processTime" />
                    </label>
                </div>
                <div className="md:flex space-y-4 md:space-y-0 gap-4 mb-6">
                    <label className="input input-bordered border-sky-400 flex items-center gap-2  md:w-1/2">
                        <input type="text" className="grow border-sky-400" placeholder="Stock Status" name="availability" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2  md:w-1/2">
                        <input type="text" className="grow" placeholder="Photo URL" name="photo" />
                    </label>
                </div>
                <div className="mb-6">
                    <textarea className="textarea resize-none w-10/12 h-32 " placeholder="Description" name="description"></textarea>
                </div>
                <button className="btn btn-block bg-sky-300 hover:bg-sky-500">Add Equipment</button>
            </form>
        </div>
    );
};

export default Update;