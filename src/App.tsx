import { Route, Routes } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./components/Home/Home"
import AddNote from "./components/AddNote/AddNote"
import EditNote from "./components/EditNote/EditNote"
import ViewNote from "./components/ViewNote/ViewNote"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="add-note" element={<AddNote />} />
          <Route path="edit-note/:noteId" element={<EditNote />} />
          <Route path="view-note/:noteId" element={<ViewNote />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
