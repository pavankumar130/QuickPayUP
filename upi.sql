-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 17, 2021 at 07:02 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `upi`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `Name` varchar(10) NOT NULL,
  `Roll_no.` varchar(10) NOT NULL,
  `Mobile_no,` int(10) NOT NULL,
  `email` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `banka`
--

CREATE TABLE `banka` (
  `Aadhar_no` int(10) NOT NULL,
  `Account_no` int(10) NOT NULL,
  `Balance` int(50) NOT NULL,
  `Admin` varchar(15) NOT NULL,
  `password` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `banka`
--

INSERT INTO `banka` (`Aadhar_no`, `Account_no`, `Balance`, `Admin`, `password`) VALUES
(18, 1894, 1000000, 'null', 1914),
(91, 9156, 1001000, 'null', 9176),
(101, 10174, 11213, 'null', 10194),
(123, 12331, 22565558, 'null', 12351),
(1111, 111158, 99500, 'null', 111178),
(6789, 678915, 1498500, 'null', 678935),
(3, 2147483647, 5, 'null', 2147483647);

-- --------------------------------------------------------

--
-- Table structure for table `bankb`
--

CREATE TABLE `bankb` (
  `Aadhar_no` int(10) NOT NULL,
  `Account_no` int(30) NOT NULL,
  `Balance` int(10) NOT NULL,
  `Admin` varchar(15) NOT NULL,
  `password` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bankb`
--

INSERT INTO `bankb` (`Aadhar_no`, `Account_no`, `Balance`, `Admin`, `password`) VALUES
(523, 52386, 22351, 'null', 52406);

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `Name` varchar(15) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `Phone_no` int(20) DEFAULT NULL,
  `Aadhar_no` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`Name`, `Email`, `Phone_no`, `Aadhar_no`) VALUES
('mihir ', '13mihir2001@gmail.co ', 223, 3),
('pavan ', '20bcs130@iiitdmj.ac.in ', 2147483647, 18),
('vamshi ', '20bcs112@iiitdmj.ac.in ', 2147483647, 91),
('mihir ', '13mihir2001@gma', 223, 101),
('mayank ', 'mayank@gmail.co', 4458, 123),
('Ninja ', 'ninja@gmal.con ', 4453, 523),
('mihir ', '20bcs130@iiitdmj.ac.in ', 2147483647, 1111),
('poornima ', 'poornima@iiitdmj.ac.in ', 2147483647, 6789);

-- --------------------------------------------------------

--
-- Table structure for table `paise_de`
--

CREATE TABLE `paise_de` (
  `Aadhar_no` int(10) NOT NULL,
  `user_name` varchar(10) NOT NULL,
  `password_pd` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `paise_de`
--

INSERT INTO `paise_de` (`Aadhar_no`, `user_name`, `password_pd`) VALUES
(18, '185', 1896),
(1111, '111190', 111148),
(91, '910', 9117),
(6789, '678922', 678994);

-- --------------------------------------------------------

--
-- Table structure for table `request_to_admin`
--

CREATE TABLE `request_to_admin` (
  `Amount` int(10) DEFAULT NULL,
  `Aadhar_no` int(10) NOT NULL,
  `Account_no` int(30) NOT NULL,
  `Admin_id` varchar(10) DEFAULT NULL,
  `Doc` longblob DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  `Name` varchar(20) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `Phone_no` int(20) NOT NULL,
  `Bank` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `request_to_admin`
--

INSERT INTO `request_to_admin` (`Amount`, `Aadhar_no`, `Account_no`, `Admin_id`, `Doc`, `status`, `Name`, `Email`, `Phone_no`, `Bank`) VALUES
(15000000, 1234, 123475, NULL, '', ' NULL ', 'Meravath pavan kumar', '20bcs130@iiitdmj.ac.in', 2147483647, 'Bank-A');

-- --------------------------------------------------------

--
-- Table structure for table `transfer`
--

CREATE TABLE `transfer` (
  `Account_no` int(20) NOT NULL,
  `password` int(10) NOT NULL,
  `Balance` int(10) NOT NULL,
  `Bank` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transfer`
--

INSERT INTO `transfer` (`Account_no`, `password`, `Balance`, `Bank`) VALUES
(1894, 1914, 1000000, 'banka'),
(9156, 9176, 1001000, 'banka'),
(111158, 111178, 99500, 'banka'),
(678915, 678935, 1498500, 'banka');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`Roll_no.`);

--
-- Indexes for table `banka`
--
ALTER TABLE `banka`
  ADD PRIMARY KEY (`Account_no`),
  ADD KEY `Aadhar_no.` (`Aadhar_no`);

--
-- Indexes for table `bankb`
--
ALTER TABLE `bankb`
  ADD PRIMARY KEY (`Account_no`),
  ADD KEY `Aadhar_no` (`Aadhar_no`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`Aadhar_no`);

--
-- Indexes for table `paise_de`
--
ALTER TABLE `paise_de`
  ADD KEY `paise_de_ibfk_1` (`Aadhar_no`);

--
-- Indexes for table `transfer`
--
ALTER TABLE `transfer`
  ADD PRIMARY KEY (`Account_no`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `banka`
--
ALTER TABLE `banka`
  ADD CONSTRAINT `banka_ibfk_1` FOREIGN KEY (`Aadhar_no`) REFERENCES `customer` (`Aadhar_no`);

--
-- Constraints for table `bankb`
--
ALTER TABLE `bankb`
  ADD CONSTRAINT `bankb_ibfk_1` FOREIGN KEY (`Aadhar_no`) REFERENCES `customer` (`Aadhar_no`);

--
-- Constraints for table `paise_de`
--
ALTER TABLE `paise_de`
  ADD CONSTRAINT `paise_de_ibfk_1` FOREIGN KEY (`Aadhar_no`) REFERENCES `customer` (`Aadhar_no`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
