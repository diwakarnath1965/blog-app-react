import { createContext, useEffect, useState } from "react";
import { baseUrl } from "../baseUrl";


export const AppContext = createContext();

function AppContextProvider({children}) {

    const [loader, setLoader] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(null);

    async function fetchBlog (page) {
        setLoader(true)
        let url = `${baseUrl}?page=${page}`
        try {
            const response = await fetch(url);
            const result = await response.json();
            setPosts(result.posts);
            setPage(result.page);
            setTotalPages(result.totalPages);

        } catch (error) {
            setLoader(false)
            setPage(1);
            setPosts([]);
            setTotalPages(null);
            
        }
        setLoader(false)
    }

    useEffect(() => {
        fetchBlog()
    },[])

    function handlePageChange (page) {
        setPage(page)
        fetchBlog(page)
    }

    const value = {
        loader,
        setLoader,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlog,
        handlePageChange
    }

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppContextProvider

