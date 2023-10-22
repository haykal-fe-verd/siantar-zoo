import React from "react";
import { Head } from "@inertiajs/react";
import moment from "moment/moment";

import AuthLayout from "@/layouts/auth-layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

function RekamMedisShow({ satwa }) {
    return (
        <AuthLayout>
            <Head title="Detail Satwa dan Rekam Medis" />
            <div className="p-5 space-y-10 bg-white rounded-md shadow-md ">
                <div className="w-full lg:w-1/2">
                    <img
                        src={`/storage/${satwa.foto}`}
                        alt="Foto Satwa"
                        loading="lazy"
                        className="object-cover w-full rounded-md h-[400px]"
                    />
                </div>

                <Tabs defaultValue="detail" className="w-full">
                    <TabsList>
                        <TabsTrigger value="detail">Detail Satwa</TabsTrigger>
                        <TabsTrigger value="rekam-medis">
                            Rekam Medis
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="detail">
                        <div className="w-full">
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell className="border">
                                            Nama
                                        </TableCell>
                                        <TableCell className="border">
                                            : {satwa.nama}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="border">
                                            Jenis Kelamin
                                        </TableCell>
                                        <TableCell className="border">
                                            : {satwa.jenis_kelamin}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="border">
                                            Berat
                                        </TableCell>
                                        <TableCell className="border">
                                            : {satwa.berat} Kg
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="border">
                                            Tanggal Lahir
                                        </TableCell>
                                        <TableCell className="border">
                                            :{" "}
                                            {moment(satwa.tanggal_lahir).format(
                                                "DD-MM-YYYY"
                                            )}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="border">
                                            Jenis Satwa
                                        </TableCell>
                                        <TableCell className="border">
                                            :{" "}
                                            {satwa.jenis_satwa.nama_jenis_satwa}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="border">
                                            Kategori Satwa
                                        </TableCell>
                                        <TableCell className="border">
                                            :{" "}
                                            {
                                                satwa.kategori_satwa
                                                    .nama_kategori_satwa
                                            }
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="border">
                                            Ras
                                        </TableCell>
                                        <TableCell className="border">
                                            : {satwa.ras}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="border">
                                            Bangsa
                                        </TableCell>
                                        <TableCell className="border">
                                            : {satwa.bangsa}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="border">
                                            Habitat
                                        </TableCell>
                                        <TableCell className="border">
                                            : {satwa.habitat}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell className="border">
                                            Makan Favorit
                                        </TableCell>
                                        <TableCell className="border">
                                            : {satwa.makanan_favorit}
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </TabsContent>
                    <TabsContent value="rekam-medis">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>#</TableHead>
                                    <TableHead>Obat</TableHead>
                                    <TableHead>Tanggal</TableHead>
                                    <TableHead>Note</TableHead>
                                    <TableHead>@</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {satwa?.rekam_medis?.length > 0 ? (
                                    satwa?.rekam_medis?.map((item, index) => (
                                        <TableRow key={item.id}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>
                                                {item.obat.nama_obat}
                                            </TableCell>
                                            <TableCell>
                                                {moment(
                                                    item.tanggal_rekam_medis
                                                ).format("DD-MM-YYY")}
                                            </TableCell>
                                            <TableCell>{item.note}</TableCell>
                                            <TableCell>
                                                <Dialog>
                                                    <DialogTrigger
                                                        className={cn(
                                                            "hover:underline"
                                                        )}
                                                    >
                                                        Detail
                                                    </DialogTrigger>
                                                    <DialogContent
                                                        className={cn(
                                                            "max-w-lg lg:max-w-2xl"
                                                        )}
                                                    >
                                                        <DialogHeader>
                                                            <DialogTitle>
                                                                Detail Rekam
                                                                Medis Satwa
                                                            </DialogTitle>
                                                            <Separator />
                                                            <DialogDescription>
                                                                <Table>
                                                                    <TableBody>
                                                                        <TableRow>
                                                                            <TableCell className="border">
                                                                                Kondisi
                                                                                Umum
                                                                            </TableCell>
                                                                            <TableCell className="border">
                                                                                :{" "}
                                                                                {
                                                                                    item.kondisi_umum
                                                                                }
                                                                            </TableCell>
                                                                        </TableRow>
                                                                        <TableRow>
                                                                            <TableCell className="border">
                                                                                Diagnosa
                                                                            </TableCell>
                                                                            <TableCell className="border">
                                                                                :{" "}
                                                                                {
                                                                                    item.diagnosa
                                                                                }
                                                                            </TableCell>
                                                                        </TableRow>
                                                                        <TableRow>
                                                                            <TableCell className="border">
                                                                                Nama
                                                                                Obat
                                                                            </TableCell>
                                                                            <TableCell className="border">
                                                                                :{" "}
                                                                                {
                                                                                    item
                                                                                        .obat
                                                                                        .nama_obat
                                                                                }
                                                                            </TableCell>
                                                                        </TableRow>
                                                                        <TableRow>
                                                                            <TableCell className="border">
                                                                                Jumlah
                                                                                Obat
                                                                            </TableCell>
                                                                            <TableCell className="border">
                                                                                :{" "}
                                                                                {
                                                                                    item.jumlah_obat
                                                                                }
                                                                            </TableCell>
                                                                        </TableRow>
                                                                        <TableRow>
                                                                            <TableCell className="border">
                                                                                Tgl.
                                                                                Rekam
                                                                                Medis
                                                                            </TableCell>
                                                                            <TableCell className="border">
                                                                                :{" "}
                                                                                {moment(
                                                                                    item.tanggal_rekam_medis
                                                                                ).format(
                                                                                    "DD-MM-YYYY"
                                                                                )}
                                                                            </TableCell>
                                                                        </TableRow>
                                                                        <TableRow>
                                                                            <TableCell className="border">
                                                                                Tgl.
                                                                                Pemeriksaan
                                                                                Selanjutnya
                                                                            </TableCell>
                                                                            <TableCell className="border">
                                                                                :{" "}
                                                                                {moment(
                                                                                    item.pemeriksaan_selanjutnya
                                                                                ).format(
                                                                                    "DD-MM-YYYY"
                                                                                )}
                                                                            </TableCell>
                                                                        </TableRow>
                                                                        <TableRow>
                                                                            <TableCell className="border">
                                                                                Hasil
                                                                            </TableCell>
                                                                            <TableCell className="border">
                                                                                :{" "}
                                                                                {
                                                                                    item.hasil
                                                                                }
                                                                            </TableCell>
                                                                        </TableRow>
                                                                        <TableRow>
                                                                            <TableCell className="border">
                                                                                Tindak
                                                                                Lanjut
                                                                            </TableCell>
                                                                            <TableCell className="border">
                                                                                :{" "}
                                                                                {
                                                                                    item.tindak_lanjut
                                                                                }
                                                                            </TableCell>
                                                                        </TableRow>
                                                                        <TableRow>
                                                                            <TableCell className="border">
                                                                                Note
                                                                            </TableCell>
                                                                            <TableCell className="border">
                                                                                :{" "}
                                                                                {
                                                                                    item.note
                                                                                }
                                                                            </TableCell>
                                                                        </TableRow>
                                                                    </TableBody>
                                                                </Table>
                                                            </DialogDescription>
                                                        </DialogHeader>
                                                    </DialogContent>
                                                </Dialog>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell
                                            colSpan="5"
                                            className="text-center"
                                        >
                                            Tidak ada data rekam medis untuk
                                            satwa ini.
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TabsContent>
                </Tabs>
            </div>
        </AuthLayout>
    );
}

export default RekamMedisShow;
