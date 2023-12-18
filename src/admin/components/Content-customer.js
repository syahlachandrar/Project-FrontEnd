import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Form, Button } from "react-bootstrap";

const ContentAdmin = ({ data, column }) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = async () => {
    try {
      const dataUser = await axios.get("http://localhost:8080/customers");
      setCustomers(dataUser.data);
    } catch (error) {
      console.error("Error fetching customers:", error);
    }
  };

  const deleteCustomers = async (id_user) => {
    await axios.delete(`http://localhost:8080/delete-customers/${id_user}`);
  };

  const [id_user, setIdUser] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateCustomers = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const putData = await axios.put(
        `http://localhost:8080/update-customers/${id_user}`,
        {
          username: username,
          email: email,
        }
      );
      alert(putData.data.messages);
      window.location.reload();
    } catch (error) {
      setError("Update Failed !");
    } finally {
      setLoading(false);
    }
  };

  const showModal = (data) => {
    setIdUser(data.id_user);
    setUsername(data.username);
    setEmail(data.email);
    setShow(true);
  };

  const closeModal = () => {
    setIdUser("");
    setUsername("");
    setEmail("");

    setShow(false); // Change from true to false
    setError(null);
  };

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div>
        <Modal show={show} onHide={closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Form Update Data Customers</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={updateCustomers}>
              <Form.Group className="mb-3" controlId="formCustomers">
                <Form.Control
                  type="text"
                  autoFocus
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                /> <br/>
                <Form.Control
                type="text"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              /><br/>
              </Form.Group><br/>
              <Button type="submit" className="px-4" disabled={loading}>
              {loading ? "Updating..." : "Update"}
            </Button>
            {error && <p className="text-danger">{error}</p>}
            </Form>
          </Modal.Body>
          <Modal.Footer>
          <Button onClick={closeModal} disabled={loading}>
            Close
          </Button>
        </Modal.Footer>
        </Modal>
      </div>

      <div>
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((dataUser, index) => (
              <tr key={dataUser.id_user}>
                <td>{index + 1}</td>
                <td>{dataUser.username}</td>
                <td>{dataUser.email}</td>
                <td>
                  <button
                  style={{border: "1px solid #958874"}}
                    className="btn mr-2"
                    onClick={() => showModal(dataUser)}
                  >
                    update
                  </button>
                  <button
                  style={{border: "1px solid #958874"}}
                    onClick={() => deleteCustomers(dataUser.id_user)}
                    className="btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default ContentAdmin;
