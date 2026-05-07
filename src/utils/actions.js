'use server'

import { revalidatePath } from "next/cache";
import { auth } from "./auth";
import { headers } from "next/headers";

export const createBookAction = async (formData) => {
    const loggedInUser = await auth.api.getSession({
        headers: await headers()
    })
    const data = Object.fromEntries(formData.entries());
    const dataByUser = {
        ...data,
        'uploaded_by': loggedInUser?.session?.id
    }
    try {
        const res = await fetch(`${process.env.API_URL}/books`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dataByUser)
        })
        revalidatePath('/all-books')
        // console.log()
        return res.json()
    } catch (error) {
        console.log(error)
        return error.message
    }
}
export const deleteBookAction = async (bookID) => {
    try {
        const res = await fetch(`${process.env.API_URL}/books/${bookID}`, {
            method: "DELETE",
        })
        revalidatePath('/all-books')
        return res.json()
    } catch (error) {
        console.log(error)
        return error.message
    }
}