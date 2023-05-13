import React from 'react'

function Admin() {
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
            <form>
                <div class="mb-3">
                        <label for="title" class="form-label">Title</label>
                        <input type="text" class="form-control" id="title" name="title" required></input>
                </div>
                <div class="mb-3">
                        <label for="author" class="form-label">Author</label>
                        <input type="text" class="form-control" id="author" name="author" required></input>
                </div>
                <div class="mb-3">
                        <label for="content" class="form-label">Content</label>
                        <textarea class="form-control" id="content" name="content" rows="5" required></textarea>
                </div>

                <div className='row'>
                    <div className='col-12 text-center'>
                        <button type="submit" class="btn btn-primary w-25 p-2">Submit</button>
                    </div>
                </div>
            </form>
        </div>

    </div>
  )
}

export default Admin;
