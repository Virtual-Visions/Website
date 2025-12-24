import Image from "next/image"
import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image src="/images/logo.png" alt="Virtual Visions" width={180} height={60} className="h-8 w-auto" priority />
    </Link>
  )
}
