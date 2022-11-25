import React from 'react'
import Data from '../../../../src/Demo.json'

let Categories = Data.categories

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

                        {/* Part of Map Api */}

                        {
                            Categories.map(item => {
                                return (

                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.main_category.map(data => {
                                            return (
                                                <div key={data.id}>
                                                    {data.name}
                                                </div>

                                            )
                                        })}
                                        </td>
                                        <td>{item.main_category.map(item => {
                                            return (
                                                <div key={item.id}>
                                                    {item.sub_category.map(sub => {
                                                        return (
                                                            <div key={sub.id}>
                                                                {sub.name}
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            )
                                        })}</td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Show
