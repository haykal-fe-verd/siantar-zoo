import React from "react";

import AuthLayout from "@/layouts/auth-layout";
import { Head } from "@inertiajs/react";
import { Bird, Cat, Pill, Squirrel } from "lucide-react";

function Dashboard({ totalSatwa, totalObat, totalKategori, totalJenis }) {
    const dataDashboard = [
        {
            id: 1,
            title: "Total Obat",
            desc: totalObat,
            icons: <Pill className="w-10 h-10 " />,
        },
        {
            id: 2,
            title: "Total Satwa",
            desc: totalSatwa,
            icons: <Cat className="w-10 h-10 " />,
        },
        {
            id: 3,
            title: "Total Jenis Satwa",
            desc: totalJenis,
            icons: <Squirrel className="w-10 h-10 " />,
        },
        {
            id: 4,
            title: "Total Kategori Satwa",
            desc: totalKategori,
            icons: <Bird className="w-10 h-10 " />,
        },
    ];
    return (
        <AuthLayout>
            <Head title="dashboard" />

            <div className="grid grid-cols-12 gap-5">
                {dataDashboard.map((item) => (
                    <div
                        key={item.id}
                        className="relative col-span-12 py-5 bg-white rounded-md shadow-lg lg:col-span-3"
                    >
                        <div className="absolute inset-y-0 flex items-center justify-center px-6 text-white bg-primary rounded-tl-md rounded-bl-md">
                            {item.icons}
                        </div>
                        <h2 className="text-2xl font-semibold pl-28">
                            {item.title}
                        </h2>
                        <p className="mt-5 text-4xl font-bold pl-28 text-primary">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </AuthLayout>
    );
}

export default Dashboard;
