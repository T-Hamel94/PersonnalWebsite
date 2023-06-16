import React from 'react'
import '../styles/components/ArticlePreview.css';

function UserArticlePreview({ title, author, date, content, isApproved }) {
    return (
      <div className='row'>
        <div className='col-12 article-preview'>
          <h2>{title}</h2>
          <p><b>{author}</b></p>
          <p><i>{content.slice(0,100)}... </i></p> 
          <span id='articlePreviewDate'>{date}</span>
          {!isApproved && <span className='approval-needed'><b>To be approved by an admin</b></span>}
        </div> 
      </div>
    )
  }

export default UserArticlePreview;
