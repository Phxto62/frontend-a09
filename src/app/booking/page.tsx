import DateReserve from '@/components/DateReserve';
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import getUserProfile from "@/libs/getUserProfile"

export default async function About() {

    const session = await getServerSession(authOptions)
    if(!session || !session.user.token) return null

    const profile = await getUserProfile(session.user.token)
    var createdAt = new Date(profile.data.createdAt);

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-2xl">Name: {profile.data.name}</div>
            <table className="table-auto border-separate border-spacing-2">
            <tbody>
                <tr><td>Email: </td><td>{profile.data.email}</td></tr>
                <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
                <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
            </tbody>
            </table>

            <div className="text-xl font-medium">Veneu Booking</div>
            <div className="w-fit space-y-2">
                <DateReserve/>
            </div>
            <button name="Book Venue" className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 shadow-sm text-white">
                Book Venue
            </button>
        </main>
    )
}