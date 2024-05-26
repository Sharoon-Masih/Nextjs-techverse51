import Link from "next/link";


const Navbar = () => {
  return (
    <div className="w-[60%] flex h-16 items-center justify-center mx-auto gap-4 bg-yellow-200 m-3">
    <Link href={"/about"}>About</Link>
    <Link href={"/contact"}>Contact</Link>
    <Link href={"/service"}>Service</Link>
    <Link href={"/Football"}>Football</Link>
    </div>
  )
}

export default Navbar;