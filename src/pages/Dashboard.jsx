import DashboardTable from '../components/DashboardTable';

const Dashboard = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
     
      <main className="flex-1 w-full p-4">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        <DashboardTable />
      </main>
    </div>
  );
};

export default Dashboard;
