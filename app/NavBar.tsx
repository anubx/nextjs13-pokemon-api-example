import Image from 'next/image';

export default function NavBar() {
    return (
        <nav className="bg-white px-2 sm:px-4 py-2  dark:bg-purple-600 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="/" className="flex items-center">
                <Image
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                    alt="NextJS Pokemon"
                    width={60}
                    height={60}
                />
                    {/* <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" className="h-6 mr-3 sm:h-9" alt="NextJS Pokemon" /> */}
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">NextJS Pokémon</span>
                </a>
                <div className="flex md:order-2">
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-purple-500 dark:hover:bg-purple-700 dark:focus:ring-purple-800">Get started</button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                </div>
            </div>
        </nav>
    )
}