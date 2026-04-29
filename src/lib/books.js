const bookapi=process.env.API_URL
export const getBooks= async()=>{
    const res=(await fetch(`${bookapi}/books`)).json()
    return res
}
export const getBooksbyID= async(bookID)=>{
    const res=(await fetch(`${bookapi}/books/${bookID}`)).json()
    return res
}