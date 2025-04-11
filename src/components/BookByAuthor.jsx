import useFetch from "../useFetch"

const BookByAuthor = ({author}) => {
    const {data,loading,error} = useFetch("https://neo-g-be-4-assign1.vercel.app/books")
    const matchedBook = data?.filter(book=>book.author===author)
    // console.log(author,matchedBook)
  return (
    <div>
        <h1>Book by {author}</h1>
        <ul>
            {matchedBook?.map(book=>(
                <>
                    <li>{book.title}</li>
                </>
            ))}

        </ul>
    </div>
  )
}

export default BookByAuthor