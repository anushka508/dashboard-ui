import { useState, useEffect } from 'react';
import LoadingSkeleton from './LoadingSkeleton';
import dummyData from '../data/dummtData';

const DashboardTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(dummyData);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingSkeleton />;

  return (
    <div className="w-full px-4 py-6 overflow-x-auto">
      <div className="min-w-[640px] w-full bg-white rounded-2xl shadow-md overflow-hidden">
        <table className="w-full text-sm sm:text-base table-auto">
          <thead className="bg-gray-100 text-gray-700 uppercase tracking-wider text-xs sm:text-sm font-medium">
            <tr>
              <th className="text-left py-3 px-4">ID</th>
              <th className="text-left py-3 px-4">Name</th>
              <th className="text-left py-3 px-4">Email</th>
              <th className="text-left py-3 px-4">Role</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {data.map((user, index) => (
              <tr
                key={user.id}
                className={`transition-colors duration-200 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } hover:bg-gray-100`}
              >
                <td className="py-3 px-4 font-medium">{user.id}</td>
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="py-3 px-4 capitalize">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardTable;
