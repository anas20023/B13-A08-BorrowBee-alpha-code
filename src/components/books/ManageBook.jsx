'use client'
import { deleteBookAction } from '@/utils/actions'
import { Button } from '@heroui/react'
import { useRouter } from 'next/navigation'
import { AiOutlineDelete } from 'react-icons/ai'
import { MdOutlineEdit } from 'react-icons/md'
import { toast } from 'react-toastify'

const ManageBook = ({ bookID }) => {
    const router=useRouter()
    const handleEdit = async () => {
        console.log(bookID)
    }
    const handleDelete = async () => {
        try {
            await deleteBookAction(bookID)
            toast.success("Book Deleted !")
            router.refresh();
            router.push("/all-books")
        } catch (error) {
            toast.error(error.message || "Faild to Delete !")
        }
    }
    return (
        <div className='absolute flex justify-center items-center gap-2 top-180  md:top-10 right-5 z-999'>
            <Button onClick={() => handleEdit()} variant="tertiary"><MdOutlineEdit size={18} />Edit</Button>
            <Button onClick={() => handleDelete()} variant="danger"><AiOutlineDelete size={18} />Delete</Button>
        </div>
    )
}

export default ManageBook
