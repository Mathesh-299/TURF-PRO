import axios from 'axios';
import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [userCount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchUserCount = async () => {
      try {
        const response = await axios.get('/api/admin/dashboard');
        setUserCount(response.data.userCount);
      } catch (error) {
        console.error('Error fetching user count', error);
      }
    };
    fetchUserCount();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p>Total Users: {userCount}</p>
    </div>
  );
};

export default AdminDashboard;
