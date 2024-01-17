export interface Result {
  results: Character[];
}

export interface Character {
  id: number;
  name: string;
}

async function getWorking() {
  const res = await fetch("https://rickandmortyapi.com/api/character");

  if (!res.ok) {
    throw new Error("Failed to fetch working")
  }

  return res.json() as Promise<Result>;
}

export default async function Home() {

  const data = await getWorking();

  return (
    <main>
      Henlo
      {data.results.map(d => <div key={d.id}>
        {d.name}
      </div>)}
    </main>
  )
}
