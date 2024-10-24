import Image from "next/image";

type PokemonImageProps = {
  name: string;
  url: string;
}

export function PokemonImage({name, url}: PokemonImageProps) {
  return (
    <Image
      src={url}
      alt={`${name} sprite`}
      width={96}
      height={96}
      className="w-24 h-24 object-contain"
    />
  );
}
