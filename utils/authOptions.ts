import bcrypt from 'bcrypt';
import { User } from 'models/userModels';
import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectDB } from "utils/connect";

interface Credentials {
    email: string;
    password: string;
    id: string;
  }
  interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    
  }

interface Token {
    username: string;
    email: string;
    id: string;
    
}

type AdapterUser = any;
type JWT = any;
async function login(credentials : Credentials): Promise<User> {
    try{
        connectDB()
        const user = await User.findOne({email:credentials.email})
        if(!user) throw new Error("Wrong credentials.")
        const isCorrect = await bcrypt.compare(credentials.password,user.password)
        if(!isCorrect) throw new Error("Wrong credentials.")
        return user;
    }catch(error){
        console.log('error while logging in')
        throw new Error('error while logging')
    }
}
export const authOptions :NextAuthOptions = {
    pages:{
        signIn: '/login'
    },
    providers : [
        CredentialsProvider({
            name:"credentials",
            credentials:{},
            async authorize(credentials){
                try{
                    const user = await login(<Credentials>credentials);
                    return user;
                }catch{
                    console.log('error')
                    throw new Error('failed to login.')
                }
            }
        })
    ],
    callbacks: {
        async jwt({token,user}: { token: any, user: User | AdapterUser }){
            if(user){
                token.username = user.username;
                token.email = user.email;
                token.id = user.id;
            }
            console.log('token', token)
            return token;
        },
        async session({ session, token}: { session: any, token: JWT}){
            if (token) {
                session.user.username = token.username;
                session.user.email = token.email;
                session.user.id = token.id;
            }
            return session;
        }
    }
}
export default authOptions






