import React from 'react'; // Every react file has this on top
import ArticleCard from '../components/ArticleCard';
import DATA from '../components/data';
import { useParams } from "react-router-dom";


function ArticleListing(){ // Keep this to be the name of the file to be consistent
    console.log('data', DATA);
    return(
        <div className = "articleListing">
            <header>
                <h1>Articles</h1>
            </header>

            <main>
                {DATA.map((article, i) => (  
                    // i is the index; DATA is the array of objects, article is the reference
                    <ArticleCard key = {i} articleData = {article}/>
                ))}
            </main>
        </div>
    )
}


export default ArticleListing;
