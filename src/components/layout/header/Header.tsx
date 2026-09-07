import Link from "next/link";
import { IconUser, IconBell} from "@/components/ui/Icon";
import MobileMenu from "./MobileMenu";

const links = [
    { name: "Home", href: "/" },
    { name: "Cortes", href: "/cortes" },
    { name: "Barberos", href: "/barberos" },
    { name: "Reservas", href: "/reservas" },
];

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0d0d]/95 backdrop-blur-xl">
            <div className="flex h-14 items-center justify-between px-4 sm:h-16 sm:px-6 md:grid md:grid-cols-[1fr_auto_1fr] lg:px-8 2xl:px-10">
                
                {/* Marca */}
                <div className="flex items-center justify-start">
                    <Link
                        href="/"
                        aria-label="Prince Barber Shop - Inicio"
                        className="group flex items-center gap-2.5 whitespace-nowrap sm:gap-3"
                    >
                        <span
                            aria-hidden="true"
                            className="size-2 shrink-0 bg-amber-400 transition-transform duration-300 group-hover:rotate-45"
                        />

                        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white sm:text-sm">
                            Prince Barber Shop
                        </span>
                    </Link>
                </div>

                {/* Navegación escritorio */}
                <nav
                    aria-label="Navegación principal"
                    className="hidden md:block"
                >
                    <ul className="flex items-center gap-6 lg:gap-8">
                        {links.map(({ name, href }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className="group relative block py-5 text-xs font-medium uppercase tracking-[0.12em] text-white/65 transition-colors duration-300 hover:text-white"
                                >
                                    {name}

                                    <span
                                        aria-hidden="true"
                                        className="absolute inset-x-0 bottom-3 h-px origin-left scale-x-0 bg-amber-400 transition-transform duration-300 group-hover:scale-x-100"
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Acciones */}
                <div className="flex items-center justify-end gap-1">
                    <Link
                        href="/notificaciones"
                        aria-label="Notificaciones"
                        className="hidden size-9 place-items-center border border-transparent text-white/60 transition-colors duration-300 hover:border-white/15 hover:bg-white/5 hover:text-amber-400 sm:grid"
                    >
                        <IconBell
                            aria-hidden="true"
                            className="size-4.5"
                            strokeWidth={1.5}
                        />
                    </Link>

                    <Link
                        href="/perfil"
                        aria-label="Perfil"
                        className="grid size-9 place-items-center border border-transparent text-white/60 transition-colors duration-300 hover:border-white/15 hover:bg-white/5 hover:text-amber-400"
                    >
                        <IconUser
                            aria-hidden="true"
                            className="size-4.5"
                            strokeWidth={1.5}
                        />
                    </Link>

                    <MobileMenu links={links} />
                </div>
            </div>
        </header>
    );
}