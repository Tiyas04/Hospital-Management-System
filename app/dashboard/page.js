"use client"

import { useEffect, useState,} from "react"
import axios from "axios"
import Sidebar from "../sidebar.js"

export default function Dashboard() {

    const [Stats, setStats] = useState(null)
    const [Error, setError] = useState(null)
    const [Loading, setLoading] = useState(true)

   useEffect(() => {

        const fetchdashboard = async (e) => {
            e.preventDefault()
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/dashboard`
                )
                setStats(response.data.data)
            } catch (error) {
                setError(error.message)
            }
            finally {
                setLoading(false)
            }

            fetchdashboard()
        }
    }, [])

    return (
        <div className="flex flex-row h-screen bg-white">
            <Sidebar className="z-30 shadow-2xl" />

            <div className="">

            </div>
        </div>
    )
}