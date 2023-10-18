import React from "react";
import { Head } from "@inertiajs/react";

import GuestLayout from "@/layouts/guest-layout";
import Navbar from "@/components/navbar";

function Home() {
    return (
        <GuestLayout>
            <Head title="Home" />
            <Navbar />
            <section id="home" className="bg-white">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center justify-center  h-[calc(100vh-76px)] overflow-auto">
                        <img
                            src="/logo-zoo2.png"
                            alt="Background Zoo"
                            loading="lazy"
                            className="max-w-[300px]"
                        />
                        <h1 className="text-2xl font-semibold text-center">
                            Selamat datang di website{" "}
                            <span className="text-primary">Siantar Zoo</span>
                        </h1>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}

export default Home;
