import React from "react";
import { usePage } from "@inertiajs/react";

import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

function GuestLayout({ children }) {
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
        <main className="bg-white">
            <div>{children}</div>
            <Toaster />
        </main>
    );
}

export default GuestLayout;
