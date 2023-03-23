import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Sidebar from "@/components/Sidebar/Sidebar";
import CustomTable from "@/components/Table/Table";
import MainLayout from "@/Layouts/MainLayout";
import { ReactElement, useState } from "react";
import NavSpace from "@/components/NavSpace/NavSpace";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="wrapper">
        <div className="left">{/* <Sidebar /> */}</div>
        <div className="right">
          <Navbar />
          <NavSpace />
          <div className="dashpage">
            <CustomTable />
          </div>
        </div>
      </div>
    </div>
  );
}

Home.getLayout = function PageLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
