import React, { useState } from 'react';
import { PlusCircle, File, ListFilter } from 'lucide-react';

import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
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
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const products = [
  {
    id: 'prod_001',
    name: 'Wireless Noise-Cancelling Headphones',
    sku: 'SKU-HDPHN-WNC-BLK',
    status: 'In Stock',
    price: 299.99,
    totalSales: 150,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'prod_002',
    name: 'Smart Fitness Tracker Watch',
    sku: 'SKU-WTCH-FTN-GRN',
    status: 'In Stock',
    price: 149.50,
    totalSales: 320,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'prod_003',
    name: 'Ergonomic Mechanical Keyboard',
    sku: 'SKU-KBRD-MCH-RGB',
    status: 'Low Stock',
    price: 180.00,
    totalSales: 85,
    image: 'https://images.unsplash.com/photo-1595935441492-124939a06a21?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'prod_004',
    name: '4K Ultra-HD Webcam',
    sku: 'SKU-WCAM-4K-UHD',
    status: 'Out of Stock',
    price: 99.99,
    totalSales: 210,
    image: 'https://images.unsplash.com/photo-1517053046Nzc5-a7b2d5a3b2b3?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'prod_005',
    name: 'Portable Power Bank 20000mAh',
    sku: 'SKU-PWRB-20K-SLV',
    status: 'In Stock',
    price: 49.99,
    totalSales: 500,
    image: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?q=80&w=600&auto=format&fit=crop',
  },
];

const Products = () => {
  console.log('Products page loaded');
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };
  
  const getBadgeVariant = (status: string): 'default' | 'secondary' | 'destructive' => {
    switch (status) {
      case 'In Stock':
        return 'default';
      case 'Low Stock':
        return 'secondary';
      case 'Out of Stock':
        return 'destructive';
      default:
        return 'default';
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <LeftSidebar isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} />
      <div className="flex flex-1 flex-col">
        <Header pageTitle="Products" onToggleSidebar={toggleSidebar} />
        <main className="flex-1 p-4 sm:p-6 flex flex-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Products</CardTitle>
              <CardDescription>
                Manage your products and view their sales performance.
              </CardDescription>
              <div className="flex items-center gap-2 pt-4">
                <Input placeholder="Search products..." className="max-w-sm" />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className="h-10 gap-1">
                      <ListFilter className="h-3.5 w-3.5" />
                      <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Filter
                      </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by status</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuCheckboxItem checked>
                      In Stock
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>Low Stock</DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem>
                      Out of Stock
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Button size="sm" variant="outline" className="h-10 gap-1">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Export
                  </span>
                </Button>
                <Button size="sm" className="h-10 gap-1 ml-auto">
                  <PlusCircle className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    Add Product
                  </span>
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">
                      <span className="sr-only">Image</span>
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden md:table-cell">Price</TableHead>
                    <TableHead className="hidden md:table-cell">Total Sales</TableHead>
                    <TableHead className="hidden md:table-cell">SKU</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="hidden sm:table-cell">
                        <img
                          alt="Product image"
                          className="aspect-square rounded-md object-cover"
                          height="64"
                          src={product.image}
                          width="64"
                        />
                      </TableCell>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>
                        <Badge variant={getBadgeVariant(product.status)}>
                          {product.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">${product.price.toFixed(2)}</TableCell>
                      <TableCell className="hidden md:table-cell">{product.totalSales}</TableCell>
                      <TableCell className="hidden md:table-cell">{product.sku}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Showing <strong>1-5</strong> of <strong>{products.length}</strong> products
              </div>
              <Pagination className="ml-auto">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
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

export default Products;