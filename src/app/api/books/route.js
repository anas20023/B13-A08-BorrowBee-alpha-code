export const GET = async (request) => {
    console.log(request.body)
    return Response.json({ message: 'Hello World' })
}