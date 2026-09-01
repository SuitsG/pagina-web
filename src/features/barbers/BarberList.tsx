import Image from 'next/image';
import Link from 'next/link';
import type { BarberCartData } from './types/barber-cart';
import { IconArrowUpRight, IconStar } from '@/components/ui/Icon';


interface BarberCardProps {
  barbers: BarberCartData[];
}

export default function BarberList({ barbers }: BarberCardProps) {

  const barberCount = String(barbers.length).padStart(2, "0");
  return (
    <section
      className="border-y border-white/10 bg-[#0a0d0d] text-white"
      aria-labelledby="barbers-title"
    >
      <div className="w-full px-6 py-20 sm:px-10 sm:py-24 lg:px-16 lg:py-28 xl:px-20 2xl:px-24">
        <header className="flex flex-col gap-8 border-b border-white/10 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="size-2 bg-amber-400"
              />

              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
                Nuestro equipo / {barberCount}
              </p>
            </div>

            <h2
              id="barbers-title"
              className="text-4xl font-medium uppercase leading-none tracking-[-0.045em] text-[#e6ddd8] sm:text-5xl lg:text-6xl"
            >
              Nuestros barberos
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-white/55 sm:text-base">
            Profesionales enfocados en la precisión, la técnica y el estilo de cada
            cliente.
          </p>
        </header>

        <ul className="mt-12 grid border-l border-t border-white/10 sm:grid-cols-2 xl:grid-cols-4">
          {barbers.map((barber, index) => (
            <li
              key={barber.id}
              className="border-b border-r border-white/10"
            >
              <article className="h-full">
                <Link
                  href={barber.href}
                  className="group flex h-full flex-col bg-white/2 transition-colors duration-300 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-amber-400"
                >
                  <div className="relative aspect-4/5 overflow-hidden bg-[#141818]">
                    <Image
                      src={barber.imageUrl}
                      alt={barber.imageAlt}
                      width={500}
                      height={500}
                      decoding="async"
                      className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-[1.025] group-hover:grayscale-0 motion-reduce:transform-none"
                    />

                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-black/20"
                    />

                    <span
                      aria-hidden="true"
                      className="absolute left-4 top-4 border border-white/15 bg-black/35 px-2.5 py-1.5 font-mono text-[9px] tracking-[0.18em] text-white/70 backdrop-blur-sm"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                      aria-hidden="true"
                      className="absolute bottom-4 right-4 font-mono text-[9px] uppercase tracking-[0.18em] text-white/45"
                    >
                      Prince / Team
                    </span>
                  </div>

                  <div className="relative flex flex-1 flex-col p-5">
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-amber-400 transition-transform duration-300 group-hover:scale-x-100"
                    />

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-400/75">
                          Barbero
                        </p>

                        <h3 className="text-lg font-medium uppercase leading-tight tracking-[-0.02em] text-[#e6ddd8]">
                          {barber.name}
                        </h3>
                      </div>

                      <span
                        aria-hidden="true"
                        className="grid size-9 shrink-0 place-items-center border border-white/10 text-white/40 transition-colors duration-300 group-hover:border-amber-400/50 group-hover:text-amber-400"
                      >
                        <IconArrowUpRight
                          className="size-4"
                          strokeWidth={1.5}
                        />
                      </span>
                    </div>

                    {barber.description && (
                      <p className="mt-4 line-clamp-3 text-sm leading-relaxed text-white/45">
                        {barber.description}
                      </p>
                    )}

                    <div className="mt-auto flex items-center justify-between gap-4 pt-8">
                      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
                        <span className="text-white/75">
                          {String(barber.serviceCount).padStart(2, "0")}
                        </span>{" "}
                        servicios
                      </p>

                      {barber.rating !== undefined && (
                        <span
                          aria-label={`Calificación: ${barber.rating} de 5`}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-400"
                        >
                          <IconStar
                            aria-hidden="true"
                            className="size-3.5"
                            fill="currentColor"
                            strokeWidth={1.5}
                          />

                          {barber.rating.toFixed(1)}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
