'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({ children, link }) => {
    const pathname=usePathname()
    return (
        <Link href={link} className={`${pathname===link ? 'text-indigo-600':'text-gray-700'} hover:text-indigo-600 no-underline transition-colors font-medium`}>
            {children}
        </Link>
    )
}

export default NavLink
