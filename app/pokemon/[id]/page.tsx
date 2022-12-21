import Link from 'next/link'

interface Props {
    params: {
        id: string;
    };
}

export default async function Job({ params }: Props) {
    const pokemon = await getPokemonDetails([params.id])


    return (
        <div className="my-12 h-screen bg-slate-900">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white capitalize">{pokemon.name}</h1>
                    <p className="max-w-2xl font-bold border-b-4 text-gray-500  md:text-lg lg:text-xl dark:text-gray-400">Types</p>
                    <div className="max-w-2xl mb-1 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        <ul>
                        {pokemon.types.map(({slot, type}) => (
                            <li key={slot}>
                                {type.name}
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
                <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                </div>
                <Link href="/">
                    <div className="flex text-white p-3 items-center justify-center rounded text-center w-56 bg-purple-500 hover:bg-purple-800">
                        <span>Click here to go back</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}

async function getPokemonDetails(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, { cache: 'no-store' });
    const data = await res.json();
    return data;
}