import Link from 'next/link';

export const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <Link href="/"
                              className="text-gray-50 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                            Home
                        </Link>
                        <Link href="/polityka-prywatnosci"
                              className="text-gray-50 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                            Polityka prywatności
                        </Link>
                        <Link href="/regulamin"
                              className="text-gray-50 hover:text-gray-100 px-3 py-2 rounded-md text-sm font-medium">
                            Regulamin
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};