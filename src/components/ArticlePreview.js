import React from 'react'
import '../styles/components/ArticlePreview.css';

function ArticlePreview({ title, author, date, content }) {
    return (
      <div className='row article-preview'>
        <div className='col-12'>
          <h2>{title}</h2>
          <p><b>{author}</b></p>
          <p><i>{content.slice(0,100)}... </i></p> 
          <p id='articlePreviewDate'>{date}</p>
        </div>
      </div>
    )
  }

export default ArticlePreview;
