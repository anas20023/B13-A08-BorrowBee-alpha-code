'use client'

import { useEffect } from "react"
import { toast } from "react-toastify"

const ShowToast = () => {
    useEffect(() => {
        const isSocialLogin = localStorage.getItem("islogin")
        if (isSocialLogin) {
            toast.success("Login successful")
            localStorage.removeItem("islogin")
        }
    }, [])
    return (
        <div>

        </div>
    )
}

export default ShowToast
