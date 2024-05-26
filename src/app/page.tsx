import Image from "next/image";
import Navbar from "@/components/navbar";
import BigText from "@/components/BigText";
import ContactCard from "@/components/contact";

export default function Home() {
  return (
    <div className="mx-5">
   <h1>Home</h1>
   <BigText text="Cricket Team Players Data" />
   <ContactCard name="babar azam" phoneNo="0300..." email="babar@gmail.com"/>
   <ContactCard name="fakhar" phoneNo="0321..." email="fakhar@gmail.com"/>
   <ContactCard name="afridi" phoneNo="0313..." email="afridi@gmail.com"/>
   </div>
  )
}
