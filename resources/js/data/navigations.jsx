import {
    Cat,
    Dog,
    HeartPulse,
    LayoutDashboard,
    PawPrint,
    Syringe,
} from "lucide-react";

export const NavigationsGuest = [
    {
        label: "Beranda",
        href: route("home"),
    },
    {
        label: "Daftar Satwa",
        href: route("daftar-satwa.index"),
    },
];

export const NavigationAuth = [
    {
        label: "Dashboard",
        href: route("dashboard"),
        icon: LayoutDashboard,
    },
    {
        label: "Obat",
        href: route("obat.index"),
        icon: Syringe,
    },
    {
        label: "Jenis Satwa",
        href: route("jenis-satwa.index"),
        icon: Cat,
    },
    {
        label: "Kategori Satwa",
        href: route("kategori-satwa.index"),
        icon: Dog,
    },
    {
        label: "Satwa",
        href: route("satwa.index"),
        icon: PawPrint,
    },
];
