"use client";
import { MobileGnb, WebGnb } from "./components";

export default function GNB() {
  return (
    <>
      <WebGnb />
      <MobileGnb />
      <div className="h-16 md:h-16" />
    </>
  );
}
