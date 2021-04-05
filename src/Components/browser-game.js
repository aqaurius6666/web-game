import React from 'react'
import TableGame from './table-game'
import TagCategory from './tag-category'

const BrowserPage = (props) => {
    const { tag } = props
    return (
        <div className="row">
            <TableGame tag={tag} />
            <TagCategory />
        </div>
    );
}; export default BrowserPage