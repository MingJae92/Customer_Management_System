import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import axios from "axios"

// Define a functional component named CustomerForm
function CustomerForm() {
  // State to manage form data
  const [form, setForm] = useState({
    _id: "",
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // URL from environment variables
  const [url] = useState(process.env.REACT_APP_URL);

  // Handle form input changes
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Update customer details using a PUT request
  const updateCustomerDetails = async (_id) => {
    try {
      const response = await axios.put(
        `${url}/updateCustomerDetails/${_id}`,
        form
      );
      console.log(response.data);
      alert("Details updated!");
    } catch (error) {
      console.error("Error updating customer details", error);
      alert("Error updating customer details!");
    }
  };

  // Handle form submission using a POST request
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/customerDetails`, form);
      console.log("Server response:", response.data);

      // Extract the customer ID from the response and set it in the form state
      const customerId = response.data._id;
      alert("Details submitted!");

      setForm({
        ...form,
        _id: customerId,
      });
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Error submitting form! Internal server error!");
    }
  };

  // Fetch existing customer details on component mount
  const fetchCustomerDetails = async () => {
    try {
      const response = await axios.get(`${url}/customerDetails`);
      if (response.data) {
        // Extract the customer ID and set the form state with the rest of the data
        const { _id, ...formData } = response.data;
        setForm({ ...formData, _id });
      }
    } catch (error) {
      console.error("Error fetching customer details", error);
    }
  };

  // useEffect hook to fetch customer details on component mount
  useEffect(() => {
    fetchCustomerDetails();
  }, []);

  // JSX rendering
  return (
    <Container>
      <Col xs="auto">
        <h1 className="text-center">Customer Management System</h1>
      </Col>
      <Col xs="auto">
        {/* Form for customer details */}
        <Form onSubmit={submitForm} style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }} className="mx-auto">
          {/* Name input field */}
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

          {/* Email input field */}
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

          {/* Phone input field */}
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

          {/* Address input field */}
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

          {/* Submit button */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
          
          {/* Update customer details button */}
          <Button variant="info" onClick={() => updateCustomerDetails(form._id)}>
            Update Customer Details
          </Button>
        </Form>
      </Col>
    </Container>
  );
}

// Export the CustomerForm component
export default CustomerForm;
