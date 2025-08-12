"use client";
import OrangeButton from "@/components/atoms/button/orangeButton";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MobileGnb, WebGnb } from "./components";

export default function GNB() {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const urlList = [
    {
      url: "/",
      label: "AI 서비스",
    },
    {
      url: "/usage",
      label: "이용 안내",
    },
    {
      url: "/price",
      label: "요금 안내",
    },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <>
      <WebGnb isDropdownOpen={isDropdownOpen} toggleDropdown={toggleDropdown} />
      <MobileGnb
        isDropdownOpen={isDropdownOpen}
        toggleDropdown={toggleDropdown}
      />
      <div className="h-[104px] md:h-[64px]" />
    </>
  );
}
