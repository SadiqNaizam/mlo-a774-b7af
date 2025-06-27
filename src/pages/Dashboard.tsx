import React, { useState } from 'react';
import {
  DollarSign,
  Users,
  CreditCard,
  Activity,
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

// Custom Layout Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';

// Custom Page-Specific Components
import KpiCard from '@/components/KpiCard';
import DateRangePicker from '@/components/DateRangePicker';
import RecentActivityFeed from '@/components/RecentActivityFeed';
import TopProductsList from '@/components/TopProductsList';

// Shadcn UI Components
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

// Mock data for the main sales chart
const salesData = [
  { name: 'Jan', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Feb', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Mar', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Apr', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'May', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Jun', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Jul', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Aug', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Sep', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Oct', total: Math.floor(Math.random() * 5000) + 1000 },
  { name: 'Nov', total: 4500 },
  { name: 'Dec', total: 6800 },
];

const Dashboard = () => {
  console.log('Dashboard loaded');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr]">
      <LeftSidebar isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} />
      <div className="flex flex-col">
        <Header pageTitle="Dashboard" onToggleSidebar={toggleSidebar} />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 bg-muted/40">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold">Welcome Back!</h1>
            <DateRangePicker />
          </div>

          {/* KPI Cards */}
          <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <KpiCard
              title="Total Revenue"
              value="$45,231.89"
              percentageChange={12.5}
              icon={DollarSign}
              description="from last month"
            />
            <KpiCard
              title="New Customers"
              value="+1,250"
              percentageChange={8.2}
              icon={Users}
              description="from last month"
            />
            <KpiCard
              title="Sales"
              value="+12,234"
              percentageChange={-2.1}
              icon={CreditCard}
              description="from last month"
            />
            <KpiCard
              title="Active Now"
              value="573"
              percentageChange={15}
              icon={Activity}
              description="currently on site"
            />
          </div>

          {/* Main Content Grid */}
          <div className="grid gap-4 md:gap-8 lg:grid-cols-5">
            {/* Chart Section */}
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Sales Overview</CardTitle>
                <CardDescription>
                  An overview of sales performance over the year.
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-2 h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={salesData}>
                    <XAxis
                      dataKey="name"
                      stroke="#888888"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="#888888"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      tickFormatter={(value) => `$${value}`}
                    />
                    <Tooltip
                      cursor={{ fill: 'rgba(128, 128, 128, 0.1)' }}
                      contentStyle={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        border: '1px solid #ccc',
                        borderRadius: '0.5rem'
                      }}
                    />
                    <Legend iconType="circle" />
                    <Bar dataKey="total" fill="#2563eb" name="Total Sales" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Side Cards Section */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <TopProductsList />
            </div>
          </div>
          
          <RecentActivityFeed />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;