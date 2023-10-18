import React from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { LogOut, Settings, User } from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function Topbar() {
    const { auth } = usePage().props;
    const { post } = useForm();

    const [currentTime, setCurrentTime] = React.useState(new Date());
    const [currentDate, setCurrentDate] = React.useState(new Date());

    const handleLogout = () => {
        post(route("logout"));
    };

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    };
    const currentDateFormatted = currentDate.toLocaleDateString(
        "id-ID",
        options
    );

    const currentTimeFormatted = currentTime.toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <header className="flex items-center justify-between p-4 m-5 bg-white rounded-md shadow-md">
            <div className="flex items-center gap-3">
                {/* jam */}
                <div className="hidden px-4 py-2 text-sm font-medium rounded-md lg:block bg-primary/20 text-primary">
                    {currentTimeFormatted}
                </div>
                {/* tanggal */}
                <div className="hidden px-4 py-2 text-sm font-medium rounded-md lg:block bg-primary/20 text-primary">
                    {currentDateFormatted}
                </div>
                <img
                    src="/logo-zoo2.png"
                    alt="Logo"
                    className="w-10 h-10 lg:hidden"
                />
                <h1 className="text-xl font-semibold text-primary lg:hidden">
                    Siantar Zoo
                </h1>
            </div>
            <div className="flex items-center gap-5 lg:ml-auto">
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Avatar className="border border-slate-900">
                            <AvatarImage
                                src={`/avatars/${auth?.user?.image}`}
                            />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link
                                href={route("profile.edit")}
                                className="flex items-center gap-x-3"
                            >
                                <User className="w-4 h-4" />
                                <span>Profile</span>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link
                                href={route("password.index")}
                                className="flex items-center gap-x-3"
                            >
                                <Settings className="w-4 h-4" />
                                <span>Ganti Password</span>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem
                            className="flex items-center cursor-pointer gap-x-3"
                            onClick={handleLogout}
                        >
                            <LogOut className="w-4 h-4" />
                            <span>Logout</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}

export default Topbar;
