-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 01, 2017 at 07:37 AM
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
-- Table structure for table `admin_table`
--

CREATE TABLE `admin_table` (
  `sl_no` int(20) NOT NULL,
  `Admin_id` int(20) NOT NULL,
  `Password` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `attendence_details`
--

CREATE TABLE `attendence_details` (
  `sl_no` int(20) NOT NULL,
  `st_id` int(20) NOT NULL,
  `name` varchar(20) NOT NULL,
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
  `Sl_no` varchar(20) NOT NULL,
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
  `email` varchar(50) NOT NULL,
  `ph_no` int(20) NOT NULL,
  `password` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `faculty_details`
--

INSERT INTO `faculty_details` (`f_id`, `name`, `qualification`, `course_id`, `email`, `ph_no`, `password`, `address`) VALUES
('12as', 'bhive-test', 'fs', '12', 'iuoygh@ghj.uned', 2147483647, '22d', 'dsa'),
('d', 'd', 'ds', 'ds', 'fds@dsd.incxv', 1111111, '11', 'qwed'),
('fs', 'dfs', 'fds', 'fds', 'hr_dubai@dreamscapenetworks.com', 2147483647, 'fds', 'wfs'),
('fs1', 'dfs', 'fds', 'fds', 'hr_dubai@dreamscapenetworks.com', 2147483647, 'admin', 'wfs');

-- --------------------------------------------------------

--
-- Table structure for table `marks`
--

CREATE TABLE `marks` (
  `Sl_no` varchar(20) NOT NULL,
  `St_id` varchar(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `subject_id` varchar(20) NOT NULL,
  `test_name` varchar(20) NOT NULL,
  `marksobtain` varchar(20) NOT NULL,
  `totalmarks` varchar(20) NOT NULL,
  `status` varchar(20) NOT NULL
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

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `userId` int(5) NOT NULL,
  `loginId` varchar(100) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `contact` varchar(21) NOT NULL,
  `userType` enum('admin','student','faculty','parent') NOT NULL DEFAULT 'student',
  `createDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`userId`, `loginId`, `first_name`, `last_name`, `password`, `contact`, `userType`, `createDate`) VALUES
(3, 'admin@wtf.ind.in', 'admin', 'admin', 'hello', '9874563210', 'admin', '2017-06-30 21:21:46');

-- --------------------------------------------------------

--
-- Table structure for table `userlogin`
--

CREATE TABLE `userlogin` (
  `userLoginId` int(11) NOT NULL,
  `loginDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `userId` int(11) NOT NULL,
  `remote_addr` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userlogin`
--

INSERT INTO `userlogin` (`userLoginId`, `loginDate`, `userId`, `remote_addr`) VALUES
(64, '2017-06-30 21:22:29', 3, '::1'),
(65, '2017-06-30 21:23:51', 3, '::1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_table`
--
ALTER TABLE `admin_table`
  ADD PRIMARY KEY (`sl_no`);

--
-- Indexes for table `attendence_details`
--
ALTER TABLE `attendence_details`
  ADD PRIMARY KEY (`sl_no`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`course_id`),
  ADD UNIQUE KEY `Sl_no` (`Sl_no`);

--
-- Indexes for table `faculty_details`
--
ALTER TABLE `faculty_details`
  ADD PRIMARY KEY (`f_id`);

--
-- Indexes for table `marks`
--
ALTER TABLE `marks`
  ADD PRIMARY KEY (`Sl_no`);

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

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `loginId` (`loginId`);

--
-- Indexes for table `userlogin`
--
ALTER TABLE `userlogin`
  ADD PRIMARY KEY (`userLoginId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `userId` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `userlogin`
--
ALTER TABLE `userlogin`
  MODIFY `userLoginId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=66;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
