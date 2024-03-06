import Link from 'next/link'

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex flex-row justify-center list-none gap-x-10 mx-auto py-8 text-blue-500">
          <li>
            <Link href="/" className="text-blue-500 text-base font-normal no-underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/store" className="text-blue-500 text-base font-normal no-underline">
              Store
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}