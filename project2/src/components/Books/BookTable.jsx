import React from 'react';
import { Table } from 'react-bootstrap';

export function BookTable({ books, setBooks }) {
    const handleRemove = (index) => {
        const newBooks = [...books];
        newBooks.splice(index, 1);
        setBooks(newBooks);
    };

    return (
        <div className='mt-4 bg-light p-5'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price </th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{book.name}</td>
                                <td>{book.price}</td>
                                <td>{book.author}</td>
                                <td>
                                    <button
                                        className='btn btn-danger'
                                        onClick={() => handleRemove(index)}
                                    >
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}
