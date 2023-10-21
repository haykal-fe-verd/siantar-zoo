import React from "react";
import { Head, useForm } from "@inertiajs/react";

import AuthLayout from "@/layouts/auth-layout";
import DataTable from "@/components/data-table";
import { TableCell, TableRow } from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, PencilIcon, PlusCircle, Trash2 } from "lucide-react";
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

const header = [
    { name: "#", className: "w-10 text-center" },
    { name: "Nama Obat", className: "" },
    { name: "Stok", className: "" },
    { name: "@", className: "text-center" },
];

function Obat({ obat }) {
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
        nama_obat: "",
        stok: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            put(route("obat.update", data.id), {
                onSuccess: () => {
                    setOpenModal(false), setIsEdit(false), reset();
                },
            });
        } else {
            post(route("obat.store"), {
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
            nama_obat: item.nama_obat,
            stok: item.stok,
        });
    };

    const handleDelete = (item) => {
        destroy(route("obat.destroy", item.id));
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
                <Head title="Obat" />

                <div className="p-5 space-y-4 bg-white rounded-md shadow-md ">
                    <div className="w-full">
                        <Button
                            className={cn("gap-2 mb-5 w-full lg:w-max")}
                            onClick={() => setOpenModal(true)}
                        >
                            <PlusCircle className="w-5 h-5" />
                            <span>Tambah Obat</span>
                        </Button>

                        <DataTable
                            data={obat}
                            header={header}
                            link={"obat.index"}
                        >
                            {obat.data.length !== 0 ? (
                                obat.data.map((item, index) => (
                                    <TableRow key={obat.from + index}>
                                        <TableCell className="text-center">
                                            {obat.from + index}
                                        </TableCell>
                                        <TableCell>{item.nama_obat}</TableCell>
                                        <TableCell>{item.stok}</TableCell>
                                        <TableCell className="text-center">
                                            <DropdownMenu>
                                                <DropdownMenuTrigger
                                                    id={`btnMore${index}`}
                                                >
                                                    <MoreHorizontal className="w-5 h-5" />
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
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

export default Obat;
