import React from "react";
import { Head, useForm, usePage } from "@inertiajs/react";

import AuthLayout from "@/layouts/auth-layout";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Loader2, Save } from "lucide-react";

function Profile() {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
        });

    const submit = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
    };
    return (
        <AuthLayout>
            <Head title="Profil Saya" />

            <div className="p-5 space-y-4 bg-white rounded-md shadow-md ">
                <div className="w-full">
                    <form onSubmit={submit}>
                        <div className="space-y-5 ">
                            <div>
                                <Label htmlFor="name">Nama Lengkap</Label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="mt-2"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />

                                <InputError message={errors.name} />
                            </div>

                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    type="text"
                                    id="email"
                                    name="email"
                                    className="mt-2"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />

                                <InputError message={errors.email} />
                            </div>
                        </div>

                        <div className="mt-5">
                            <Button
                                className="flex flex-row items-center justify-center gap-2"
                                disabled={processing}
                            >
                                {processing ? (
                                    <Loader2 className="animate-spin" />
                                ) : (
                                    <Save />
                                )}
                                <span>Simpan</span>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </AuthLayout>
    );
}

export default Profile;
