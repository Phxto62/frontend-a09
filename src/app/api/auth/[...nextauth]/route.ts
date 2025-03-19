import NextAuth from 'next-auth';
import { authOptions } from './authOptions';

const hadler = NextAuth(authOptions)
export { hadler as GET, hadler as POST}