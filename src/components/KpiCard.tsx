import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from 'lucide-react';

// A flexible type for the icon prop, allowing any React component (like those from lucide-react).
type IconType = React.ElementType;

interface KpiCardProps {
  title: string;
  value: string;
  percentageChange: number;
  icon: IconType;
  description?: string;
}

const KpiCard: React.FC<KpiCardProps> = ({ 
  title, 
  value, 
  percentageChange, 
  icon: Icon,
  description = "from last month"
}) => {
  console.log('KpiCard loaded for:', title);

  const isPositive = percentageChange >= 0;
  const isNeutral = percentageChange === 0;

  const percentageColor = isNeutral 
    ? "text-muted-foreground" 
    : isPositive 
    ? "text-emerald-600" 
    : "text-red-600";
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground flex items-center space-x-1">
          {!isNeutral && (
            isPositive ? (
              <ArrowUp className={`h-4 w-4 ${percentageColor}`} />
            ) : (
              <ArrowDown className={`h-4 w-4 ${percentageColor}`} />
            )
          )}
          <span className={percentageColor}>
            {Math.abs(percentageChange)}%
          </span>
          <span>{description}</span>
        </p>
      </CardContent>
    </Card>
  );
};

export default KpiCard;