import React from 'react';
import ArticleList from '../component/ArticleList';

import articles from '../data/content';
import NotFoundError from './NotFoundError';

const Article = ({match}) => {
        const name = match.params.name;

        

        const article = articles.find(data => data.name === name);

        const otherArticles = articles.filter(data => data.name !== name);

        if(!article) return <NotFoundError renderer="article" data={name} />
        return(
       
                 <>

                <h1>Articles</h1>
                <h3>{article.title}</h3>
                {article.content.map((data,key)=>(<p key={key}>{data}</p>))}
                

                <ArticleList articles={otherArticles}/>
                </>

                
)}
;

export default Article;