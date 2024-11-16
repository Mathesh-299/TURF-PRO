import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectuser } from '../redux/Slice';
import { getProjects } from '../api/api';

const Contact = () => {
  const data = useSelector(selectuser);
  const [data1, setData1] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProjects();
        setData1(response.data1);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='w-screen h-screen pt-44'>{data1 || 'hi '}</div>
    </>
  );
}

export default Contact;
