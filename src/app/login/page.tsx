import Link from "next/link";
import { IconArrowRight , IconMail } from "@/components/ui/Icon";
import { PasswordField } from "@/components/auth/password-field";

export default function LoginPage() {
    return (
        <div className="relative min-h-dvh overflow-hidden bg-canvas text-copy">
            <div
                aria-hidden="true"
                className="absolute inset-0 scale-105 bg-[url('/images/barber-login.jpg')] bg-cover bg-center opacity-35 blur-[2px]"
            />

            <div
                aria-hidden="true"
                className="absolute inset-0 bg-black/75"
            />

            <div className="relative z-10 flex min-h-dvh flex-col">
                <header className="px-4 pt-7 text-center">
                    <h1 className="font-serif text-2xl font-medium tracking-brand text-brand sm:text-brand-title">
                        PRINCE BARBER SHOP
                    </h1>

                    <p className="mt-2 text-xs font-semibold tracking-subtitle text-muted">
                        Bienvenido a nuestro salón de belleza
                    </p>
                </header>

                <main className="flex flex-1 items-center justify-center px-4 py-8">
                    <section
                        aria-labelledby="login-title"
                        className="w-full max-w-md bg-surface/95 px-7 py-10 shadow-2xl shadow-black/40 sm:px-12 sm:py-12"
                    >
                        <h2
                            id="login-title"
                            className="text-xl font-bold tracking-heading text-heading"
                        >
                            Iniciar sesión en tu cuenta
                        </h2>

                        <form
                            action="/api/login"
                            method="post"
                            className="mt-8"
                        >
                            <fieldset>
                                <legend className="sr-only">
                                    Selecciona el tipo de cuenta
                                </legend>

                                <div className="grid grid-cols-2 border-b border-line">
                                    <label className="relative flex cursor-pointer justify-center pb-3 text-sm font-semibold">
                                        <input
                                            type="radio"
                                            name="role"
                                            value="client"
                                            defaultChecked
                                            className="peer sr-only"
                                        />

                                        <span className="text-tab transition-colors peer-checked:text-brand">
                                            Cliente
                                        </span>

                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-x-0 -bottom-px h-0.5 scale-x-0 bg-brand transition-transform peer-checked:scale-x-100"
                                        />
                                    </label>

                                    <label className="relative flex cursor-pointer justify-center pb-3 text-sm font-semibold">
                                        <input
                                            type="radio"
                                            name="role"
                                            value="staff"
                                            className="peer sr-only"
                                        />

                                        <span className="text-tab transition-colors peer-checked:text-brand">
                                            Barbero / Admin
                                        </span>

                                        <span
                                            aria-hidden="true"
                                            className="absolute inset-x-0 -bottom-px h-0.5 scale-x-0 bg-brand transition-transform peer-checked:scale-x-100"
                                        />
                                    </label>
                                </div>
                            </fieldset>

                            <div className="mt-8">
                                <label
                                    htmlFor="email"
                                    className="block text-xs font-bold tracking-subtitle text-soft"
                                >
                                    Correo electrónico
                                </label>

                                <div className="relative mt-3 border-b border-line transition-colors focus-within:border-brand">
                                    <IconMail
                                        aria-hidden="true"
                                        size={19}
                                        strokeWidth={1.8}
                                        className="absolute left-0 top-1/2 -translate-y-1/2 text-muted"
                                    />

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        placeholder="Ingresa tu correo"
                                        required
                                        className="w-full bg-transparent py-3 pr-3 pl-8 text-sm text-heading outline-none placeholder:text-placeholder"
                                    />
                                </div>
                            </div>

                            <PasswordField />

                            <label className="mt-8 flex w-fit cursor-pointer items-center gap-3 text-sm text-soft">
                                <input
                                    type="checkbox"
                                    name="remember"
                                    className="size-4 cursor-pointer accent-brand"
                                />

                                <span>Recordarme durante 30 días</span>
                            </label>

                            <button
                                type="submit"
                                className="mt-12 flex w-full cursor-pointer items-center justify-center gap-3 bg-brand px-6 py-5 text-xs font-bold tracking-action text-brand-ink transition-colors hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                            >
                                <span>INICIAR SESIÓN</span>

                                <IconArrowRight
                                    aria-hidden="true"
                                    size={18}
                                    strokeWidth={2}
                                />
                            </button>
                        </form>

                        <p className="mt-8 text-center text-sm text-muted">
                            ¿Nuevo en Prince?{" "}
                            <Link
                                href="/register"
                                className="font-bold text-brand transition-colors hover:text-brand-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                            >
                                Solicitar invitación
                            </Link>
                        </p>
                    </section>
                </main>

                <footer className="px-4 pb-8 text-center">
                    <small className="text-micro tracking-footer text-footer">
                        © 2026 PRINCE BARBER SHOP
                    </small>
                </footer>
            </div>
        </div>
    );
}