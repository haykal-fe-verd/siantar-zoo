import React from "react";

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

function Form({ isEdit, onSubmit, setData, data, errors, processing }) {
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    {isEdit ? "Edit" : "Tambah"} Obat
                    <Separator className="my-5" />
                </DialogTitle>
                <form onSubmit={onSubmit} className="space-y-5">
                    {/* nama_obat */}
                    <div>
                        <Label htmlFor="nama_obat">
                            Nama Obat
                            <span className="text-rose-500">*</span>
                        </Label>
                        <Input
                            type="text"
                            id="nama_obat"
                            name="nama_obat"
                            className="mt-2"
                            value={data.nama_obat}
                            onChange={(e) =>
                                setData("nama_obat", e.target.value)
                            }
                        />
                        <InputError message={errors.nama_obat} />
                    </div>

                    {/* stok */}
                    <div>
                        <Label htmlFor="stok">
                            Stok
                            <span className="text-rose-500">*</span>
                        </Label>
                        <Input
                            type="number"
                            min="0"
                            id="stok"
                            name="stok"
                            className="mt-2"
                            value={data.stok}
                            onChange={(e) => setData("stok", e.target.value)}
                        />
                        <InputError message={errors.stok} />
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
