import React from "react";
import { Link, usePage } from "@inertiajs/react";

import { NavigationAuth } from "@/data/navigations";
import { cn } from "@/lib/utils";

function BottomBar() {
    const { ziggy } = usePage().props;

    return (
        <aside className="fixed bottom-0 w-full p-5 bg-white shadow-lg rounded-t-3xl lg:hidden">
            <div className="flex items-center justify-between">
                {NavigationAuth.map((item, index) => (
                    <Link
                        key={index}
                        href={item.href}
                        className={cn(
                            "flex items-center justify-center p-2 ",
                            ziggy.location === item.href
                                ? "text-primary"
                                : "text-black"
                        )}
                    >
                        <item.icon className={cn("h-5 w-5")} />
                    </Link>
                ))}
            </div>
        </aside>
    );
}

export default BottomBar;
