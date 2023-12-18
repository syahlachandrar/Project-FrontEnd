import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import axios from "axios";

const Update = () => {
  const [id_pesanan, setIdPesanan] = useState("");
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [paket, setPaket] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [alamat, setAlamat] = useState("");
  const [pesan, setPesan] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const updateHistory = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const putData = await axios.put(
        `http://localhost:8080/update-booking/${id_pesanan}`,
        {
          nama: nama,
          email: email,
          phone: phone,
          paket: paket,
          tanggal: tanggal,
          alamat: alamat,
          pesan: pesan,
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

  const closeModal = () => {
    setIdPesanan("");
    setNama("");
    setEmail("");
    setPhone("");
    setTanggal("");
    setPaket("");
    setAlamat("");
    setPesan("");
    setShow(true);
    setError(null);
  };

  return (
    <div>
      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Form Update Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={updateHistory}>
            <Form.Group className="mb-3" controlId="formRiwayat">
              <Form.Control
                type="text"
                autoFocus
                onChange={(e) => setNama(e.target.value)}
                value={nama}
              />
              <Form.Control
                type="text"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <Form.Control
                type="text"
                autoFocus
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              />
              <Form.Control
                type="date"
                autoFocus
                onChange={(e) => setTanggal(e.target.value)}
                value={tanggal}
              />
              <Form.Control
                as="select"
                autoFocus
                onChange={(e) => setPaket(e.target.value)}
                value={paket}
              >
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                {/* Add more options as needed */}
              </Form.Control>
              <Form.Control
                as="textarea"
                rows={1}
                autoFocus
                onChange={(e) => setAlamat(e.target.value)}
                value={alamat}
              />
              <Form.Control
                as="textarea"
                rows={1}
                autoFocus
                onChange={(e) => setPesan(e.target.value)}
                value={pesan}
              />
            </Form.Group>
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
  );
};

export default Update