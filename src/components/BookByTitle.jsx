import useFetch from "../useFetch.jsx"

const BookByTitle = ({title}) => {
    const {data, loading, error} = useFetch("https://neo-g-be-4-assign1.vercel.app/books")
    const matchedBook = data?.find(book=>book.title===title)
    // console.log(data[0].title)
  return (
    <div>
      {matchedBook&&(
        <>
          <h1>{matchedBook.title}</h1>
          <p><strong>Author:</strong> {matchedBook.author}</p>
          <p><strong>Release Year:</strong> {matchedBook.publishedYear}</p>
          <p><strong>Genre:</strong> {matchedBook.genre.join(", ")}</p>
        </>
      )}
    </div>
  )
}

export default BookByTitle