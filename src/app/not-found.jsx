"use client";
import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <FileSearch size={44} className="text-me-accent " />
        <h3 className=" text-me-accent text-4xl font-bold">NOT FOUND</h3>
        <Link
          href="/"
          className="text-me-primary hover:text-me-accent transition-all underline"
        >
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
