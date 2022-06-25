import React, {useState, useEffect} from "react";
import {addArticle,getAllArticle} from "../helpers/api/mycourses";
import {useQuery, useMutation} from "react-query"; // get data && use mutation => post request 
import {useQueryClient} from "react-query"; // refetch & invalidate cache using only in post & delete


function MyCoursesPage(){
    const queryClient = useQueryClient();
    useEffect(()=>{
        document.title = "My Courses";
    })

    const [name, setName] = useState('');

    const { 
        isLoading, 
        isError, 
        data,
    } = useQuery('myCourses', getAllArticle);

    const addArticleMutation = useMutation(addArticle, {
        onSuccess: () => {
            queryClient.invalidateQueries('myCourses');
        }
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        addArticleMutation.mutate({name});
        setName('');
    }

    return (
        <div className="app-page rel">
            <h1 className="page-title s24 fontb c333">My Courses</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" value={name} 
                    onChange={(e)=>setName(e.target.value)}
                    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name" />
                    <button>Submit</button>
                </div>

            </form>
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
    )
}

export default MyCoursesPage;
