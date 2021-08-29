import React  from "react";
import { Link } from 'react-router-dom';
const ArticleList = ({articles}) => (

    <>

        {
             articles.map((data,key) => (
                 
                <Link className="artcile-list-item" key={key} to={`/article/${data.name}`}>
                <h2>{data.name}</h2> 
                <h3>{data.title}</h3> 
                <h4>{data.content[0].substring(0,20)}...</h4>
                </Link>
            
         
    ))
        }

    </>
    );

export default ArticleList;