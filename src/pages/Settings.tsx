import React, { useState } from 'react';

// Layout Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';

// Shadcn/UI Components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Settings = () => {
    console.log('Settings page loaded');
    const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
        setSidebarCollapsed(!isSidebarCollapsed);
    };

    return (
        <div className="flex min-h-screen w-full bg-muted/40">
            <LeftSidebar isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} />
            <div className="flex flex-col flex-1">
                <Header pageTitle="Settings" onToggleSidebar={toggleSidebar} />
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8 overflow-auto">
                    <div className="grid gap-6">
                        <Tabs defaultValue="profile">
                            <TabsList className="grid w-full grid-cols-3 md:w-[400px]">
                                <TabsTrigger value="profile">Profile</TabsTrigger>
                                <TabsTrigger value="password">Password</TabsTrigger>
                                <TabsTrigger value="notifications">Notifications</TabsTrigger>
                            </TabsList>
                            
                            {/* Profile Tab */}
                            <TabsContent value="profile">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Profile</CardTitle>
                                        <CardDescription>
                                            This is how others will see you on the site.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Name</Label>
                                            <Input id="name" defaultValue="John Doe" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input id="email" type="email" defaultValue="john.doe@example.com" />
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button>Save Changes</Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>

                            {/* Password Tab */}
                            <TabsContent value="password">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Password</CardTitle>
                                        <CardDescription>
                                            Change your password here. After saving, you'll be logged out.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="current-password">Current Password</Label>
                                            <Input id="current-password" type="password" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="new-password">New Password</Label>
                                            <Input id="new-password" type="password" />
                                        </div>
                                         <div className="space-y-2">
                                            <Label htmlFor="confirm-password">Confirm New Password</Label>
                                            <Input id="confirm-password" type="password" />
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button>Change Password</Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>

                            {/* Notifications Tab */}
                             <TabsContent value="notifications">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>Notifications</CardTitle>
                                        <CardDescription>
                                            Manage your notification preferences.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-6">
                                        <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                                            <div className="space-y-0.5">
                                                <Label className="text-base">Email Notifications</Label>
                                                <p className="text-sm text-muted-foreground">
                                                    Receive emails about new orders and account activity.
                                                </p>
                                            </div>
                                            <Switch defaultChecked />
                                        </div>
                                         <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                                            <div className="space-y-0.5">
                                                <Label className="text-base">Push Notifications</Label>
                                                <p className="text-sm text-muted-foreground">
                                                   Get real-time alerts on your devices.
                                                </p>
                                            </div>
                                            <Switch />
                                        </div>
                                         <div className="flex flex-row items-center justify-between rounded-lg border p-4">
                                            <div className="space-y-0.5">
                                                <Label className="text-base">Weekly Summary</Label>
                                                <p className="text-sm text-muted-foreground">
                                                   Receive a summary of your store's performance every week.
                                                </p>
                                            </div>
                                            <Switch defaultChecked />
                                        </div>
                                    </CardContent>
                                    <CardFooter>
                                        <Button>Save Preferences</Button>
                                    </CardFooter>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Settings;