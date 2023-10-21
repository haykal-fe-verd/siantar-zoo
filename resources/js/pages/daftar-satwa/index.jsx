import React from "react";
import { Head, Link, router, usePage } from "@inertiajs/react";
import { pickBy } from "lodash";

import GuestLayout from "@/layouts/guest-layout";
import Navbar from "@/components/navbar";
import { Search } from "lucide-react";
import Pagination from "@/components/pagination";
import CardSatwa from "@/components/card-satwa";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

function DaftarSatwa({ daftarSatwa }) {
    const [isLoading, setIsLoading] = React.useState(false);
    const [search, setSearch] = React.useState("");
    const [searchChanged, setSearchChanged] = React.useState(false);

    React.useEffect(() => {
        if (searchChanged) {
            const delaySearch = setTimeout(() => {
                getData();
            }, 500);

            return () => {
                clearTimeout(delaySearch);
            };
        }
        setSearchChanged(true);
    }, [search, setSearchChanged]);

    const getData = () => {
        setIsLoading(true);
        router.get(route("daftar-satwa.index"), pickBy({ search }), {
            preserveScroll: true,
            preserveState: true,
            onFinish: () => setIsLoading(false),
        });
    };

    return (
        <GuestLayout>
            <Head title="Daftar Satwa" />
            <Navbar />
            <section id="daftar-satwa" className="bg-white">
                <div className="container py-10 mx-auto md:flex-row">
                    <div className="w-full">
                        <div className="relative w-full rounded-md lg:w-1/2">
                            <div className="absolute inset-y-0 left-0 flex items-center p-2 rounded-tl-md rounded-bl-md bg-primary">
                                <Search className="text-white" />
                            </div>
                            <Input
                                type="search"
                                id="search"
                                name="search"
                                placeholder="Cari satwa ..."
                                className={cn("h-14  shadow-lg pl-14")}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="w-full mt-10">
                        <div className="grid grid-cols-4 gap-5">
                            {daftarSatwa?.data?.length === 0
                                ? "Tidak ada data untuk ditampilkan"
                                : daftarSatwa?.data?.map((item, index) => {
                                      return (
                                          <CardSatwa key={index} item={item} />
                                      );
                                  })}
                        </div>
                    </div>

                    <div className="w-full mt-10">
                        <Pagination links={daftarSatwa.links} />
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}

export default DaftarSatwa;
