import Link from "next/link";
import { PokemonImage, PokemonName } from "@components/atoms";

type PokemonCardProps = {
  id: number
  name: string
  imageUrl: string
}

export function PokemonCard({ id, name, imageUrl }: PokemonCardProps) {
  return (
    <Link href={`/pokemon/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
        <PokemonImage name={name} url={imageUrl} />
        <PokemonName name={name} />
      </div>
    </Link>
  )
}
