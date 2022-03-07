-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 05, 2022 at 03:26 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `backend`
--

-- --------------------------------------------------------

--
-- Table structure for table `article`
--

CREATE TABLE `article` (
  `ID` int(11) NOT NULL,
  `Judul` text NOT NULL,
  `Isi` text NOT NULL,
  `ImageUrl` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `article`
--

INSERT INTO `article` (`ID`, `Judul`, `Isi`, `ImageUrl`) VALUES
(1, 'Cara Merawat HP Android Agar Optimal dan Memperpanjang Masa Pakai', 'Umur ponsel tidak hanya bergantung pada spesifikasi yang ada pada perangkatnya, namun cara penggunaan. Penggunaan ponsel Android yang sembarangan bisa memperpendek usianya.', 'https://akcdn.detik.net.id/visual/2022/01/04/samsung-galaxy-s21-fe-5g_169.png?w=650'),
(13, 'tes', 'Jika kamu mencintai seseorang sebelum menikah, maka tidak ada yang halal bagimu kecuali doa, karena cinta adalah doa, maka cintailah orang yang kamu cinta dengan mendoakannya\n\nAl-Habib Ali Zaenal Abidin Al-Kaff', 'https://akcdn.detik.net.id/community/media/visual/2018/09/07/1e57dbcf-ab47-459c-b7db-cc4a4511af12_169.jpeg?w=620'),
(14, 'tes13', 'test13', 'https://akcdn.detik.net.id/community/media/visual/2018/09/07/1e57dbcf-ab47-459c-b7db-cc4a4511af12_169.jpeg?w=620'),
(15, 'test14', 'test14', 'https://akcdn.detik.net.id/community/media/visual/2018/09/07/1e57dbcf-ab47-459c-b7db-cc4a4511af12_169.jpeg?w=620'),
(16, 'test12', 'test12', 'https://akcdn.detik.net.id/community/media/visual/2018/09/07/1e57dbcf-ab47-459c-b7db-cc4a4511af12_169.jpeg?w=620');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `article`
--
ALTER TABLE `article`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
