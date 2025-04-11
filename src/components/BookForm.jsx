import {useState} from "react"
const BookForm = () => {
    const [formData,setFormData]=useState({
        title:"",
        author:"",
        publishedYear:"",
        genre:"",
        language:"",
        country:"",
        rating:"",
        summary:"",
        coverImageUrl:"",
    })
    function changeHandler(e){
        let {id,value} = e.target
        if(id==="publishedYear"||id==="rating"){
            value=parseInt(value)
        }
        setFormData((prev)=>({
            ...prev,
            [id]:value
        }))
    }
    async function formHandler(e){
        e.preventDefault()
        // console.log(formData)
        try {
            const response = await fetch("https://neo-g-be-4-assign1.vercel.app/books",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(formData)
            })
            if(!response.ok){
                throw "Failed to add movie."
            }
            const data = await response.json()
            console.log("Added Movie",data)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <h1>Book Form</h1>
        <form onSubmit={formHandler}>
            <label htmlFor="title">
                Title: <br />
                <input type="text" onChange={changeHandler} value={formData.title} id="title" />
            </label>
            <br /><br />
            <label htmlFor="author">
                Author: <br />
                <input type="text" onChange={changeHandler} value={formData.author} id="author" />
            </label>
            <br /><br />
            <label htmlFor="publishedYear">
                Publish Year: <br />
                <input type="text" onChange={changeHandler} value={formData.publishedYear} id="publishedYear" />
            </label>
            <br /><br />
            <label htmlFor="genre">
                Genre: <br />
                <input type="text" onChange={changeHandler} value={formData.genre} id="genre" />
            </label>
            <br /><br />
            <label htmlFor="language">
                Language: <br />
                <input type="text" onChange={changeHandler} value={formData.language} id="language" />
            </label>
            <br /><br />
            <label htmlFor="country">
                Country: <br />
                <input type="text" onChange={changeHandler} value={formData.country} id="country" />
            </label>
            <br /><br />
            <label htmlFor="rating">
                Rating: <br />
                <input type="text" onChange={changeHandler} value={formData.rating} id="rating" />
            </label>
            <br /><br />
            <label htmlFor="summary">
                Summary: <br />
                <input type="text" onChange={changeHandler} value={formData.summary} id="summary" />
            </label>
            <br /><br />
            <label htmlFor="coverImageUrl">
                Cover Image URL: <br />
                <input type="text" onChange={changeHandler} value={formData.coverImageUrl} id="coverImageUrl" />
            </label>
            <br /><br />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default BookForm