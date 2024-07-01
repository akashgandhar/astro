import Image from "next/image";
import Navbar from "./components/Navbar";
import TopBanner from "./components/TopBanner";
import UnderlinedText from "@/utils/UnderlinedText";

export default function Home() {
  return (
    <>
    <TopBanner />
    <Navbar />
    <UnderlinedText text={"hello"} />
    </>
    
  );
}