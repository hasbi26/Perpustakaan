-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 02, 2021 at 08:32 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `perpustakaan`
--

-- --------------------------------------------------------

--
-- Table structure for table `auth_group`
--

CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `auth_group_permissions`
--

CREATE TABLE `auth_group_permissions` (
  `id` bigint(20) NOT NULL,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `auth_permission`
--

CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `auth_permission`
--

INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add buku', 7, 'add_buku'),
(26, 'Can change buku', 7, 'change_buku'),
(27, 'Can delete buku', 7, 'delete_buku'),
(28, 'Can view buku', 7, 'view_buku'),
(29, 'Can add kategoribuku', 8, 'add_kategoribuku'),
(30, 'Can change kategoribuku', 8, 'change_kategoribuku'),
(31, 'Can delete kategoribuku', 8, 'delete_kategoribuku'),
(32, 'Can view kategoribuku', 8, 'view_kategoribuku'),
(33, 'Can add pelanggan', 9, 'add_pelanggan'),
(34, 'Can change pelanggan', 9, 'change_pelanggan'),
(35, 'Can delete pelanggan', 9, 'delete_pelanggan'),
(36, 'Can view pelanggan', 9, 'view_pelanggan'),
(37, 'Can add peminjaman', 10, 'add_peminjaman'),
(38, 'Can change peminjaman', 10, 'change_peminjaman'),
(39, 'Can delete peminjaman', 10, 'delete_peminjaman'),
(40, 'Can view peminjaman', 10, 'view_peminjaman'),
(41, 'Can add user', 11, 'add_user'),
(42, 'Can change user', 11, 'change_user'),
(43, 'Can delete user', 11, 'delete_user'),
(44, 'Can view user', 11, 'view_user');

-- --------------------------------------------------------

--
-- Table structure for table `auth_user`
--

CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_groups`
--

CREATE TABLE `auth_user_groups` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `auth_user_user_permissions`
--

CREATE TABLE `auth_user_user_permissions` (
  `id` bigint(20) NOT NULL,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `django_admin_log`
--

CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext DEFAULT NULL,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) UNSIGNED NOT NULL CHECK (`action_flag` >= 0),
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `django_content_type`
--

CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_content_type`
--

INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(5, 'contenttypes', 'contenttype'),
(7, 'perpusapp', 'buku'),
(8, 'perpusapp', 'kategoribuku'),
(9, 'perpusapp', 'pelanggan'),
(10, 'perpusapp', 'peminjaman'),
(11, 'perpusapp', 'user'),
(6, 'sessions', 'session');

-- --------------------------------------------------------

--
-- Table structure for table `django_migrations`
--

CREATE TABLE `django_migrations` (
  `id` bigint(20) NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `django_migrations`
--

INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2021-05-01 14:19:48.019998'),
(2, 'auth', '0001_initial', '2021-05-01 14:19:48.855316'),
(3, 'admin', '0001_initial', '2021-05-01 14:19:49.030273'),
(4, 'admin', '0002_logentry_remove_auto_add', '2021-05-01 14:19:49.062987'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2021-05-01 14:19:49.089700'),
(6, 'contenttypes', '0002_remove_content_type_name', '2021-05-01 14:19:49.218824'),
(7, 'auth', '0002_alter_permission_name_max_length', '2021-05-01 14:19:49.310511'),
(8, 'auth', '0003_alter_user_email_max_length', '2021-05-01 14:19:49.349466'),
(9, 'auth', '0004_alter_user_username_opts', '2021-05-01 14:19:49.378378'),
(10, 'auth', '0005_alter_user_last_login_null', '2021-05-01 14:19:49.447949'),
(11, 'auth', '0006_require_contenttypes_0002', '2021-05-01 14:19:49.456636'),
(12, 'auth', '0007_alter_validators_add_error_messages', '2021-05-01 14:19:49.498281'),
(13, 'auth', '0008_alter_user_username_max_length', '2021-05-01 14:19:49.550411'),
(14, 'auth', '0009_alter_user_last_name_max_length', '2021-05-01 14:19:49.631909'),
(15, 'auth', '0010_alter_group_name_max_length', '2021-05-01 14:19:49.692519'),
(16, 'auth', '0011_update_proxy_permissions', '2021-05-01 14:19:49.753567'),
(17, 'auth', '0012_alter_user_first_name_max_length', '2021-05-01 14:19:49.790798'),
(18, 'perpusapp', '0001_initial', '2021-05-01 14:19:49.975440'),
(19, 'sessions', '0001_initial', '2021-05-01 14:19:50.040434'),
(20, 'perpusapp', '0002_auto_20210502_1827', '2021-05-02 18:28:10.235136');

-- --------------------------------------------------------

--
-- Table structure for table `django_session`
--

CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `perpusapp_buku`
--

CREATE TABLE `perpusapp_buku` (
  `id` bigint(20) NOT NULL,
  `judulbuku` varchar(240) NOT NULL,
  `kategori` varchar(240) NOT NULL,
  `penerbit` varchar(240) NOT NULL,
  `pengarang` varchar(240) NOT NULL,
  `lokasirak` varchar(240) NOT NULL,
  `registrationDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `perpusapp_buku`
--

INSERT INTO `perpusapp_buku` (`id`, `judulbuku`, `kategori`, `penerbit`, `pengarang`, `lokasirak`, `registrationDate`) VALUES
(3, 'Wahyu Mencari Cinta', 'drama', 'Erlangga', 'Sam', 'a12', '2021-05-02'),
(4, 'Soekarno', 'biograpi', 'AA', 'Ismail', 'E3', '2021-05-02');

-- --------------------------------------------------------

--
-- Table structure for table `perpusapp_kategoribuku`
--

CREATE TABLE `perpusapp_kategoribuku` (
  `id` bigint(20) NOT NULL,
  `kategori` varchar(240) NOT NULL,
  `registrationDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `perpusapp_kategoribuku`
--

INSERT INTO `perpusapp_kategoribuku` (`id`, `kategori`, `registrationDate`) VALUES
(7, 'drama', '2021-05-02'),
(8, 'biograpi', '2021-05-02'),
(9, 'komedi', '2021-05-02');

-- --------------------------------------------------------

--
-- Table structure for table `perpusapp_pelanggan`
--

CREATE TABLE `perpusapp_pelanggan` (
  `id` bigint(20) NOT NULL,
  `namapelanggan` varchar(240) NOT NULL,
  `email` varchar(254) NOT NULL,
  `alamat` varchar(240) NOT NULL,
  `telepon` varchar(20) NOT NULL,
  `registrationDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `perpusapp_pelanggan`
--

INSERT INTO `perpusapp_pelanggan` (`id`, `namapelanggan`, `email`, `alamat`, `telepon`, `registrationDate`) VALUES
(2, 'Wahyu', 'Wahyu@gmail.com', 'Bandung', '08989876786', '2021-05-02'),
(3, 'Upin', 'Upin@email.com', 'Malaysia', '099999111', '2021-05-02');

-- --------------------------------------------------------

--
-- Table structure for table `perpusapp_peminjaman`
--

CREATE TABLE `perpusapp_peminjaman` (
  `id` bigint(20) NOT NULL,
  `tanggalpinjam` date NOT NULL,
  `tanggalpengembalian` date NOT NULL,
  `id_buku` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_pelanggan` int(11) NOT NULL,
  `registrationDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `perpusapp_peminjaman`
--

INSERT INTO `perpusapp_peminjaman` (`id`, `tanggalpinjam`, `tanggalpengembalian`, `id_buku`, `id_user`, `id_pelanggan`, `registrationDate`) VALUES
(1, '2021-05-01', '2021-04-30', 1, 1, 1, '2021-05-02'),
(2, '2021-05-03', '2021-05-13', 2, 2, 3, '2021-05-02');

-- --------------------------------------------------------

--
-- Table structure for table `perpusapp_user`
--

CREATE TABLE `perpusapp_user` (
  `id` bigint(20) NOT NULL,
  `username` varchar(240) NOT NULL,
  `email` varchar(254) NOT NULL,
  `password` varchar(100) NOT NULL,
  `registrationDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `perpusapp_user`
--

INSERT INTO `perpusapp_user` (`id`, `username`, `email`, `password`, `registrationDate`) VALUES
(1, 'hasbi', 'hasbisimaulansyah@gmail.com', 'pbkdf2_sha256$260000$OJ85nJHSTYjVlMZwGPfJt7$JRkJAAUKeFDgdG8fyWzfIdIWrKYUGfWSOlkJkLMNdtU=', '2021-05-02'),
(2, 'Rohman', 'Rohman@gmail.com', 'pbkdf2_sha256$260000$psOiyCyKNIYUwoqitbM7Sh$Yrd9wKELyldzclAT9OPWPheurL7C0LijhjdoABsz9RA=', '2021-05-02');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `auth_group`
--
ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

--
-- Indexes for table `auth_user`
--
ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- Indexes for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

--
-- Indexes for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

--
-- Indexes for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

--
-- Indexes for table `django_content_type`
--
ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

--
-- Indexes for table `django_migrations`
--
ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `django_session`
--
ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

--
-- Indexes for table `perpusapp_buku`
--
ALTER TABLE `perpusapp_buku`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `perpusapp_kategoribuku`
--
ALTER TABLE `perpusapp_kategoribuku`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `perpusapp_pelanggan`
--
ALTER TABLE `perpusapp_pelanggan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `perpusapp_peminjaman`
--
ALTER TABLE `perpusapp_peminjaman`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `perpusapp_user`
--
ALTER TABLE `perpusapp_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `auth_group`
--
ALTER TABLE `auth_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_permission`
--
ALTER TABLE `auth_permission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `auth_user`
--
ALTER TABLE `auth_user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `django_content_type`
--
ALTER TABLE `django_content_type`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `django_migrations`
--
ALTER TABLE `django_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `perpusapp_buku`
--
ALTER TABLE `perpusapp_buku`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `perpusapp_kategoribuku`
--
ALTER TABLE `perpusapp_kategoribuku`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `perpusapp_pelanggan`
--
ALTER TABLE `perpusapp_pelanggan`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `perpusapp_peminjaman`
--
ALTER TABLE `perpusapp_peminjaman`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `perpusapp_user`
--
ALTER TABLE `perpusapp_user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `auth_group_permissions`
--
ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

--
-- Constraints for table `auth_permission`
--
ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

--
-- Constraints for table `auth_user_groups`
--
ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `auth_user_user_permissions`
--
ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

--
-- Constraints for table `django_admin_log`
--
ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
