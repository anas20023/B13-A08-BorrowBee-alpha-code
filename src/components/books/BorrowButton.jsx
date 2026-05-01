'use client'
import { toast } from "react-toastify"
const BorrowButton = ({ book }) => {
    return (
        <button onClick={()=>{
            toast.success(`${book.title} Borrowed Successfully`)
        }} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md font-medium transition-colors shadow-sm">
            Borrow Now
        </button>
    )
}

export default BorrowButton
