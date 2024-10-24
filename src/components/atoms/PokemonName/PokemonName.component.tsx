type PokemonNameProps = {
  name: string
}

export function PokemonName({ name }: PokemonNameProps) {
  return <h2 className="text-lg font-semibold capitalize">{name}</h2>
}
