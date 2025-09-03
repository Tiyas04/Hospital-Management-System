import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar() {
    const pathname = usePathname()

    const items = [
        {
            name: "Home",
            path: "/dashboard"
        },
        {
            name: "Appointment",
            path: "/appointment"
        },
        {
            name: "Receipt",
            path: "/receipt"
        },
        {
            name: "Medical record",
            path: "/medicalrecord"
        },
        {
            name: "Profile",
            path: "/profile"
        },
        {
            name: "Settings",
            path: "/settings"
        },
    ]

    return (
        <div className="h-screen w-64 bg-white backdrop-blur-xl border-r border-white/10 p-6 flex flex-col shadow-lg">
            <h1 className="text-2xl md:text-4xl font-bold text-black mb-10">Hospitalo</h1>
            <nav className="flex flex-col gap-4">
                {items.map((e) => (
                    <Link
                        key={e.path}
                        href={e.path}
                        className={`px-4 py-2 rounded-2xl transition-all ${pathname === e.path
                                ? "bg-blue-400 text-white shadow-md"
                                : "text-black/80 hover:bg-blue-100 hover:text-black"
                            }`}
                    >
                        {e.name}
                    </Link>
                ))}
            </nav>
        </div>
    )
}
