import React, {useState, useEffect} from 'react'; // Every react file has this on top
// useState allows computers to extract data from behind the scenes of a website
// when a user presses a button, switch out and return different values

import { useParams } from 'react-router-dom';

import DATA from "../components/data";
import ArticleItem from "../components/ArticleItem";

function Article(){ // Keep this to be the name of the file to be consistent
    const [article, setArticle] = useState({});
    // first argument is the identifier for the state
    // second argument is for what needs to be changed
    let { id } = useParams();
    useEffect(() => {
        let dataArray = DATA.filter(article => article.id === id);
        setArticle(dataArray[0]);
        console.log("dataArray: ", dataArray);
        
    }, [id]);


    
    return(
        <div>
            <header className = "articleHead"
            style = {{
                backgroundImage: `url(${article.image ? article.image.url : ''})`
            }}>
                <div className = "articleHeadWrapper">
                    <h1>{article.title}</h1>
                    <p>{article.publishedDate}</p>
                    <p>{article.blurb}</p>
                </div>
            </header>
            <main className = "articleContent">
                <div className = "articleContentWrapper">
                    {
                        article.articleText && article.articleText.map(
                            (text, i) => 
                        (<ArticleItem key = {i} data = {text.data} type = {text.type}/>)
                        )
                    }
                </div>
            </main>
        </div>
    )
}

export default Article;