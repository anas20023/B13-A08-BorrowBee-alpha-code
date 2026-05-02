const bookapi=process.env.API_URL
export const getBooks= async()=>{
    try {
        const res = await (await fetch(`${bookapi}/books`)).json()
        return res
    } catch (error) {
        throw error
    }
}
export const getBooksbyID= async(bookID)=>{
    try {
        const res = await (await fetch(`${bookapi}/books/${bookID}`)).json()
        return res
    } catch (error) {
        throw error
    }
}
export const getBooksbyCategory= async(category,id)=>{
    try {
        const res = await (await fetch(`${bookapi}/books`)).json()
        return res.filter((book=>(book.category===category && book.id !==Number(id)))).slice(0,4)
    } catch (error) {
        throw error
    }
}