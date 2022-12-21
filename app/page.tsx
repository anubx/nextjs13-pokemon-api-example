import Link from 'next/link';
import Image from 'next/image';

async function getPokemonList() {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=151`, { cache: 'no-store' });
    const data = await res.json();
    return data.results;
}

export default async function Pokemon() {
    const pokemon = await getPokemonList();
    return (
        <div className="bg-slate-900">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div key={pokemon.name} className="grid grid-cols-1 place-items-center gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {pokemon.map((pokemon) => (
                    <GetPokemon url={pokemon.url}/>
                ))}
            </div>
        </div>
        </div>
    )
}

async function GetPokemon({ url }) {
    const res = await fetch(`${url}`, { cache: 'no-store' });
    const data = await res.json();
    const image = data.sprites.front_default.toString()
    const name = data.name
    const api = "./pokemon/"
    const detailslink = api.concat(name)

    return (
        <Link href={detailslink}>
            <div className=" group border-4 p-1 mt-8 rounded-xl border-purple-900 hover:border-purple-500">
                <div className="flex flex-col justify-center items-center w-72 lg:w-60 max-w-sm rounded-lg overflow-hidden shadow-lg bg-gradient-to-tr from-yellow-200 to-purple-500">
                    <Image
                        src={image}
                        alt={name}
                        width={120}
                        height={120}
                        priority
                        />
                    <div className="p-2 w-full rounded-b-lg border-t-4 border-gray-900 bg-purple-600 group-hover:bg-purple-500">
                        <p className="text-center text-lg text-white capitalize">{name}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}
