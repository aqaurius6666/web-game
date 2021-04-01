import React, { useEffect, useState } from 'react'
import gameService from '../API/gameService'
import userService from '../API/userService'
import Loading from './loading'
import TableGame from './table-game'
import TagCategory from './tag-category'

const BrowserPage = (props) => {
    const { tag } = props
    return (
        <div className="row">
            <div classname="col-md-10">
                <TableGame tag={tag} />
            </div>
            <div className="col-md-2">
                <TagCategory />
            </div>
        </div>
    );
}; export default BrowserPage