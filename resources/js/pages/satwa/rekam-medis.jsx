import React from "react";
import { Head, useForm } from "@inertiajs/react";

import AuthLayout from "@/layouts/auth-layout";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import InputError from "@/components/input-error";
import { cn } from "@/lib/utils";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Loader2 } from "lucide-react";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import moment from "moment/moment";

function RekamMedis({ obat, satwa }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        id: satwa.id,
        satwa_id: satwa.id,
        obat_id: "",
        jumlah_obat: "",
        tanggal_rekam_medis: "",
        kondisi_umum: "",
        diagnosa: "",
        hasil: "",
        pemeriksaan_selanjutnya: "",
        tindak_lanjut: "",
        note: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("rekam-medis.store"), {
            onSuccess: () => {
                reset();
            },
        });
    };

    return (
        <AuthLayout>
            <Head title="Rekam Medis" />
            <div className="p-5 space-y-4 bg-white rounded-md shadow-md ">
                <div className="w-full lg:w-1/2">
                    <img
                        src={`/storage/${satwa.foto}`}
                        alt="Foto Satwa"
                        loading="lazy"
                        className="object-cover w-full rounded-md h-[400px]"
                    />
                </div>
                <div className="w-full">
                    <h1 className="mb-5 text-2xl font-semibold underline decoration-wavy decoration-primary">
                        Detail Satwa
                    </h1>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell className="border">Nama</TableCell>
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
                                <TableCell className="border">Berat</TableCell>
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
                                    : {satwa.jenis_satwa.nama_jenis_satwa}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="border">
                                    Kategori Satwa
                                </TableCell>
                                <TableCell className="border">
                                    : {satwa.kategori_satwa.nama_kategori_satwa}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="border">Ras</TableCell>
                                <TableCell className="border">
                                    : {satwa.ras}
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="border">Bangsa</TableCell>
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
                <h1 className="my-5 text-2xl font-semibold underline decoration-wavy decoration-primary">
                    Tambah Rekam Medis
                </h1>
                <form onSubmit={onSubmit} className="space-y-5 ">
                    <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-2 gap-x-10">
                        {/* kondisi_umum */}
                        <div>
                            <Label htmlFor="kondisi_umum">
                                Kondisi Umum
                                <span className="text-rose-500">*</span>
                            </Label>
                            <Input
                                type="text"
                                id="kondisi_umum"
                                name="kondisi_umum"
                                className="mt-2"
                                value={data.kondisi_umum}
                                onChange={(e) =>
                                    setData("kondisi_umum", e.target.value)
                                }
                            />
                            <InputError message={errors.kondisi_umum} />
                        </div>

                        {/* obat_id */}
                        <div>
                            <Label htmlFor="obat_id">
                                Obat
                                <span className="text-rose-500">*</span>
                            </Label>
                            <Select
                                onValueChange={(e) => setData("obat_id", e)}
                                defaultValue={data.obat_id}
                            >
                                <SelectTrigger className="mt-2 bg-white">
                                    <SelectValue placeholder="Pilih Obat" />
                                </SelectTrigger>
                                <SelectContent>
                                    <ScrollArea className={cn("h-60")}>
                                        {obat?.map((item) => (
                                            <SelectItem
                                                key={item.id}
                                                value={item.id.toString()}
                                            >
                                                {item.nama_obat} | Stok:{" "}
                                                {item.stok}
                                            </SelectItem>
                                        ))}
                                    </ScrollArea>
                                </SelectContent>
                            </Select>

                            <InputError message={errors.obat_id} />
                        </div>

                        {/* jumlah_obat */}
                        <div>
                            <Label htmlFor="jumlah_obat">
                                Jumlah Obat
                                <span className="text-rose-500">*</span>
                            </Label>
                            <Input
                                type="number"
                                id="jumlah_obat"
                                name="jumlah_obat"
                                className="mt-2"
                                value={data.jumlah_obat}
                                onChange={(e) =>
                                    setData("jumlah_obat", e.target.value)
                                }
                            />
                            <InputError message={errors.jumlah_obat} />
                        </div>

                        {/* tanggal_rekam_medis */}
                        <div>
                            <Label htmlFor="tanggal_rekam_medis">
                                Tanggal Rekam Medis
                                <span className="text-rose-500">*</span>
                            </Label>
                            <Input
                                type="date"
                                id="tanggal_rekam_medis"
                                name="tanggal_rekam_medis"
                                className="mt-2"
                                value={data.tanggal_rekam_medis}
                                onChange={(e) =>
                                    setData(
                                        "tanggal_rekam_medis",
                                        e.target.value
                                    )
                                }
                            />
                            <InputError message={errors.tanggal_rekam_medis} />
                        </div>

                        {/* pemeriksaan_selanjutnya */}
                        <div>
                            <Label htmlFor="pemeriksaan_selanjutnya">
                                Pemeriksaan Selanjutnya
                                <span className="text-rose-500">*</span>
                            </Label>
                            <Input
                                type="date"
                                id="pemeriksaan_selanjutnya"
                                name="pemeriksaan_selanjutnya"
                                className="mt-2"
                                value={data.pemeriksaan_selanjutnya}
                                onChange={(e) =>
                                    setData(
                                        "pemeriksaan_selanjutnya",
                                        e.target.value
                                    )
                                }
                            />
                            <InputError
                                message={errors.pemeriksaan_selanjutnya}
                            />
                        </div>

                        {/* hasil */}
                        <div>
                            <Label htmlFor="hasil">
                                hasil
                                <span className="text-rose-500">*</span>
                            </Label>
                            <Textarea
                                className="mt-2 bg-white"
                                id="hasil"
                                name="hasil"
                                value={data.hasil}
                                onChange={(e) =>
                                    setData("hasil", e.target.value)
                                }
                            />
                            <InputError message={errors.hasil} />
                        </div>

                        {/* diagnosa */}
                        <div>
                            <Label htmlFor="diagnosa">
                                diagnosa
                                <span className="text-rose-500">*</span>
                            </Label>
                            <Textarea
                                className="mt-2 bg-white"
                                id="diagnosa"
                                name="diagnosa"
                                value={data.diagnosa}
                                onChange={(e) =>
                                    setData("diagnosa", e.target.value)
                                }
                            />
                            <InputError message={errors.diagnosa} />
                        </div>

                        {/* tindak_lanjut */}
                        <div>
                            <Label htmlFor="tindak_lanjut">
                                Tindak Lanjut
                                <span className="text-rose-500">*</span>
                            </Label>
                            <Textarea
                                className="mt-2 bg-white"
                                id="tindak_lanjut"
                                name="tindak_lanjut"
                                value={data.tindak_lanjut}
                                onChange={(e) =>
                                    setData("tindak_lanjut", e.target.value)
                                }
                            />
                            <InputError message={errors.tindak_lanjut} />
                        </div>

                        {/* note */}
                        <div>
                            <Label htmlFor="note">
                                Note
                                <span className="text-rose-500">*</span>
                            </Label>
                            <Textarea
                                className="mt-2 bg-white"
                                id="note"
                                name="note"
                                value={data.note}
                                onChange={(e) =>
                                    setData("note", e.target.value)
                                }
                            />
                            <InputError message={errors.note} />
                        </div>
                    </div>

                    <Button
                        className="flex items-center justify-center gap-3"
                        disabled={processing}
                    >
                        {processing && <Loader2 className="animate-spin" />}
                        Simpan
                    </Button>
                </form>
            </div>
        </AuthLayout>
    );
}

export default RekamMedis;
