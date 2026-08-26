# Barbería 💈

Aplicación web para gestionar una barbería: agenda de citas y catálogo de servicios.

## ✨ Características

- 📅 Agenda de citas para clientes.
- 💇‍♂️ Visualización de los servicios ofrecidos.
- 🗄️ Persistencia de datos en **Supabase local**.
- ☁️ Exposición del entorno local mediante **túnel de Cloudflare**.
- ⚡ Interfaz rápida y responsive con Tailwind CSS.

## 🛠️ Tecnologías

- [Next.js 16](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/) (local con Supabase CLI)
- [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/) (`cloudflared`)
- [TypeScript](https://www.typescriptlang.org/)

## 📋 Requisitos previos

- Node.js 20 o superior.
- [pnpm](https://pnpm.io/es/).
- [Docker](https://www.docker.com/) (requerido por Supabase local).
- [Supabase CLI](https://supabase.com/docs/guides/cli).
- [cloudflared](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/).

## 🚀 Instalación

1. Clona el repositorio:

   ```bash
   git clone <url-del-repositorio>
   cd Barberia
   ```

2. Instala las dependencias:

   ```bash
   pnpm install
   ```

3. Inicia Supabase en local:

   ```bash
   supabase init
   supabase start
   ```

   Al finalizar, `supabase start` imprime las credenciales locales. Crea un
   archivo `.env.local` con esos valores:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon-key-que-imprime-supabase-start>
   ```

4. Inicia el servidor de desarrollo:

   ```bash
   pnpm dev
   ```

   Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## ☁️ Exponer la app con Cloudflare Tunnel

El despliegue se hace en **local** y se expone a internet mediante un túnel de
`cloudflared`.

1. Autentícate y crea el túnel (solo la primera vez):

   ```bash
   cloudflared tunnel login
   cloudflared tunnel create barberia
   ```

2. Asocia un dominio al túnel (requiere un dominio gestionado en Cloudflare):

   ```bash
   cloudflared tunnel route dns barberia barberia.tu-dominio.com
   ```

3. Crea el archivo de configuración `~/.cloudflared/config.yml`:

   ```yaml
   tunnel: <TUNNEL_ID>            # el que devuelve `cloudflared tunnel create`
   credentials-file: C:\Users\<tu-usuario>\.cloudflared\<TUNNEL_ID>.json

   ingress:
     - hostname: barberia.tu-dominio.com
       service: http://localhost:3000
     - service: http_status:404
   ```

4. Levanta el túnel:

   ```bash
   cloudflared tunnel run barberia
   ```

   La app quedará disponible en `https://barberia.tu-dominio.com`.

## 🗄️ Base de datos (Supabase local)

- **URL de la API:** `http://127.0.0.1:54321`
- **Studio (panel de administración):** `http://127.0.0.1:54323`
- **Base de datos (Postgres):** `postgresql://postgres:postgres@127.0.0.1:54322/postgres`
- **Parar Supabase:** `supabase stop`
- **Reiniciar desde cero:** `supabase stop --no-backup && supabase start`

> 💡 Las credenciales exactas se muestran al ejecutar `supabase start`.

## 🎯 Objetivo

Proyecto de práctica para aprender y mejorar el uso de Next.js 16, Tailwind CSS,
Supabase (local) y TypeScript, desplegado sobre infraestructura local y expuesto
mediante Cloudflare Tunnel.

## 📄 Licencia

Este proyecto es solo con fines educativos y no tiene licencia de uso. No se permite su uso comercial ni distribución sin autorización expresa del autor.