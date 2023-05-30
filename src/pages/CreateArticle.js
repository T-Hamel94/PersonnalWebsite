import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/useAuth';

function CreateArticle() {
    const isAuth = useAuth();
    const { t } = useTranslation('article');
    const navigate = useNavigate();
    const { username } = useParams();
    const [state, setState] = useState({ 
        BlogPostLanguageID: 1,
        Title: '',
        Author: username,
        Content: ''
      });

    useEffect(() => {
        if(!isAuth){
            navigate('/');
        }
        setState(prevState => ({...prevState, Author: username}));
    }, [username]);

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

            if(response.status === 201)
            {
                toast.success(t('createarticle_success'), {
                    autoClose: 4000,
                    hideProgressBar: true,
                  });
                navigate(`/myarticle/${username}`)
            }
        }
        catch (error) {
            toast.error(t('createarticle_failed'), {
                autoClose: 4000,
                hideProgressBar: true,
              });
            console.log('error', error);
        }
    }

    return (
    <div className='container'>
        <div className='row mt-3'>
            <div className='col-12 text-center'>
                <h1 className='page-header'>{t('createarticle_header')}</h1>
            </div>
        </div>

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
    )
}

export default CreateArticle;
