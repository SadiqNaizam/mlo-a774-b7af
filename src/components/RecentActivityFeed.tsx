import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShoppingCart, UserPlus } from "lucide-react";

// Mock data for recent activities
const activities = [
  {
    id: 1,
    type: 'order',
    description: "New order #ORD-2024-12345 has been placed.",
    timestamp: "5m ago",
    icon: <ShoppingCart className="h-5 w-5" />,
    initials: "SO"
  },
  {
    id: 2,
    type: 'customer',
    description: "A new customer, Alice Johnson, has registered.",
    timestamp: "15m ago",
    icon: <UserPlus className="h-5 w-5" />,
    initials: "AJ"
  },
  {
    id: 3,
    type: 'order',
    description: "Order #ORD-2024-12344 has been shipped.",
    timestamp: "1h ago",
    icon: <ShoppingCart className="h-5 w-5" />,
    initials: "SO"
  },
  {
    id: 4,
    type: 'order',
    description: "New order #ORD-2024-12343 has been placed.",
    timestamp: "2h ago",
    icon: <ShoppingCart className="h-5 w-5" />,
    initials: "SO"
  },
  {
    id: 5,
    type: 'customer',
    description: "A new customer, Bob Williams, has registered.",
    timestamp: "3h ago",
    icon: <UserPlus className="h-5 w-5" />,
    initials: "BW"
  },
];

const RecentActivityFeed: React.FC = () => {
  console.log('RecentActivityFeed loaded');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-4">
              <Avatar className="h-10 w-10 border">
                {/* In a real app, you might use an actual user/product image */}
                {/* <AvatarImage src="/path-to-image.jpg" /> */}
                <AvatarFallback className="bg-muted text-muted-foreground">
                  {activity.icon}
                </AvatarFallback>
              </Avatar>
              <div className="flex-grow">
                <p className="text-sm text-foreground">{activity.description}</p>
                <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentActivityFeed;