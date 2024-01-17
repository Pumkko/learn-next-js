import Link from "next/link";
import { migrateTurso } from "./lib/db";

export default async function Home() {

  migrateTurso();

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
