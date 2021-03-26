import React, { useState } from 'react'
//import json file
const [searchTerm, setSearchTerm] = useState("")
const Register = () => {
    return (
        <div>
            <input type="text" placeholder="Search..." onChange={(event) => {setSearchTerm(event.target.value)}} />
            {/*
                JSONDATENAME.filter((val)) => {
                    if (searchTerm == "") {
                        return val
                    } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return val
                    }
                    map((val, key) => {
                        return (
                            <div classname="user" key={key}>
                                <p>{val.first_name}</p>
                            </div>
                        );
                    })
                }
            */  }
        </div>
    );
}
