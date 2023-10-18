import React from "react";
import { Head, useForm } from "@inertiajs/react";

import AuthLayout from "@/layouts/auth-layout";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Loader2, Save } from "lucide-react";

function ChangePassword() {
    const { data, setData, errors, put, reset, processing } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route("password.update"), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset("password", "password_confirmation");
                }

                if (errors.current_password) {
                    reset("current_password");
                }
            },
        });
    };

    React.useEffect(() => {
        return () => {
            reset("current_password", "password", "password_confirmation");
        };
    }, []);

    return (
        <AuthLayout>
            <Head title="Ganti Password" />

            <div className="p-5 space-y-4 bg-white rounded-md shadow-md ">
                <div className="w-full">
                    <form onSubmit={updatePassword}>
                        <div className="mt-6 space-y-5">
                            <div>
                                <Label htmlFor="current_password">
                                    <span className="text-rose-500">*</span>
                                    Password Lama
                                </Label>
                                <Input
                                    className="mt-2"
                                    id="current_password"
                                    type="password"
                                    name="current_password"
                                    value={data.current_password}
                                    onChange={(e) =>
                                        setData(
                                            "current_password",
                                            e.target.value
                                        )
                                    }
                                />

                                <InputError message={errors.current_password} />
                            </div>

                            <div>
                                <Label htmlFor="password">
                                    <span className="text-rose-500">*</span>
                                    Password Baru
                                </Label>
                                <Input
                                    className="mt-2"
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />

                                <InputError message={errors.password} />
                            </div>

                            <div>
                                <Label htmlFor="password_confirmation">
                                    <span className="text-rose-500">*</span>
                                    Konfirmasi Password Baru
                                </Label>
                                <Input
                                    className="mt-2"
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                />

                                <InputError
                                    message={errors.password_confirmation}
                                />
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

export default ChangePassword;
