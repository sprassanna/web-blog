import React  from "react";
import ArticleList  from "../component/ArticleList";
import articles  from "../data/content";

const ArticleListPage = () => (

    <>

    <h1 >Articles List</h1>
    <ArticleList articles={articles} />
    </>

    );

export default ArticleListPage;
