import { useEffect, useState } from "react";
import { getProjects } from "../api/api";
import ProjectCard from "../component/booking";
import { selectuser } from "../redux/Slice";
import { useSelector } from "react-redux";
import Adminground from "../component/Adminground";

const Projects = () => {
  const data = useSelector(selectuser);
  const [projectData, setProjectData] = useState([]);
  
  const fetchProjects = async () => {
    try {
      const response = await getProjects();
      if (Array.isArray(response.data)) {
        setProjectData(response.data);
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="h-screen w-screen pt-24">
      <div className="bg-white w-full h-full flex flex-row flex-wrap gap-4 justify-center items-start p-4">
        {projectData && projectData.length > 0 ? (
          data !== "logged"
            ? projectData.map((project) => (
                <ProjectCard
                  title={project.title}
                  desc={project.desc}
                  key={project._id}
                  cover={project.coverimg}
                  id={project._id}
                  avai={project.available}
                  price={project.price}
                  className="w-80 h-96 shadow-lg rounded-md"
                />
              ))
            : projectData.map((project) => (
                <Adminground
                  title={project.title}
                  desc={project.desc}
                  key={project._id}
                  cover={project.coverimg}
                  id={project._id}
                  avai={project.available}
                  price={project.price}
                  fetchprojects={fetchProjects}
                  className="w-80 h-96 shadow-lg rounded-md"
                />
              ))
        ) : (
          data !=='logged'
          ?
          <div className="text-xl text-gray-500 font-semibold">
            No Data Available
          </div>
          :
          <Adminground/>
        )}
      </div>
    </div>
  );
};

export default Projects;
