import React, { useEffect, useState } from "react";

const Groundpage = ({ role }) => {
    const [grounds, setGrounds] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({});
    const [newGround, setNewGround] = useState({
        name: "",
        price: "",
        location: "",
        contact: "",
        image: "",
    });

    useEffect(() => {
        // Ensure the backend is running and the URL is correct
        fetch("http://localhost:8000/api/grounds")
            .then((res) => res.json())
            .then((data) => setGrounds(data))
            .catch((err) => console.error("Error fetching grounds:", err));
    }, []);

    // Handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (isEditing) {
            setEditData({ ...editData, [name]: value });
        } else {
            setNewGround({ ...newGround, [name]: value });
        }
    };

    // Handle add or edit submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const url = isEditing ? `http://localhost:8000/api/grounds/${editData._id}` : "http://localhost:8000/api/grounds";
        const method = isEditing ? "PUT" : "POST";
        const body = JSON.stringify(isEditing ? editData : newGround);

        fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body,
        })
            .then((res) => res.json())
            .then((data) => {
                if (isEditing) {
                    setGrounds((prev) =>
                        prev.map((g) => (g._id === data._id ? data : g))
                    );
                } else {
                    setGrounds((prev) => [...prev, data]);
                }
                setIsEditing(false);
                setEditData({});
                setNewGround({ name: "", price: "", location: "", contact: "", image: "" });
            })
            .catch((err) => console.error("Error submitting form:", err));
    };

    // Handle delete
    const handleDelete = (id) => {
        fetch(`http://localhost:8000/api/grounds/${id}`, { method: "DELETE" })
            .then(() => setGrounds((prev) => prev.filter((g) => g._id !== id)))
            .catch((err) => console.error("Error deleting ground:", err));
    };

    return (
        <div className="p-6">
            {/* Static content for adding a new ground */}
            <div className="mb-6">
                <h1 className="text-2xl font-bold mb-2">Add a New Ground</h1>
                <p className="text-lg">Fill in the details below to add a new ground to the system. Make sure all fields are accurate, especially the price and location, as they will be displayed for users to see.</p>
            </div>

            {role === "admin" && (
                <form onSubmit={handleSubmit} className="mb-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="Ground Name"
                        value={isEditing ? editData.name : newGround.name}
                        onChange={handleInputChange}
                        className="border p-2 mb-2 w-full"
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={isEditing ? editData.price : newGround.price}
                        onChange={handleInputChange}
                        className="border p-2 mb-2 w-full"
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Location"
                        value={isEditing ? editData.location : newGround.location}
                        onChange={handleInputChange}
                        className="border p-2 mb-2 w-full"
                    />
                    <input
                        type="text"
                        name="contact"
                        placeholder="Contact"
                        value={isEditing ? editData.contact : newGround.contact}
                        onChange={handleInputChange}
                        className="border p-2 mb-2 w-full"
                    />
                    <input
                        type="text"
                        name="image"
                        placeholder="Image URL"
                        value={isEditing ? editData.image : newGround.image}
                        onChange={handleInputChange}
                        className="border p-2 mb-4 w-full"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        {isEditing ? "Update Ground" : "Add Ground"}
                    </button>
                </form>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {grounds.map((ground, index) => (
                    <div key={ground._id} className="border p-4 rounded shadow">
                        <img
                            src={ground.image}
                            alt={ground.name}
                            className="w-full h-40 object-cover rounded mb-2"
                        />
                        <h2 className="text-lg font-bold">{ground.name}</h2>
                        <p>Price: ₹{ground.price}</p>
                        <p>Location: {ground.location}</p>
                        <p>Contact: {ground.contact}</p>
                        {role === "admin" && (
                            <div className="mt-4 flex space-x-2">
                                <button
                                    onClick={() => {
                                        setIsEditing(true);
                                        setEditData(ground);
                                    }}
                                    className="bg-yellow-500 text-white px-4 py-2 rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(ground._id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Groundpage;
