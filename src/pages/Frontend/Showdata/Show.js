import React from 'react'

function Show() {
    return (
        <div className="Show">
            <div className="container">
                <div className="table">
                    <h1 className='text-center'>Show Data from Json File</h1>
                    <h1 className='text-center mt-5'>categories</h1>

                    <table className='w-100'>
                        <tr>
                            <th>Categories</th>
                            <th>Main Category</th>
                            <th>Sub Category</th>
                        </tr>
                        <tr>
                            <td>Alfreds Futterkiste</td>
                            <td>Maria Anders</td>
                            <td>Germany</td>
                        </tr>
                        
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Show
