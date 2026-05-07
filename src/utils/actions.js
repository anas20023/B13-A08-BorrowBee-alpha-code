'use server'

import { revalidatePath } from "next/cache";

export const createBookAction = async (formData) => {
    const data = Object.fromEntries(formData.entries());
    try {
        const res = await fetch(`${process.env.API_URL}/books`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        revalidatePath('/all-books')
        // console.log()
        return res.json()
    } catch (error) {
        console.log(error)
        return error.message
    }
}