import  Image from "next/image";
import Link from "next/link";
import nvaImg from "@/assets/nva-logo.png"

export default function BlendedHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="flex mx-auto max-w-7xl items-center p-4 md:p-6 bg-transparent justify-center">
        <Link href={"/"} className="flex items-center gap-3 uppercase text-white ">
          <Image
            src={nvaImg}
            alt="Nepal Volleyball Association"
            width={96}
            height={96}
            priority
            className="h-14 w-auto md:h-20 lg:h-28 rounded-full bg-white p-1 ring-2 ring-white/30 "
          />
          {/* <span className="text-lg md:text-2xl lg:text-3xl tracking-[2px]">
            Nepal Volleyball
            <br />
            Association
          </span> */}
        </Link>
      </div>
    </header>
  )
}