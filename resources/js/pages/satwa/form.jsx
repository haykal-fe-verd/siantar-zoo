import React from "react";
import { usePage } from "@inertiajs/react";

import {
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

function Form({ isEdit, onSubmit, setData, data, errors, processing }) {
    const { kategoriSatwa, jenisSatwa } = usePage().props;

    const handleFoto = (e) => {
        const file = e.target.files[0];
        setData("foto", file);

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const imgPreview = document.getElementById("foto-preview");
                if (imgPreview) {
                    imgPreview.src = reader.result;
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <DialogContent className={cn("max-w-5xl")}>
            <DialogHeader>
                <DialogTitle>
                    {isEdit ? "Edit" : "Tambah"} Satwa
                    <Separator className="my-5" />
                </DialogTitle>
                <form onSubmit={onSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 gap-y-5 lg:grid-cols-2 gap-x-10">
                        {/* nama */}
                        <div>
                            <Label htmlFor="nama">
                                Nama Satwa
                                <span className="text-rose-500">*</span>
                            </Label>
                            <Input
                                type="text"
                                id="nama"
                                name="nama"
                                className="mt-2"
                                value={data.nama}
                                onChange={(e) =>
                                    setData("nama", e.target.value)
                                }
                            />
                            <InputError message={errors.nama} />
                        </div>

                        {/* jenis_kelamin */}
                        <div>
                            <Label htmlFor="jenis_kelamin">
                                Jenis Kelamin
                                <span className="text-rose-500">*</span>
                            </Label>
                            <Select
                                onValueChange={(e) =>
                                    setData("jenis_kelamin", e)
                                }
                                defaultValue={data.jenis_kelamin}
                            >
                                <SelectTrigger className="mt-2 bg-white">
                                    <SelectValue placeholder="Pilih jenis kelamin" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="jantan">
                                        Jantan
                                    </SelectItem>
                                    <SelectItem value="betina">
                                        Betina
                                    </SelectItem>
                                    <SelectItem value="hermafrodit">
                                        Hermafrodit
                                    </SelectItem>
                                </SelectContent>
                            </Select>

                            <InputError message={errors.jenis_kelamin} />
                        </div>

                        {/* kategori_satwa_id */}
                        <div>
                            <Label htmlFor="kategori_satwa_id">
                                Kategori Satwa
                                <span className="text-rose-500">*</span>
                            </Label>
                            <Select
                                onValueChange={(e) =>
                                    setData("kategori_satwa_id", e)
                                }
                                defaultValue={data.kategori_satwa_id}
                            >
                                <SelectTrigger className="mt-2 bg-white">
                                    <SelectValue placeholder="Pilih Kategori Satwa" />
                                </SelectTrigger>
                                <SelectContent>
                                    {kategoriSatwa?.map((item) => (
                                        <SelectItem
                                            key={item.id}
                                            value={item.id.toString()}
                                        >
                                            {item.nama_kategori_satwa}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <InputError message={errors.kategori_satwa_id} />
                        </div>

                        {/* jenis_satwa_id */}
                        <div>
                            <Label htmlFor="jenis_satwa_id">
                                Jenis Satwa
                                <span className="text-rose-500">*</span>
                            </Label>
                            <Select
                                onValueChange={(e) =>
                                    setData("jenis_satwa_id", e)
                                }
                                defaultValue={data.jenis_satwa_id}
                            >
                                <SelectTrigger className="mt-2 bg-white">
                                    <SelectValue placeholder="Pilih Kategori Satwa" />
                                </SelectTrigger>
                                <SelectContent>
                                    {jenisSatwa?.map((item) => (
                                        <SelectItem
                                            key={item.id}
                                            value={item.id.toString()}
                                        >
                                            {item.nama_jenis_satwa}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <InputError message={errors.jenis_satwa_id} />
                        </div>

                        {/* ras */}
                        <div>
                            <Label htmlFor="ras">
                                Ras
                                <span className="text-rose-500">*</span>
                            </Label>
                            <Input
                                type="text"
                                id="ras"
                                name="ras"
                                className="mt-2"
                                value={data.ras}
                                onChange={(e) => setData("ras", e.target.value)}
                            />
                            <InputError message={errors.ras} />
                        </div>

                        {/* berat */}
                        <div>
                            <Label htmlFor="berat">
                                Berat
                                <span className="text-rose-500">*</span>
                            </Label>
                            <Input
                                type="number"
                                id="berat"
                                name="berat"
                                className="mt-2"
                                value={data.berat}
                                onChange={(e) =>
                                    setData("berat", e.target.value)
                                }
                            />
                            <InputError message={errors.berat} />
                        </div>

                        {/* tanggal_lahir */}
                        <div>
                            <Label htmlFor="tanggal_lahir">
                                Tanggal Lahir
                                <span className="text-rose-500">*</span>
                            </Label>
                            <Input
                                type="date"
                                id="tanggal_lahir"
                                name="tanggal_lahir"
                                className="mt-2"
                                value={data.tanggal_lahir}
                                onChange={(e) =>
                                    setData("tanggal_lahir", e.target.value)
                                }
                            />
                            <InputError message={errors.tanggal_lahir} />
                        </div>

                        {/* bangsa */}
                        <div>
                            <Label htmlFor="bangsa">
                                Bangsa
                                <span className="text-rose-500">*</span>
                            </Label>
                            <Input
                                type="text"
                                id="bangsa"
                                name="bangsa"
                                className="mt-2"
                                value={data.bangsa}
                                onChange={(e) =>
                                    setData("bangsa", e.target.value)
                                }
                            />
                            <InputError message={errors.bangsa} />
                        </div>

                        {/* habitat */}
                        <div>
                            <Label htmlFor="habitat">
                                Habitat
                                <span className="text-rose-500">*</span>
                            </Label>
                            <Input
                                type="text"
                                id="habitat"
                                name="habitat"
                                className="mt-2"
                                value={data.habitat}
                                onChange={(e) =>
                                    setData("habitat", e.target.value)
                                }
                            />
                            <InputError message={errors.habitat} />
                        </div>

                        {/* foto */}
                        <div>
                            <Label htmlFor="foto">Foto</Label>
                            <Input
                                type="file"
                                id="foto"
                                name="foto"
                                className="mt-2"
                                onChange={handleFoto}
                            />
                            <InputError message={errors.foto} />
                        </div>

                        {/* makanan_favorit */}
                        <div>
                            <Label htmlFor="makanan_favorit">
                                Makanan Favorit
                                <span className="text-rose-500">*</span>
                            </Label>
                            <Textarea
                                className="mt-2 bg-white"
                                id="makanan_favorit"
                                name="makanan_favorit"
                                value={data.makanan_favorit}
                                onChange={(e) =>
                                    setData("makanan_favorit", e.target.value)
                                }
                            />
                            <InputError message={errors.makanan_favorit} />
                        </div>

                        {/* ciri_khas */}
                        <div>
                            <Label htmlFor="ciri_khas">
                                Ciri Khas
                                <span className="text-rose-500">*</span>
                            </Label>
                            <Textarea
                                className="mt-2 bg-white"
                                id="ciri_khas"
                                name="ciri_khas"
                                value={data.ciri_khas}
                                onChange={(e) =>
                                    setData("ciri_khas", e.target.value)
                                }
                            />
                            <InputError message={errors.ciri_khas} />
                        </div>
                    </div>

                    <div className="w-full">
                        {data.foto && (
                            <div className="object-cover w-full h-[500px] rounded-md shadow-lg">
                                <img
                                    id="foto-preview"
                                    src={`/storage/${data.foto}`}
                                    alt="Foto Preview"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        )}
                    </div>

                    <Button
                        className="flex items-center justify-center gap-3"
                        disabled={processing}
                    >
                        {processing && <Loader2 className="animate-spin" />}
                        {isEdit ? "Ubah" : "Simpan"}
                    </Button>
                </form>
            </DialogHeader>
        </DialogContent>
    );
}

export default Form;
