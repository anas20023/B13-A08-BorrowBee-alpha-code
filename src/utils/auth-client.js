import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: process.env.BETTER_AUTH_URL,
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
             scope: ["email", "profile"],
        },
    },
})
export const { signIn, signUp, useSession, signOut, updateUser } = createAuthClient()