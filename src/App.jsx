import Navbar from "./components/Navbar"
import News from "./components/News"
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Link,
  Router,
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={
            <News
              pageSize = {8}
              country = "in"
              category = "general"
              key = "general"
            />
          }/>

          <Route path="/entertainment" element={
            <News
              pageSize = {8}
              country = "in"
              category = "entertainment"
              key = "entertainment"
            />
          }/>

          <Route path="/health" element={
            <News
              pageSize = {8}
              country = "in"
              category = "health"
              key = "health"
            />
          }></Route>

          <Route path="/science" element={
            <News
              pageSize = {8}
              country = "in"
              category = "science"
              key = "science"
            />
          }></Route>

          <Route path="/sports" element={
            <News
              pageSize = {8}
              country = "in"
              category = "sports"
              key = "sports"
            />
          }></Route>

          <Route path="/technology" element={
            <News
              pageSize = {8}
              country = "in"
              category = "technology"
              key = "technology"
            />
          }></Route>
        </Routes>
    </div>
    
  ) 
}

export default App
