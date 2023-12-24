import Link from "next/link";
import InputSeacrh from "./InputSearch";
const NavBar = () => {
  return (
    <header className=" bg-me-accent">
      <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
        <Link href="/" className="font-bold text-me-accent text-2xl ">
          CUYANIMELIST
        </Link>
        <InputSeacrh />
      </div>
    </header>
  );
};

export default NavBar;
