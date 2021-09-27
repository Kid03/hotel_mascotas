-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-09-2021 a las 18:02:04
-- Versión del servidor: 10.4.20-MariaDB
-- Versión de PHP: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hotel_mascotas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `rut_cliente` bigint(21) UNSIGNED NOT NULL,
  `telefono` bigint(21) NOT NULL,
  `email` varchar(40) NOT NULL,
  `nombre` varchar(15) NOT NULL,
  `apellido` varchar(15) NOT NULL,
  `contrasenia` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`rut_cliente`, `telefono`, `email`, `nombre`, `apellido`, `contrasenia`) VALUES
(1658759600, 9234527521, 'diegonav09@gmail.com', 'Diego', 'Torres', 'avTobalaba13'),
(1728294303, 9482734652, 'momo10@gmail.com', 'Manuel', 'Maureira', 'Naruto2000'),
(1933706509, 9847386278, 'hectord@gmail.com', 'Hector', 'Delgado', 'deb2021'),
(1966427202, 9779722345, 'andresmarrtin@gmail.com', 'Andres', 'Martinez', 'root54'),
(1970361600, 9923552932, 'fav32@gmail.com', 'Fernando', 'Arancibia', 'pelu1204'),
(1975040103, 9242353213, 'carlosxsoto@gmail.com', 'Carlos', 'Soto', 'lucio532');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evento`
--

CREATE TABLE `evento` (
  `id_evento` int(20) UNSIGNED NOT NULL,
  `id_reserva` int(10) UNSIGNED NOT NULL,
  `rut_staff` int(21) UNSIGNED NOT NULL,
  `fecha_evento` date DEFAULT NULL,
  `descripcion_evento` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `evento`
--

INSERT INTO `evento` (`id_evento`, `id_reserva`, `rut_staff`, `fecha_evento`, `descripcion_evento`) VALUES
(1, 2, 1973748506, '2021-07-13', 'sadmqkdqwdlkqw');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `fecha_sanitizacion`
--

CREATE TABLE `fecha_sanitizacion` (
  `id_habitacion` int(5) UNSIGNED NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `fecha_sanitizacion`
--

INSERT INTO `fecha_sanitizacion` (`id_habitacion`, `fecha`) VALUES
(1, '2021-09-03'),
(2, '2021-09-03');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `habitacion`
--

CREATE TABLE `habitacion` (
  `id_habitacion` int(5) UNSIGNED NOT NULL,
  `peso_max` float(4,1) NOT NULL,
  `habitacion_especie` enum('Perro','Gato') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `habitacion`
--

INSERT INTO `habitacion` (`id_habitacion`, `peso_max`, `habitacion_especie`) VALUES
(1, 5.0, 'Perro'),
(2, 10.0, 'Perro'),
(3, 15.5, 'Perro'),
(4, 20.5, 'Perro'),
(5, 7.0, 'Gato'),
(6, 7.0, 'Gato'),
(7, 30.5, 'Perro'),
(8, 40.5, 'Perro');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mascota`
--

CREATE TABLE `mascota` (
  `id_mascota` bigint(51) UNSIGNED NOT NULL,
  `rut_cliente` int(21) UNSIGNED NOT NULL,
  `nombre` varchar(15) NOT NULL,
  `sexo` enum('macho','hembra') NOT NULL,
  `especie` enum('Perro','Gato') NOT NULL,
  `nacimiento` date NOT NULL,
  `descripcion` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `mascota`
--

INSERT INTO `mascota` (`id_mascota`, `rut_cliente`, `nombre`, `sexo`, `especie`, `nacimiento`, `descripcion`) VALUES
(1, 1966427202, 'Oliver', 'macho', 'Perro', '2020-01-03', 'No le gusta comer'),
(2, 1966427202, 'Kurt', 'macho', 'Gato', '2019-05-16', 'Suele pelearse con otros gatos'),
(3, 1933706509, 'guts', 'macho', 'Gato', '2019-12-13', 'Herpes felina'),
(4, 1975040105, 'lucio', 'macho', 'Gato', '2018-07-19', 'narcolepsia'),
(5, 1728294303, 'pelu', 'hembra', 'Perro', '2021-01-21', NULL),
(6, 1658759600, 'Simon', 'macho', 'Perro', '2017-09-28', NULL),
(7, 1970361600, 'Sunny', 'hembra', 'Perro', '2015-09-23', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peso_actual`
--

CREATE TABLE `peso_actual` (
  `id_mascota` bigint(51) UNSIGNED NOT NULL,
  `peso` float NOT NULL,
  `fecha` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `peso_actual`
--

INSERT INTO `peso_actual` (`id_mascota`, `peso`, `fecha`) VALUES
(1, 4.8, '2021-09-26'),
(2, 3.5, '2021-09-26'),
(3, 2.8, '2021-09-26'),
(4, 4.5, '2021-09-26'),
(5, 10.7, '2021-09-26'),
(6, 15.4, '2021-09-26'),
(7, 8.3, '2021-09-26');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva`
--

CREATE TABLE `reserva` (
  `id_reserva` int(10) UNSIGNED NOT NULL,
  `id_mascota` bigint(51) UNSIGNED NOT NULL,
  `id_habitacion` int(5) UNSIGNED NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_termino` date NOT NULL,
  `fecha_reserva` date NOT NULL,
  `estado_reserva` enum('abortado','vigente','pagado','recepcion','terminado') NOT NULL,
  `estado_pago` enum('espera','pagado') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `reserva`
--

INSERT INTO `reserva` (`id_reserva`, `id_mascota`, `id_habitacion`, `fecha_inicio`, `fecha_termino`, `fecha_reserva`, `estado_reserva`, `estado_pago`) VALUES
(1, 1, 1, '2021-09-09', '2021-09-14', '2021-09-06', 'pagado', 'pagado'),
(2, 2, 5, '2021-09-01', '2021-09-03', '2021-08-19', 'pagado', 'pagado'),
(3, 3, 5, '2021-08-18', '2021-08-19', '2021-09-06', 'abortado', ''),
(4, 4, 5, '2021-09-27', '2021-09-30', '2021-09-18', 'vigente', 'espera'),
(5, 5, 3, '2021-09-02', '2021-09-09', '2021-09-01', 'pagado', 'pagado'),
(6, 6, 7, '2021-09-24', '2021-09-27', '2021-09-21', 'abortado', ''),
(7, 7, 2, '2021-08-20', '2021-08-22', '2021-09-15', 'pagado', 'pagado'),
(8, 8, 3, '2021-09-15', '2021-09-29', '2021-08-25', 'vigente', 'espera');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `staff`
--

CREATE TABLE `staff` (
  `rut_staff` int(21) UNSIGNED NOT NULL,
  `email_institucional` varchar(40) NOT NULL,
  `rol` enum('veterinario','administrador','asistente') NOT NULL,
  `telefono` int(21) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `staff`
--

INSERT INTO `staff` (`rut_staff`, `email_institucional`, `rol`, `telefono`) VALUES
(1973748506, 'DIEGO.TORRES@staff.cl', 'veterinario', 948273786),
(1986738305, 'CARLOS.EDUARDO@staff.cl', 'administrador', 3242366213);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`rut_cliente`);

--
-- Indices de la tabla `evento`
--
ALTER TABLE `evento`
  ADD PRIMARY KEY (`id_evento`),
  ADD KEY `FK_id_reserva_1` (`id_reserva`),
  ADD KEY `FK_rut_staff_1` (`rut_staff`);

--
-- Indices de la tabla `fecha_sanitizacion`
--
ALTER TABLE `fecha_sanitizacion`
  ADD PRIMARY KEY (`id_habitacion`);

--
-- Indices de la tabla `habitacion`
--
ALTER TABLE `habitacion`
  ADD PRIMARY KEY (`id_habitacion`);

--
-- Indices de la tabla `mascota`
--
ALTER TABLE `mascota`
  ADD PRIMARY KEY (`id_mascota`),
  ADD KEY `rut_cliente` (`rut_cliente`);

--
-- Indices de la tabla `peso_actual`
--
ALTER TABLE `peso_actual`
  ADD PRIMARY KEY (`id_mascota`);

--
-- Indices de la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD PRIMARY KEY (`id_reserva`),
  ADD KEY `id_mascota` (`id_mascota`),
  ADD KEY `id_habitacion` (`id_habitacion`);

--
-- Indices de la tabla `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`rut_staff`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
