"use client";

import { useState } from "react";
import Link from "next/link";
import { IconMenu2, IconX } from "@/components/ui/Icon";

type LinkItem = {
    name: string;
    href: string;
};

type MobileMenuProps = {
    links: LinkItem[];
};

export default function MobileMenu({ links }: MobileMenuProps) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                aria-label={open ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={open}
                aria-controls="mobile-navigation"
                onClick={() => setOpen((current) => !current)}
                className="grid size-9 place-items-center border border-transparent text-white/70 transition-colors duration-300 hover:border-white/15 hover:bg-white/5 hover:text-amber-400 md:hidden"
            >
                {open ? (
                    <IconX
                        aria-hidden="true"
                        className="size-5"
                        strokeWidth={1.5}
                    />
                ) : (
                    <IconMenu2
                        aria-hidden="true"
                        className="size-5"
                        strokeWidth={1.5}
                    />
                )}
            </button>

            {open && (
                <nav
                    id="mobile-navigation"
                    aria-label="Navegación móvil"
                    className="absolute inset-IconX-0 top-full border-b border-white/10 bg-[#0a0d0d]/98 px-4 py-6 backdrop-blur-xl md:hidden"
                >
                    <ul className="flex flex-col">
                        {links.map(({ name, href }, index) => (
                            <li
                                key={href}
                                className="border-b border-white/10 last:border-b-0"
                            >
                                <Link
                                    href={href}
                                    onClick={() => setOpen(false)}
                                    className="group flex items-center justify-between py-4 text-sm font-medium uppercase tracking-[0.12em] text-white/70 transition-colors duration-300 hover:text-white"
                                >
                                    <span>{name}</span>

                                    <span
                                        aria-hidden="true"
                                        className="font-mono text-xs text-white/25 transition-colors group-hover:text-amber-400"
                                    >
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div
                        aria-hidden="true"
                        className="mt-6 flex items-center gap-2"
                    >
                        <span className="h-px w-8 bg-amber-400" />
                        <span className="font-mono text-xs uppercase tracking-widest text-white/30">
                            Prince / 001
                        </span>
                    </div>
                </nav>
            )}
        </>
    );
}