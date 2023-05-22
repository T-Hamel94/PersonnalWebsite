import React, { useState } from 'react';
import Axios from 'axios';

function Admin() {
    const [state, setState] = useState({ 
        BlogPostLanguageID: 1,
        Title: '',
        Author: '',
        Content: ''
      });

    function handleInputChange(event) {
        setState({...state, [event.target.name]: event.target.value});
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const response = await Axios.post('https://localhost:7057/api/blogposts', {
                BlogPostLanguageID: state.BlogPostLanguageID,
                Title: state.Title,
                Author: state.Author,
                Content: state.Content
            });
        }
        catch (error) {
            console.log('error', error);
        }
    }

    return (
    <div className='container'>
        <div className='row mt-3'>
            <div className='col-12 text-center'>
                <h1>Admin Page</h1>
            </div>
        </div>

        <div className='row'>
            <h2>Adding a blog post</h2>
        </div>
        <div className='row'>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                        <label htmlFor="Title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="Title" name="Title" onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                        <label htmlFor="Author" className="form-label">Author</label>
                        <input type="text" className="form-control" id="Author" name="Author" onChange={handleInputChange} required />
                </div>
                <div className="mb-3">
                        <label htmlFor="Content" className="form-label">Content</label>
                        <textarea className="form-control" id="Content" name="Content" rows="5" onChange={handleInputChange} required></textarea>
                </div>

                <div className='row'>
                    <div className='col-12 text-center'>
                        <button type="submit" className="btn btn-primary w-25 p-2">Submit</button>
                    </div>
                </div>
            </form>
        </div>

    </div>
    )
}

export default Admin;
