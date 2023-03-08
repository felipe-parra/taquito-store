import React from "react";
import Navbar from "../ui/Navbar";

export default function AuthenticatedLayout({ children }: { children: any }) {
  return (
    <section className="flex flex-col justify-start items-start w-full h-full">
      <Navbar />
      {children}
    </section>
  );
}
