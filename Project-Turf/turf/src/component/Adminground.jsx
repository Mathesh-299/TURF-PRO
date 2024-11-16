import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { selectuser } from "../redux/Slice";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import { editProjects, addProjects, deleteProjects } from "../api/api";

const Adminground = ({ title, desc, cover, id, avai, link, price, fetchprojects }) => {
  const data = useSelector(selectuser);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const availRef = useRef(null);
  const coverRef = useRef(null);
  const priceRef = useRef(null);

  const [visible, setVisible] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const edit = () => {
    setVisible(true);
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    const projectData = {
      title: titleRef.current.value,
      desc: descRef.current.value,
      coverimg: coverRef.current.value,
      available: availRef.current.value,
      price: priceRef.current.value,
    };

    try {
      const response = await editProjects(id, projectData);
      console.log(response);
      fetchprojects && fetchprojects(); // Check if fetchprojects exists before calling
    } catch (error) {
      alert(error);
    }

    setVisible(false);
  };

  const handleAdd = () => {
    setShowAddForm(true);
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    const newProjectData = {
      title: titleRef.current.value,
      desc: descRef.current.value,
      coverimg: coverRef.current.value,
      available: availRef.current.value,
      price: priceRef.current.value,
    };

    try {
      const response = await addProjects(newProjectData);
      console.log(response);
      fetchprojects && fetchprojects(); 
    } catch (error) {
      alert(error);
    }

    setShowAddForm(false);
  };

  const del = async () => {
    try {
      await deleteProjects(id);
      fetchprojects && fetchprojects(); 
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      {title && desc && cover ? (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
          <button 
            onClick={handleAdd} 
            className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-md px-4 py-2 text-center absolute top-24 left-5">
            Add
          </button>

          <div className="w-[80%] px-5 h-full shadow-xl flex flex-col items-center">
            <div className="w-[80%] h-[50%]">
              <img src={cover} alt={title} className="h-[100%] w-[100%] relative" />
            </div>
            <div className="font-bold text-center text-2xl text-black/80 h-[10%] w-full">
              {title}
            </div>
            <div className="text-gray-400 text-center text-sm h-[25%] w-full">
              {desc}
            </div>
            <div className="font-bold text-xl text-black/80 h-[20%] w-full">
              <div className="flex flex-row h-full w-full">
                <div className="flex items-center justify-start px-10 w-[45%] h-[100%]">
                  SEATS: {avai}
                </div>
                <div className="flex flex-col gap-2 items-center justify-start w-[10%] h-[100%]">
                  <button onClick={edit}><FaRegEdit /></button>
                  <button onClick={del}><FaTrash /></button>
                </div>
                <div className="flex items-center justify-start px-10 w-[45%] h-[100%]">
                  PRICE: {price}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-xl text-gray-500 font-semibold">
          <button 
            onClick={handleAdd} 
            className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-md px-4 py-2 text-center absolute top-24 left-5">
            Add
          </button>
        </div>
      )}

      {visible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Edit Project</h2>
            <form onSubmit={handleEdit} className="space-y-4">
              <input type="text" ref={titleRef} defaultValue={title} placeholder="Title" required className="w-full p-2 border rounded" />
              <input type="text" ref={descRef} defaultValue={desc} placeholder="Description" required className="w-full p-2 border rounded" />
              <input type="text" ref={availRef} defaultValue={avai} placeholder="Available Seats" required className="w-full p-2 border rounded" />
              <input type="text" ref={coverRef} defaultValue={cover} placeholder="Cover URL" required className="w-full p-2 border rounded" />
              <input type="text" ref={priceRef} defaultValue={price} placeholder="Price" required className="w-full p-2 border rounded" />
              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">Update Project</button>
              <button type="button" onClick={() => setVisible(false)} className="w-full bg-red-500 text-white p-2 rounded mt-2">Cancel</button>
            </form>
          </div>
        </div>
      )}

      {showAddForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="w-1/3 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Add New Ground</h2>
            <form onSubmit={handleAddSubmit} className="space-y-4">
              <input type="text" ref={titleRef} placeholder="Title" required className="w-full p-2 border rounded" />
              <input type="text" ref={descRef} placeholder="Description" required className="w-full p-2 border rounded" />
              <input type="text" ref={availRef} placeholder="Available Seats" required className="w-full p-2 border rounded" />
              <input type="text" ref={coverRef} placeholder="Cover URL" required className="w-full p-2 border rounded" />
              <input type="text" ref={priceRef} placeholder="Price" required className="w-full p-2 border rounded" />
              <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded mt-4">Add Project</button>
              <button type="button" onClick={() => setShowAddForm(false)} className="w-full bg-red-500 text-white p-2 rounded mt-2">Cancel</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Adminground;
