import React from "react";
import { Head } from "@inertiajs/react";

import AuthLayout from "@/layouts/auth-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function RekamMedisShow({ satwa }) {
    console.log("🚀  satwa:", satwa);
    return (
        <AuthLayout>
            <Head title="Detail Satwa dan Rekam Medis" />
            <div className="p-5 space-y-4 bg-white rounded-md shadow-md ">
                <p>{satwa.nama}</p>
                <p>{satwa.tanggal_lahir}</p>
                <Tabs defaultValue="detail" className="w-full">
                    <TabsList>
                        <TabsTrigger value="detail">Detail Satwa</TabsTrigger>
                        <TabsTrigger value="rekam-medis">
                            Rekam Medis
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="detail">
                        Make changes to your account here.
                    </TabsContent>
                    <TabsContent value="rekam-medis">
                        Change your password here.
                    </TabsContent>
                </Tabs>
            </div>
        </AuthLayout>
    );
}

export default RekamMedisShow;
