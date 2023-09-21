import Link from 'next/link'
import Image from 'next/image'
import profileImg from '../../public/profile.jpg'
export default function Home() {
  return (
    <>
      <h1>
        Read <Link href="/posts/first-post">this page!</Link>
      </h1>
      <Image src={profileImg} 
        height={200} 
        width={200}
        alt="profile"
      />
    </>
  )
}
