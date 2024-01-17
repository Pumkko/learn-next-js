import Link from "next/link";

export default async function Home() {
  return (
    <main>
      Henlo
      <div>
        <Link href={"/Counter"}>Counter</Link>
        <Link href={"/RickAndMorty"}>Rick And Morty</Link>
      </div>
    </main>
  )
}
