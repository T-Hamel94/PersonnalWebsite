import React from 'react'
import '../styles/components/ArticlePreview.css';

function UserArticlePreview({ title, author, date, content }) {
    return (
      <div className='row'>
        <div className='col-12 article-preview'>
          <h2>{title}</h2>
          <p><b>{author}</b></p>
          <p><i>{content.slice(0,100)}... </i></p> 
          <p id='articlePreviewDate'>{date}</p>
        </div> 
      </div>
    )
  }

export default UserArticlePreview;