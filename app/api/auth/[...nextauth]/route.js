import bcrypt from 'bcrypt';
import { User } from 'models/userModels';
import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectDB } from "utils/connect";
async function login(credentials){
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
export const authOptions = {
    pages:{
        signIn: '/login'
    },
    providers : [
        CredentialsProvider({
            name:"credentials",
            credentials:{},
            async authorize(credentials){
                try{
                    const user = await login(credentials);
                    return user;
                }catch{
                    console.log('error')
                    throw new Error('failed to login.')
                }
            }
        })
    ],
    callback: {
        async jwt({token,user}){
            if(user){
                token.username = user.username;
                token.email = user.email;
                token.id = user.id;
            }
            console.log('token', token)
            return token;
        },
        async session({session,token}){
            if(token){
                session.user.username = token.username;
                session.user.email = token.email;
                session.user.id = token.id;
            }
            console.log('session', session)
            return session;
        }
    }
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST };

