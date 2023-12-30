import Blogs from "./Components/Blogs";
import Header from "./Components/Header";
import Pagination from "./Components/Pagination";
import "./App.css";

export default function App() {
  return (
  <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center bg-slate-300">
    <Header/>
    <Blogs/>
    <Pagination/>
  </div>
  )
}
