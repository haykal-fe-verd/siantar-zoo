import React from "react";
import { Head, Link, useForm, usePage } from "@inertiajs/react";
import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import InputError from "@/components/input-error";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import GuestLayout from "@/layouts/guest-layout";
import { useToast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";

function ForgotPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
    });
    const { toast } = useToast();

    React.useEffect(() => {
        return () => {
            reset("email");
        };
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("password.email"));
    };

    return (
        <GuestLayout>
            <Head title="Lupa Password" />
            <section className="flex flex-col items-center justify-center h-screen px-6 py-8 mx-auto">
                <Card className="w-full rounded-lg shadow-2xl sm:max-w-md">
                    <CardHeader>
                        <CardTitle className="flex flex-col items-center justify-center">
                            <Link href={route("home")}>
                                <img
                                    src="/logo-zoo2.png"
                                    alt="Logo"
                                    className="w-32 h-32 rounded-full"
                                />
                            </Link>
                        </CardTitle>
                        <CardDescription className="text-justify">
                            Anda lupa password? jangan khawatir, beritahukan
                            kami alamat email anda agar kami bisa mengirimkan
                            link untuk reset password ke email anda.
                        </CardDescription>
                    </CardHeader>
                    <form onSubmit={onSubmit}>
                        <CardContent className="space-y-4 md:space-y-6">
                            {/* email */}
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="text"
                                    name="email"
                                    autoComplete="email"
                                    placeholder="email@domain.com"
                                    className="mt-2"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />

                                <InputError message={errors.email} />
                            </div>
                        </CardContent>
                        <CardFooter>
                            {/* button */}
                            <Button
                                className="flex items-center justify-center w-full gap-3"
                                disabled={processing}
                            >
                                {processing && (
                                    <Loader2 className="animate-spin" />
                                )}
                                Kirim link reset password
                            </Button>
                        </CardFooter>
                    </form>
                </Card>
            </section>
        </GuestLayout>
    );
}

export default ForgotPassword;
