import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';

export function BookForm({ books, setBooks }) {
  let [formData, setFormData] = useState({
    name: '',
    price: '',
    author: ''
  });

  const [validationError, setValidationError] = useState('');

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    if (formData.name.length < 3) {
      setValidationError('Name should be at least 3 characters ');
      return false;
    }
    if (parseInt(formData.price) < 10) {
      setValidationError('Price should be at least 10');
      return false;
    }
    if (formData.author.length < 3) {
      setValidationError('Author should be at least 3 characters ');
      return false;
    }
    return true;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setBooks([...books, formData]);
      setFormData({
        name: '',
        price: '',
        author: ''
      });
      setValidationError('');
    }
  };

  return (
    <Container style={{ maxWidth: '50%' }} className="mt-5">
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={changeHandler}
            placeholder=""
            style={{ width: '100%' }} 
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name="price"
            onChange={changeHandler}
            value={formData.price}
            type="number"
            placeholder=""
            style={{ width: '100%' }} 
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Author</Form.Label>
          <Form.Control
            name="author"
            onChange={changeHandler}
            value={formData.author}
            type="text"
            placeholder=""
            style={{ width: '100%' }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Free Shipping" />
        </Form.Group>
        {validationError && <Alert variant="danger">{validationError}</Alert>}
        <Button
          variant="outline-primary"
          type="submit"
          
          className="btn-hover"
        >
          Add
        </Button>
      </Form>
      <style>
        {`
          .container {
            background-color: #89cff0;
            padding: 20px;
            border-radius: 10px;
          }

          
        `}
      </style>
    </Container>
  );
}
