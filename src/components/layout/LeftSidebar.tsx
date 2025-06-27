import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  Settings,
  ChevronLeft,
  ChevronRight,
  BarChart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';

interface LeftSidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/orders', icon: ShoppingCart, label: 'Orders' },
  { to: '/products', icon: Package, label: 'Products' },
  { to: '/customers', icon: Users, label: 'Customers' },
  { to: '/analytics', icon: BarChart, label: 'Analytics' },
  { to: '/settings', icon: Settings, label: 'Settings' },
];

const LeftSidebar: React.FC<LeftSidebarProps> = ({ isCollapsed, onToggle }) => {
  console.log('LeftSidebar loaded');
  const { pathname } = useLocation();

  const NavItem = ({ to, icon: Icon, label }: typeof navItems[0]) => {
    const isActive = pathname === to;
    const itemContent = (
      <NavLink
        to={to}
        className={cn(
          'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
          isActive && 'bg-muted text-primary'
        )}
      >
        <Icon className="h-5 w-5" />
        {!isCollapsed && <span className="truncate">{label}</span>}
      </NavLink>
    );

    if (isCollapsed) {
      return (
        <Tooltip>
          <TooltipTrigger asChild>{itemContent}</TooltipTrigger>
          <TooltipContent side="right">
            <p>{label}</p>
          </TooltipContent>
        </Tooltip>
      );
    }
    return itemContent;
  };

  return (
    <aside
      className={cn(
        'hidden border-r bg-muted/40 md:flex flex-col transition-all duration-300 ease-in-out',
        isCollapsed ? 'w-20' : 'w-64'
      )}
    >
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-16 items-center border-b px-4 lg:px-6 justify-between">
           {!isCollapsed && (
            <NavLink to="/" className="flex items-center gap-2 font-semibold">
              <Package className="h-6 w-6" />
              <span>CommerceIQ</span>
            </NavLink>
          )}
          <Button variant="outline" size="icon" onClick={onToggle} className="ml-auto h-8 w-8">
            {isCollapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            <span className="sr-only">Toggle sidebar</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-1">
            {navItems.map((item) => (
              <NavItem key={item.to} {...item} />
            ))}
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;