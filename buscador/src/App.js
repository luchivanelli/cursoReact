import { useFormik } from "formik";
import { useState } from "react";
import './components/Content'
import Content from "./components/Content";
import Header from "./components/Header";

const App = ()=> {
  const [photos, setPhotos] = useState([])

  const open = (url)=> {window.open(url)}

  const formik = useFormik({
    initialValues:{
      search: ''
    },
    onSubmit: async values => {  //llamada a la api
      const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`, 
      {
        headers: {
          'Authorization': 'Client-ID LoAWFg9MHGFWYHcoQHIzbePumC-4si9SF4R4alQSkoQ'
        }
      })
      const data = await response.json()
      setPhotos(data.results)
    }
  })

  return (
    <>
      <Header formik={formik}/>
      <Content photos={photos} open={open}/>
    </>
  )
}

export default App;
