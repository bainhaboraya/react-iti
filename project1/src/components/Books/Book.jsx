import React from 'react';
import { BookItem } from './BookItem.jsx';

export default function Book() {
    
    const books = [
                    
        { id: 1, name: "Book 1", author: "Author 1", price: 10, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIVLQYtVHCH6L8VuGiVgdXF7Gtf8oaYfkIpg&s" },
        { id: 2, name: "Book 2", author: "Author 2", price: 15, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOQGknX_izr0lnPAjweK34Z8SK6JTqXmxpg&s" },
        { id: 3, name: "Book 3", author: "Author 3", price: 20, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIVLQYtVHCH6L8VuGiVgdXF7Gtf8oaYfkIpg&s" },
        { id: 4, name: "Book 4", author: "Author 4", price: 25, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsOQGknX_izr0lnPAjweK34Z8SK6JTqXmxpg&s" },
        { id: 5, name: "Book 5", author: "Author 5", price: 30, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIVLQYtVHCH6L8VuGiVgdXF7Gtf8oaYfkIpg&s" }
    ];
    

    return (
        <div className='bg-light p-5 text-center'>
            <div className="container">
                <h1 className='mb-5'>Our Books</h1>
                <div className="row">
                    {books.map(book => (
                        <BookItem key={book.id} book={book} />
                    ))}
                </div>
            </div>
        </div>
    );
}
