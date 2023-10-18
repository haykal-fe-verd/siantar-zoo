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
        href: "http://127.0.0.1:8000/satwa",
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
        href: "",
        icon: Syringe,
    },
    {
        label: "Jenis Satwa",
        href: "",
        icon: Cat,
    },
    {
        label: "Kategori Satwa",
        href: "",
        icon: Dog,
    },
    {
        label: "Satwa",
        href: "",
        icon: PawPrint,
    },
    {
        label: "Rekam Medis",
        href: "",
        icon: HeartPulse,
    },
];
