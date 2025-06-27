import React, { useState, useMemo } from 'react';
import { Search, ArrowUpDown } from 'lucide-react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';

// shadcn/ui Components
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
  PaginationLink,
} from '@/components/ui/pagination';

// Mock Data
const ordersData = [
  { id: 'ORD001', customer: 'Liam Johnson', date: '2023-10-26', status: 'Delivered', total: '$250.00' },
  { id: 'ORD002', customer: 'Olivia Smith', date: '2023-10-25', status: 'Processing', total: '$150.75' },
  { id: 'ORD003', customer: 'Noah Williams', date: '2023-10-24', status: 'Delivered', total: '$350.00' },
  { id: 'ORD004', customer: 'Emma Brown', date: '2023-10-23', status: 'Cancelled', total: '$75.50' },
  { id: 'ORD005', customer: 'Ava Jones', date: '2023-10-22', status: 'Delivered', total: '$450.25' },
  { id: 'ORD006', customer: 'James Miller', date: '2023-10-21', status: 'Processing', total: '$50.00' },
  { id: 'ORD007', customer: 'Sophia Davis', date: '2023-10-20', status: 'Delivered', total: '$120.00' },
  { id: 'ORD008', customer: 'Isabella Garcia', date: '2023-10-19', status: 'Delivered', total: '$99.99' },
  { id: 'ORD009', customer: 'Mason Rodriguez', date: '2023-10-18', status: 'Processing', total: '$210.40' },
  { id: 'ORD010', customer: 'Charlotte Martinez', date: '2023-10-17', status: 'Cancelled', total: '$30.00' },
  { id: 'ORD011', customer: 'Ethan Hernandez', date: '2023-10-16', status: 'Delivered', total: '$180.00' },
  { id: 'ORD012', customer: 'Amelia Lopez', date: '2023-10-15', status: 'Delivered', total: '$600.00' },
];

const ITEMS_PER_PAGE = 8;

const Orders = () => {
  console.log('Orders page loaded');

  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredOrders = useMemo(() => {
    return ordersData.filter(order =>
      Object.values(order).some(value =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const totalPages = Math.ceil(filteredOrders.length / ITEMS_PER_PAGE);

  const paginatedOrders = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredOrders.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredOrders, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getStatusBadgeVariant = (status: string): 'default' | 'secondary' | 'destructive' => {
    switch (status) {
      case 'Delivered':
        return 'default';
      case 'Processing':
        return 'secondary';
      case 'Cancelled':
        return 'destructive';
      default:
        return 'default';
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <LeftSidebar isCollapsed={isSidebarCollapsed} onToggle={() => setSidebarCollapsed(!isSidebarCollapsed)} />
      <div className="flex flex-col flex-1">
        <Header pageTitle="Orders" onToggleSidebar={() => setSidebarCollapsed(!isSidebarCollapsed)} />

        <main className="flex-1 p-4 sm:px-6 sm:py-0">
          <Card className="my-6">
            <CardHeader>
              <CardTitle>All Orders</CardTitle>
              <CardDescription>View and manage all customer orders.</CardDescription>
              <div className="relative mt-2">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search by ID, customer, status..."
                  className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[320px]"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1); // Reset to first page on new search
                  }}
                />
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>
                      <Button variant="ghost" size="sm">
                        Order ID <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead>
                      <Button variant="ghost" size="sm">
                        Customer <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead>
                      <Button variant="ghost" size="sm">
                        Date <ArrowUpDown className="ml-2 h-4 w-4" />
                      </Button>
                    </TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-medium">{order.id}</TableCell>
                      <TableCell>{order.customer}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusBadgeVariant(order.status)}>{order.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">{order.total}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {paginatedOrders.length === 0 && (
                <div className="text-center py-10 text-muted-foreground">
                    No orders found.
                </div>
              )}
            </CardContent>
            <CardFooter>
                <div className="text-xs text-muted-foreground">
                    Showing <strong>{paginatedOrders.length}</strong> of <strong>{filteredOrders.length}</strong> orders.
                </div>
                {totalPages > 1 && (
                    <Pagination className="ml-auto">
                        <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                        </PaginationItem>
                        {[...Array(totalPages)].map((_, i) => (
                            <PaginationItem key={i}>
                                <PaginationLink
                                    onClick={() => handlePageChange(i + 1)}
                                    isActive={currentPage === i + 1}
                                >
                                    {i + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                        </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                )}
            </CardFooter>
          </Card>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default Orders;