"use client";

import { useState } from "react";
import Link from "next/link";
import { IconEye, IconEyeOff, IconLock } from "@/components/ui/Icon";

export function PasswordField() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="mt-7">
            <div className="flex items-center justify-between gap-4">
                <label
                    htmlFor="password"
                    className="text-xs font-bold tracking-subtitle text-soft"
                >
                    Contraseña
                </label>

                <Link
                    href="/forgot-password"
                    className="text-micro font-semibold text-brand transition-colors hover:text-brand-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
                >
                    ¿Olvidaste tu contraseña?
                </Link>
            </div>

            <div className="relative mt-3 border-b border-line transition-colors focus-within:border-brand">
                <IconLock
                    aria-hidden="true"
                    size={19}
                    strokeWidth={1.8}
                    className="absolute left-0 top-1/2 -translate-y-1/2 text-muted"
                />

                <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="••••••••"
                    required
                    className="w-full bg-transparent py-3 pr-11 pl-8 text-sm text-heading outline-none placeholder:text-placeholder focus-visible:outline-none"
                />

                <button
                    type="button"
                    onClick={() => setShowPassword((current) => !current)}
                    aria-label={
                        showPassword
                            ? "Ocultar contraseña"
                            : "Mostrar contraseña"
                    }
                    aria-pressed={showPassword}
                    className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer p-2 text-muted transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-brand"
                >
                    {showPassword ? (
                        <IconEye
                            aria-hidden="true"
                            size={19}
                            strokeWidth={1.8}
                        />
                    ) : (
                        <IconEyeOff
                            aria-hidden="true"
                            size={19}
                            strokeWidth={1.8}
                        />
                    )}
                </button>
            </div>
        </div>
    );
}