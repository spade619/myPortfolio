import Link from "next/link"
export default function Navbar() {
  return (
    <nav class="navbar navbar-dark bg-dark">
    <h1> portfolio </h1>
      <Link href="/">Home</Link>
      <Link href="/news">News</Link>
 
    </nav>
  )
}
