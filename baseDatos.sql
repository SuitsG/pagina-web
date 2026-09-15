-- 1. Clientes
CREATE TABLE clientes (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR(20) NOT NULL,
    email VARCHAR(100) UNIQUE,
    creado_en TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- 2. Barberos
CREATE TABLE barberos (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR(20),
    activo BOOLEAN NOT NULL DEFAULT TRUE
);

-- 3. Catálogo de Servicios
CREATE TABLE servicios (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio NUMERIC(10, 2) NOT NULL CHECK (precio >= 0),
    duracion_min INT NOT NULL CHECK (duracion_min > 0)
);

-- 4. Horarios semanales de trabajo por barbero (1 = Lunes, 7 = Domingo)
CREATE TABLE horarios_barbero (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    barbero_id INT NOT NULL REFERENCES barberos(id) ON DELETE CASCADE,
    dia_semana INT NOT NULL CHECK (dia_semana BETWEEN 1 AND 7),
    hora_inicio TIME NOT NULL,
    hora_fin TIME NOT NULL,
    CONSTRAINT chk_rango_horario CHECK (hora_fin > hora_inicio)
);

-- 5. Citas agendadas
CREATE TABLE citas (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    cliente_id INT NOT NULL REFERENCES clientes(id),
    barbero_id INT NOT NULL REFERENCES barberos(id),
    fecha_inicio TIMESTAMPTZ NOT NULL,
    fecha_fin TIMESTAMPTZ NOT NULL,
    estado VARCHAR(20) NOT NULL DEFAULT 'confirmada' 
        CHECK (estado IN ('pendiente', 'confirmada', 'completada', 'cancelada')),
    notas TEXT,
    creado_en TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_rango_cita CHECK (fecha_fin > fecha_inicio)
);

-- 6. Detalle de servicios por cita
CREATE TABLE cita_servicios (
    cita_id INT NOT NULL REFERENCES citas(id) ON DELETE CASCADE,
    servicio_id INT NOT NULL REFERENCES servicios(id),
    precio_al_momento NUMERIC(10, 2) NOT NULL,
    PRIMARY KEY (cita_id, servicio_id)
);

-- Índices con los nuevos nombres de columnas
CREATE INDEX idx_citas_barbero_rango ON citas (barbero_id, fecha_inicio, fecha_fin);
CREATE INDEX idx_horarios_barbero_dia ON horarios_barbero (barbero_id, dia_semana);