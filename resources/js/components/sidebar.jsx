import React from "react";
import { Link, usePage } from "@inertiajs/react";

import { NavigationAuth } from "@/data/navigations";
import { cn } from "@/lib/utils";

function Sidebar() {
    const { ziggy } = usePage().props;
    return (
        <div className="flex flex-col h-full py-4 space-y-4 text-black bg-white">
            <div className="flex-1 px-3 py-2">
                <Link
                    href={route("dashboard")}
                    className="flex flex-col items-center justify-center text-center"
                >
                    <img
                        src="/logo-zoo2.png"
                        loading="lazy"
                        className="relative rounded-full w-44 h-44"
                    />
                </Link>

                <div className="mt-20 space-y-1">
                    {NavigationAuth.map((item) => (
                        <div key={item.href}>
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex justify-start w-full p-3 text-sm font-medium transition duration-100 rounded-lg cursor-pointer group hover:text-black hover:bg-primary/30",
                                    ziggy.location === item.href
                                        ? "text-white bg-primary"
                                        : "text-black"
                                )}
                            >
                                <div className="flex items-center flex-1">
                                    <item.icon className={cn("h-5 w-5 mr-3")} />
                                    {item.label}
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
