import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar() {
    const pathname = usePathname()

    const item = [
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
        }
    ]

    return (
        <div className="h-screen w-64 bg-white/10 backdrop-blur-xl border-r border-white/20 p-6 flex flex-col shadow-lg">
            <h1 className="text-2xl font-bold text-white mb-10">Hospitalo</h1>
            <nav className="flex flex-col gap-3">
                {
                    item.map((e) => {
                        <Link key={item.path} href={item.path} className={`px-4 py-2 rounded-2xl transition-all ${pathname === item.name ? "bg-blue-400 text-white shadow-md" : "text-white/80 hover:bg-white/10 hover:text-white"
                            }`}>
                        </Link>
                    })
                }
            </nav>
        </div>
    )
}