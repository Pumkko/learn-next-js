import Link from "next/link";
import { cache } from "react";
import { db } from "./lib/db";


const getCharacters = cache(async () => {
  const characters = await db.query.characters.findMany();
  return characters;
})

export default async function Home() {

  const characters = getCharacters();

  return (
    <main>
      Henlo, there are {(await characters).length} characters
      <div>
        <Link href={"/Counter"}>Counter</Link>
        <Link href={"/RickAndMorty"}>Rick And Morty</Link>
      </div>
    </main>
  )
}
