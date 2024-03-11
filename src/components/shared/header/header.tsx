import Link from 'next/link'

export const Header = () => {
  return (
    <header>
      <nav>
        <ul className="flex flex-row justify-center flex-nowrap list-none gap-x-10 mx-auto py-8">
          <li>
            <Link href="/" className="text-base font-normal no-underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/store" className="text-base font-normal no-underline">
              Store
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}