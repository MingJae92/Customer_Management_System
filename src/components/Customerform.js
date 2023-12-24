import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import axios from "axios"

function CustomerForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = async(e) => {
    e.preventDefault();
    const customerData = {
      name:form.name,
      email:form.email,
      phone:form.phone,
      address:form.address
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_URL}`, customerData)
      console.log(response.data)
    } catch (error) {
      console.log("Error submitting form", error)
    }
   
  };

  return (
    <Container>
      <Col xs="auto">
        <h1 className="text-center">Customer Management System</h1>
      </Col>
      <Col xs="auto">
        <Form onSubmit={submitForm} style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }} className="mx-auto">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter address"
              name="address"
              value={form.address}
              onChange={handleChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Container>
  );
}

export default CustomerForm;
