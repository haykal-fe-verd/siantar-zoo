import React from "react";
import { Link } from "@inertiajs/react";

import { Button } from "@/components/ui/button";

function Pagination({ links }) {
    return (
        <div className="flex flex-wrap items-center justify-center py-4 space-x-2">
            {links.map((item, index) => {
                return (
                    <Button
                        key={index}
                        variant={item.active ? "" : "outline"}
                        size="sm"
                        disabled={!item.url}
                        className={`p-0 ${index > 0 ? "ml-2" : ""}`}
                        style={{ flexShrink: 0, minWidth: "30px" }}
                    >
                        <Link
                            href={item.url}
                            preserveScroll
                            preserveState
                            className="px-3"
                        >
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: item.label,
                                }}
                            />
                        </Link>
                    </Button>
                );
            })}
        </div>
    );
}

export default Pagination;
