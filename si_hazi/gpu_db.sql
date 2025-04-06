-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2025. Ápr 06. 17:19
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `gpu_db`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gpu_info`
--

CREATE TABLE `gpu_info` (
  `id` int(11) NOT NULL,
  `marka` varchar(50) NOT NULL,
  `modell` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `gpu_info`
--

INSERT INTO `gpu_info` (`id`, `marka`, `modell`) VALUES
(1, 'NVIDIA', 'GeForce RTX 4090'),
(2, 'NVIDIA', 'GeForce RTX 4080'),
(3, 'NVIDIA', 'GeForce RTX 3090'),
(4, 'NVIDIA', 'GeForce RTX 3080'),
(5, 'AMD', 'Radeon RX 7900 XTX'),
(6, 'AMD', 'Radeon RX 7800 XT'),
(7, 'AMD', 'Radeon RX 6800 XT'),
(8, 'AMD', 'Radeon RX 6700 XT');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `gpu_specs`
--

CREATE TABLE `gpu_specs` (
  `id` int(11) NOT NULL,
  `gpu_id` int(11) NOT NULL,
  `vram` int(11) NOT NULL,
  `boost_clock` int(11) NOT NULL,
  `cores` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `gpu_specs`
--

INSERT INTO `gpu_specs` (`id`, `gpu_id`, `vram`, `boost_clock`, `cores`) VALUES
(1, 1, 24576, 2520, 16384),
(2, 2, 16384, 2505, 9728),
(3, 3, 24576, 1695, 10496),
(4, 4, 10240, 1710, 8704),
(5, 5, 24576, 2500, 6144),
(6, 6, 16384, 2475, 3840),
(7, 7, 16384, 2250, 4608),
(8, 8, 12288, 2581, 2560);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `gpu_info`
--
ALTER TABLE `gpu_info`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `gpu_specs`
--
ALTER TABLE `gpu_specs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `gpu_id` (`gpu_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `gpu_info`
--
ALTER TABLE `gpu_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT a táblához `gpu_specs`
--
ALTER TABLE `gpu_specs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `gpu_specs`
--
ALTER TABLE `gpu_specs`
  ADD CONSTRAINT `gpu_specs_ibfk_1` FOREIGN KEY (`gpu_id`) REFERENCES `gpu_info` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
