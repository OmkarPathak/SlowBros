-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 06, 2016 at 02:46 AM
-- Server version: 5.7.13-log
-- PHP Version: 7.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `slowbros`
--

-- --------------------------------------------------------

--
-- Table structure for table `init`
--

CREATE TABLE `init` (
  `Name_Of_File` varchar(1000) DEFAULT NULL,
  `Path_Of_File` varchar(1000) DEFAULT NULL,
  `HTML` varchar(1000) DEFAULT NULL,
  `extra` text,
  `extra2` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `init`
--

INSERT INTO `init` (`Name_Of_File`, `Path_Of_File`, `HTML`, `extra`, `extra2`) VALUES
('rpi_motion.php', '/file/rpi_motion.php', '<li><a href="rpi_motion.php">Motion</a></li>', NULL, NULL),
('rpi_os_install.php', '/file/rpi_os_install.php', '<li><a href="rpi_os_install.php">RPi OS (Jessie) Install<a></li>', NULL, NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
