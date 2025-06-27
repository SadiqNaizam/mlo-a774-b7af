import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Define the type for a single product entry
interface Product {
  id: string;
  name: string;
  imageUrl: string;
  sales: number;
}

// Mock data for demonstration purposes
const mockTopProducts: Product[] = [
  {
    id: 'prod-001',
    name: "Acoustic Pro Guitar",
    imageUrl: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?w=300&h=300&fit=crop",
    sales: 1890,
  },
  {
    id: 'prod-002',
    name: "Ergonomic Office Chair",
    imageUrl: "https://images.unsplash.com/photo-1580480055273-228ff5382285?w=300&h=300&fit=crop",
    sales: 1520,
  },
  {
    id: 'prod-003',
    name: "Wireless Noise-Cancelling Headphones",
    imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    sales: 1345,
  },
  {
    id: 'prod-004',
    name: "Smart Fitness Tracker",
    imageUrl: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=300&h=300&fit=crop",
    sales: 1102,
  },
  {
    id: 'prod-005',
    name: "Classic Leather Wallet",
    imageUrl: "https://images.unsplash.com/photo-1613482142200-346578b6df66?w=300&h=300&fit=crop",
    sales: 987,
  },
];

interface TopProductsListProps {
  // In a real app, you'd likely pass the products as a prop
  // products?: Product[];
}

const TopProductsList: React.FC<TopProductsListProps> = (/* { products = mockTopProducts } */) => {
  // Using mock data directly for this example
  const products = mockTopProducts;
  console.log('TopProductsList loaded');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Selling Products</CardTitle>
        <CardDescription>
          Your best-performing products this month.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {products.map((product) => (
            <div key={product.id} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src={product.imageUrl} alt={product.name} />
                <AvatarFallback>{product.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{product.name}</p>
              </div>
              <div className="ml-auto font-medium">
                +{new Intl.NumberFormat().format(product.sales)}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TopProductsList;