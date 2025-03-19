import Image from 'next/image'
import TopMenuItem from './TopMenuItem'
import styles from './topmenu.module.css'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions'
import { Link } from '@mui/material'

export default async function TopMenu() {

    const session = await getServerSession(authOptions)

    return (
        <div className={styles.menucontainer}>
            {
                session? <Link href="/api/auth/signout">
                            <div className='flex item-center absolute left-0 h-full px-2
                            absolute right-0 text-cyan-600 text-sm'>
                                Sign-Out of {session.user?.name}
                            </div>
                        </Link>
                        :<Link href="/api/auth/signin">
                            <div className='flex item-center absolute left-0 h-full px-2
                            absolute right-0 text-cyan-600 text-sm'>
                                Sign-In
                            </div>
                        </Link>
            }
            <TopMenuItem title='Booking' pageRef='/booking'/>
            <Image src={'/img/logo.png'} className={styles.logoimg}
            alt='logo' width={0} height={0} sizes='100vh'/>
        </div>
    )
}