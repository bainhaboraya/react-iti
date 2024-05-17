import React, { useState } from 'react'
import {BookForm} from './BookForm' 
import {BookTable} from './BookTable' 

export function Books() {
    let [ books, setBooks ] = useState( [] )
    return (
        <>
            <BookForm books={books} setBooks={setBooks} />
            <BookTable books={books} setBooks={setBooks} />

        </>
    )
}