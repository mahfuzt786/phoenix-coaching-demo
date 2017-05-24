-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 24, 2017 at 06:28 PM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendence_details`
--

CREATE TABLE `attendence_details` (
  `sl_no` int(20) NOT NULL,
  `st_id` int(20) NOT NULL,
  `subject_id` int(20) NOT NULL,
  `t_class` int(20) NOT NULL,
  `class_attendence` int(20) NOT NULL,
  `status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `course_id` varchar(20) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `faculty_details`
--

CREATE TABLE `faculty_details` (
  `f_id` varchar(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `qualification` varchar(50) NOT NULL,
  `course_id` varchar(50) NOT NULL,
  `subject_id` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `ph_no` int(20) NOT NULL,
  `password` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `parents_details`
--

CREATE TABLE `parents_details` (
  `P_id` varchar(20) NOT NULL,
  `St_id` varchar(20) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Address` varchar(50) NOT NULL,
  `Phone_no` int(20) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `student_master`
--

CREATE TABLE `student_master` (
  `st_id` varchar(50) NOT NULL,
  `admisson_no` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `course` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL,
  `password` varchar(20) NOT NULL,
  `contact` int(20) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `subject_details`
--

CREATE TABLE `subject_details` (
  `subject_id` varchar(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `course_id` int(20) NOT NULL,
  `Faculty_id` int(20) NOT NULL,
  `t_students` int(20) NOT NULL,
  `Session` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attendence_details`
--
ALTER TABLE `attendence_details`
  ADD PRIMARY KEY (`sl_no`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`course_id`);

--
-- Indexes for table `faculty_details`
--
ALTER TABLE `faculty_details`
  ADD PRIMARY KEY (`f_id`);

--
-- Indexes for table `parents_details`
--
ALTER TABLE `parents_details`
  ADD PRIMARY KEY (`P_id`);

--
-- Indexes for table `student_master`
--
ALTER TABLE `student_master`
  ADD PRIMARY KEY (`st_id`);

--
-- Indexes for table `subject_details`
--
ALTER TABLE `subject_details`
  ADD PRIMARY KEY (`subject_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
