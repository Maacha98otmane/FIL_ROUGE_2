import React, {useEffect} from "react";
import {getAllArticle} from "../helpers/api/mycourses";
import {useQuery} from "react-query"; // get data && use mutation => post request 
// import {useQueryClient} from "react-query"; // refetch & invalidate cache using only in post & delete


function MyCoursesPage(){

    useEffect(()=>{
        document.title = "My Courses";
    })

    const { 
        isLoading, 
        isError, 
        data=[],
    } = useQuery('myCourses', getAllArticle);



    return (
        <>
        {
        <div className="app-page rel">
            <h1 className="page-title s24 fontb c333">My Courses</h1>
            {isLoading ? <div className="loader">Loading</div> : isError ? <div className="error">Error</div> :
            data.map((article, index) => {
                return (
                    <div className="article-item" key={index}>
                        <div className="article-item-title">{article.name}</div>
                        <div className="article-item-content">{article.nickname}</div>
                    </div>
                )
            })
            }
        </div>
        }
        </>
    )
}

export default MyCoursesPage;