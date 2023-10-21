import React from "react";
import { Head, Link, useForm } from "@inertiajs/react";

import AuthLayout from "@/layouts/auth-layout";
import DataTable from "@/components/data-table";
import { TableCell, TableRow } from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Aperture,
    Banana,
    MoreHorizontal,
    PencilIcon,
    PlusCircle,
    Trash2,
} from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Form from "./form";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import moment from "moment/moment";

const header = [
    { name: "#", className: "w-10 text-center" },
    { name: "Nama", className: "" },
    { name: "Jenis Kelamin", className: "" },
    { name: "Kategori", className: "" },
    { name: "Jenis", className: "" },
    { name: "Tanggal Lahir", className: "" },
    { name: "Bangsa", className: "" },
    { name: "@", className: "text-center" },
];

function Satwa({ satwa }) {
    const [openModal, setOpenModal] = React.useState(false);
    const [isEdit, setIsEdit] = React.useState(false);

    const {
        data,
        setData,
        post,
        put,
        delete: destroy,
        processing,
        errors,
        reset,
    } = useForm({
        id: "",
        jenis_satwa_id: "",
        kategori_satwa_id: "",
        nama: "",
        jenis_kelamin: "",
        ras: "",
        berat: "",
        tanggal_lahir: "",
        bangsa: "",
        habitat: "",
        makanan_favorit: "",
        ciri_khas: "",
        foto: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            post(route("satwa.update", data.id), {
                onSuccess: () => {
                    setOpenModal(false), setIsEdit(false), reset();
                },
            });
        } else {
            post(route("satwa.store"), {
                onSuccess: () => {
                    setOpenModal(false), reset();
                },
            });
        }
    };

    const handleEdit = (item) => {
        setIsEdit(true);
        setOpenModal(true);
        setData({
            id: item.id,
            jenis_satwa_id: item.jenis_satwa_id.toString(),
            kategori_satwa_id: item.kategori_satwa_id.toString(),
            nama: item.nama,
            jenis_kelamin: item.jenis_kelamin,
            ras: item.ras,
            berat: item.berat,
            tanggal_lahir: item.tanggal_lahir,
            bangsa: item.bangsa,
            habitat: item.habitat,
            makanan_favorit: item.makanan_favorit,
            ciri_khas: item.ciri_khas,
            foto: item.foto,
        });
    };

    const handleDelete = (item) => {
        destroy(route("satwa.destroy", item.id));
        reset();
    };

    return (
        <AuthLayout>
            <Dialog
                open={openModal}
                onOpenChange={(isOpen) => {
                    setOpenModal(isOpen);
                    if (!isOpen) {
                        setIsEdit(false);
                        reset();
                    }
                }}
            >
                <Head title="Satwa" />

                <div className="p-5 space-y-4 bg-white rounded-md shadow-md ">
                    <div className="w-full">
                        <Button
                            className={cn("gap-2 mb-5 w-full lg:w-max")}
                            onClick={() => setOpenModal(true)}
                        >
                            <PlusCircle className="w-5 h-5" />
                            <span>Tambah Satwa</span>
                        </Button>

                        <DataTable
                            data={satwa}
                            header={header}
                            link={"satwa.index"}
                        >
                            {satwa.data.length !== 0 ? (
                                satwa.data.map((item, index) => (
                                    <TableRow key={satwa.from + index}>
                                        <TableCell className="text-center">
                                            {satwa.from + index}
                                        </TableCell>
                                        <TableCell className={cn("capitalize")}>
                                            {item.nama}
                                        </TableCell>
                                        <TableCell className={cn("capitalize")}>
                                            {item.jenis_kelamin}
                                        </TableCell>
                                        <TableCell className={cn("capitalize")}>
                                            {
                                                item.kategori_satwa
                                                    .nama_kategori_satwa
                                            }
                                        </TableCell>
                                        <TableCell className={cn("capitalize")}>
                                            {item.jenis_satwa.nama_jenis_satwa}
                                        </TableCell>
                                        <TableCell className={cn("capitalize")}>
                                            {moment(item.tanggal_lahir).format(
                                                "DD-MM-YYYY"
                                            )}
                                        </TableCell>
                                        <TableCell className={cn("capitalize")}>
                                            {item.bangsa}
                                        </TableCell>
                                        <TableCell className="text-center">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger
                                                    id={`btnMore${index}`}
                                                >
                                                    <MoreHorizontal className="w-5 h-5" />
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DropdownMenuItem>
                                                        <Link
                                                            href={route(
                                                                "rekam-medis.detail",
                                                                item.id
                                                            )}
                                                            className="flex items-center justify-start"
                                                        >
                                                            <Banana className="w-4 h-4 mr-3" />
                                                            <span>
                                                                Detail Satwa &
                                                                Rekam Medis
                                                            </span>
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem>
                                                        <Link
                                                            href={route(
                                                                "rekam-medis.show",
                                                                item.id
                                                            )}
                                                            className="flex items-center justify-start"
                                                        >
                                                            <Aperture className="w-4 h-4 mr-3" />
                                                            <span>
                                                                Tambah Rekam
                                                                Medis
                                                            </span>
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuItem
                                                        onClick={() =>
                                                            handleEdit(item)
                                                        }
                                                    >
                                                        <PencilIcon className="w-4 h-4 mr-3" />
                                                        <span>Edit</span>
                                                    </DropdownMenuItem>

                                                    <AlertDialog>
                                                        <AlertDialogTrigger className="flex flex-row items-center w-full px-2 py-1 text-sm rounded-md cursor-default hover:bg-accent">
                                                            <Trash2 className="w-4 h-4 mr-3" />
                                                            <span>Hapus</span>
                                                        </AlertDialogTrigger>
                                                        <AlertDialogContent>
                                                            <AlertDialogHeader>
                                                                <AlertDialogTitle>
                                                                    Apakah anda
                                                                    yakin?
                                                                </AlertDialogTitle>
                                                                <AlertDialogDescription>
                                                                    Setelah
                                                                    dihapus data
                                                                    tidak dapat
                                                                    dikembalikan!
                                                                </AlertDialogDescription>
                                                            </AlertDialogHeader>
                                                            <AlertDialogFooter>
                                                                <AlertDialogCancel>
                                                                    Tidak
                                                                </AlertDialogCancel>
                                                                <AlertDialogAction
                                                                    onClick={() =>
                                                                        handleDelete(
                                                                            item
                                                                        )
                                                                    }
                                                                >
                                                                    Ya
                                                                </AlertDialogAction>
                                                            </AlertDialogFooter>
                                                        </AlertDialogContent>
                                                    </AlertDialog>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        className="text-center"
                                        colSpan={header.length}
                                    >
                                        Tidak ada data untuk ditampilkan
                                    </TableCell>
                                </TableRow>
                            )}
                        </DataTable>
                    </div>
                </div>

                {/* form */}
                <Form
                    isEdit={isEdit}
                    onSubmit={onSubmit}
                    setData={setData}
                    data={data}
                    errors={errors}
                    processing={processing}
                />
            </Dialog>
        </AuthLayout>
    );
}

export default Satwa;
