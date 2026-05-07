const bookapi = process.env.API_URL
export const getBooks = async () => {
    try {
        const res = await fetch(`${bookapi}/books`, {
            cache: 'force-cache'
        })
        return res.json()
    } catch (error) {
        throw error
    }
}
export const getBooksbyID = async (bookID) => {
    try {
        const res = await fetch(`${bookapi}/books/${bookID}`, {
            cache: 'force-cache'
        })
        return res.json()
    } catch (error) {
        throw error
    }
}
export const getBooksbyCategory = async (id, category) => {
    try {
        const res = await fetch(`${bookapi}/books`, {
            cache: 'force-cache'
        })
        const books = await res.json()
        // console.log(books)
        return books.filter((book => (book.category === category && book._id !== Number(id)))).slice(0, 4)
    } catch (error) {
        throw error
    }
}
