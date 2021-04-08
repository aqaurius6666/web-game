import React from 'react'
import TableGame from './table-game'
import TagCategory from './tag-category'

const BrowserPage = (props) => {
    const { tag } = props
    return (
        <div className="row">
            <div className="col-md-10 col-sm-10">
                <TableGame tag={tag} />
            </div>
            <div className="col-md-2 col-sm-2">
                <TagCategory />
            </div>

        </div>
    );
}; export default BrowserPage