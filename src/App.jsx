import BookByAuthor from "./components/BookByAuthor.jsx"
import BookByTitle from "./components/BookByTitle.jsx"
import BookTitles from "./components/BookTitles.jsx"
import BookForm from "./components/BookForm.jsx"
function App() {

  return (
    <>
      <BookForm />
      <BookTitles />
      <BookByTitle title="The Power of Habit" />
      <BookByAuthor author="Harper Lee" />
    </>
  )
}

export default App
