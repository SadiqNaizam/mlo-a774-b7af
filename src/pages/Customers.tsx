import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

// Mock data for customers
const customers = [
  {
    id: 'CUST001',
    name: 'Liam Johnson',
    email: 'liam@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?u=liamjohnson',
    orders: 15,
    lifetimeValue: 1450.50,
  },
  {
    id: 'CUST002',
    name: 'Olivia Smith',
    email: 'olivia@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?u=oliviasmith',
    orders: 8,
    lifetimeValue: 780.00,
  },
  {
    id: 'CUST003',
    name: 'Noah Williams',
    email: 'noah@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?u=noahwilliams',
    orders: 22,
    lifetimeValue: 2150.75,
  },
  {
    id: 'CUST004',
    name: 'Emma Brown',
    email: 'emma@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?u=emmabrown',
    orders: 4,
    lifetimeValue: 320.00,
  },
  {
    id: 'CUST005',
    name: 'James Jones',
    email: 'james@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?u=jamesjones',
    orders: 31,
    lifetimeValue: 3500.25,
  },
  {
    id: 'CUST006',
    name: 'Ava Garcia',
    email: 'ava@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?u=avagarcia',
    orders: 1,
    lifetimeValue: 99.99,
  },
];

const Customers = () => {
  console.log('Customers page loaded');
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(prevState => !prevState);
  };

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <LeftSidebar isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} />
      <div className={`flex flex-col flex-1 ${isSidebarCollapsed ? 'md:pl-20' : 'md:pl-64'} transition-all duration-300`}>
        <Header pageTitle="Customers" onToggleSidebar={toggleSidebar} />
        <main className="flex-1 p-4 sm:px-6 sm:py-0 md:gap-8 flex flex-col">
          <Card className="flex-1 flex flex-col">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle>Customers</CardTitle>
                    <CardDescription>
                      Manage your customers and view their purchase history.
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1 md:grow-0">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search customers..."
                        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[300px]"
                      />
                    </div>
                    <Button>Add Customer</Button>
                  </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden sm:table-cell">Email</TableHead>
                    <TableHead className="hidden md:table-cell text-center">Orders</TableHead>
                    <TableHead className="text-right">Lifetime Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarImage src={customer.avatarUrl} alt={customer.name} />
                            <AvatarFallback>{customer.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="font-medium">{customer.name}</div>
                        </div>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">{customer.email}</TableCell>
                      <TableCell className="hidden md:table-cell text-center">{customer.orders}</TableCell>
                      <TableCell className="text-right">
                        {customer.lifetimeValue.toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        })}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </CardFooter>
          </Card>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Customers;