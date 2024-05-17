import React from 'react';
import { Button, Card } from 'react-bootstrap';
import "../../css/bookItem.css"

export function BookItem({ book }) {
    const { name, author, price, imageUrl } = book;

    return (
        <div className="col-sm-4 col-md-3 mb-3">
            <Card className="h-100 border-0">
                <Card.Img variant="top" src={imageUrl} alt={name} className="book-image" />
                <Card.Body className="d-flex flex-column">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>By {author}</Card.Text>
                    <Card.Text>Price: ${price}</Card.Text>
                    <Button variant="outline-success" className="mt-auto custom-buy-button">Buy Now</Button>
                </Card.Body>
            </Card>
        </div>
    );
}
