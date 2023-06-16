import React, { useState, useEffect, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/useAuth';
import { useCreateArticle } from '../utils/useCreateArticle'; 
import { UserContext } from '../contexts/UserContext'

function CreateArticle() {
    const { user } = useContext(UserContext);
    const isAuth = useAuth();
    const createArticle = useCreateArticle();
    const { t } = useTranslation('article');
    const navigate = useNavigate();
    const [state, setState] = useState({ 
        BlogPostLanguageID: 1,
        Title: '',
        Author: user ? user.username : '', 
        AuthorID: user ? user.id : '', 
        Content: ''
      });

      useEffect(() => {
        if (isAuth === false) {
            navigate('/');
        }
        setState(prevState => ({ ...prevState, Author: user ? user.username : '', AuthorID: user ? user.id : '' }));
    }, [isAuth, user]);
    

    function handleInputChange(event) {
        setState({...state, [event.target.name]: event.target.value});
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const articleCreated = await createArticle(user, {
            BlogPostLanguageID: state.BlogPostLanguageID,
            Title: state.Title,
            Author: state.Author,
            AuthorID: state.AuthorID,
            Content: state.Content,
        });

        if (articleCreated) {
            navigate(`/myarticle/${user ? user.username : 'userNotFound'}`);
        }
    }

    return (
    <>
        <div className='row m-0'>
            <div className='col-12 text-center p-0'>
                <h1 className='page-header funky-header'>{t('createarticle_header')}</h1>
            </div>
        </div>
        <div className='container'>


            <div className='row'>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                            <label htmlFor="Title" className="form-label">{t('createarticle_title')}</label>
                            <input type="text" className="form-control" id="Title" name="Title" onChange={handleInputChange} required />
                    </div>
                    <div className="mb-3">
                            <label htmlFor="Content" className="form-label">{t('createarticle_content')}</label>
                            <textarea className="form-control" id="Content" name="Content" rows="5" onChange={handleInputChange} required></textarea>
                    </div>

                    <div className='row'>
                        <div className='col-12 text-center'>
                            <button type="submit" className="btn btn-primary w-25 p-2">{t('createarticle_submit')}</button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    </>
    )
}

export default CreateArticle;
