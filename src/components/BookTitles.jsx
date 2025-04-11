import { useState } from "react"
import useFetch from "../useFetch.jsx"
const BookTitles = ()=>{
    const [successMessage,setSuccessMessage] = useState("")
    const {data, loading, error} = useFetch("https://neo-g-be-4-assign1.vercel.app/books")
    async function deleteBtnHandler(e){
        const {dataset:{id}} = e.target
        try {
            const response = await fetch(`https://neo-g-be-4-assign1.vercel.app/books/deleteid/${id}`,{
                method:"DELETE"
            })
            console.log(response)
            if(!response.ok){
                throw "Unable to delete book"
            }
            const data = await response.json()
            if(data){
                setSuccessMessage("Book deleted successfully")
                window.location.reload()
            }
        } catch (error) {
            console.log(error)
        }
        // console.log(id)
    }
    return(
        <div>
            <h1>All Books</h1>
            <ul>
                {data?.map(book=>(
                    <li>{book.title}
                        <button data-id={book._id} onClick={deleteBtnHandler}>Delete</button>
                    </li>
                ))}
            </ul>
            <p>{successMessage}</p>
        </div>
    )
}

export default BookTitles