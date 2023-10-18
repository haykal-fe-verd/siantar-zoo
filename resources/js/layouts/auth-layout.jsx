import React from "react";
import { usePage } from "@inertiajs/react";

import Topbar from "@/components/topbar";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import BottomBar from "@/components/bottombar";
import Sidebar from "@/components/sidebar";

function AuthLayout({ children }) {
    const { sessions } = usePage().props;
    const { toast } = useToast();

    React.useEffect(() => {
        if (sessions?.success) {
            toast({
                className: cn(
                    "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
                ),
                title: "Berhasil",
                description: sessions.success,
            });
        }

        if (sessions?.error) {
            toast({
                className: cn(
                    "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
                ),
                variant: "destructive",
                title: "Gagal",
                description: sessions.error,
            });
        }

        if (sessions?.status) {
            toast({
                className: cn(
                    "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
                ),
                description: sessions.status,
            });
        }

        if (sessions?.message) {
            toast({
                className: cn(
                    "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
                ),
                description: sessions.message,
            });
        }
    }, [sessions]);

    return (
        <main className="relative h-full">
            <div className="hidden h-full lg:flex lg:w-72 lg:flex-col lg:fixed lg:inset-y-0 z-[50]">
                <Sidebar />
            </div>
            <div className="lg:pl-72">
                <Topbar />
                <div className="m-5">{children}</div>
                <BottomBar />
            </div>
            <Toaster />
        </main>
    );
}

export default AuthLayout;
