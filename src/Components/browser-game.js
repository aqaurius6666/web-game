import React from 'react'
import TableGame from './table-game'
import TagCategory from './tag-category'

const BrowserPage = (props) => {
    const { tag } = props
    return (
        <div className="row">
            <div className="col-md-9 col-sm-9">
                <TableGame tag={tag} />
            </div>
            <div className="col-md-3 col-sm-3">
                <TagCategory />
            </div>

        </div>
    );
}; export default BrowserPage