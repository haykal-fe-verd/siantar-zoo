import React from "react";
import { Link } from "@inertiajs/react";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

function CardSatwa({ item }) {
    return (
        <Link
            href={route("daftar-satwa.show", item.id)}
            className="flex flex-col col-span-4 p-4 leading-relaxed bg-white border rounded-md shadow-lg border-primary lg:col-span-1 text-stone-600 group"
        >
            <div className="relative mb-3">
                <img
                    src={`/storage/${item.foto}`}
                    alt="Foto Satwa"
                    loading="lazy"
                    className="object-cover w-full rounded-md h-[170px]"
                />
                <span className="absolute z-10 px-3 py-1 text-xs text-white rounded-md top-2 left-2 bg-primary ">
                    {item.nama}
                </span>
            </div>
            <div className="flex flex-row items-center justify-between w-full">
                <h2 className="font-semibold capitalize">
                    {item.jenis_satwa.nama_jenis_satwa}
                </h2>
                <h2 className="font-semibold capitalize">
                    {item.kategori_satwa.nama_kategori_satwa}
                </h2>
            </div>

            <Separator className={cn("my-2")} />

            <p className="text-xs capitalize">{item.jenis_kelamin}</p>
            <p className="text-xs capitalize">{item.berat} Kg</p>
        </Link>
    );
}

export default CardSatwa;
