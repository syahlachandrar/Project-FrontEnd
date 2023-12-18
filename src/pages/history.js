import React,{ useState, useEffect } from "react";
import axios from "axios";
import { Modal, Form, Button } from "react-bootstrap";
import Header from "../components/Navbar"

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = async () => {
    const dataHistory = await axios.get("http://localhost:8080/history");
    setHistory(dataHistory.data);
  };

  const deleteHistory = async (id_pesanan) => {
    await axios.delete(`http://localhost:8080/delete-booking/${id_pesanan}`);
    getHistory();
  };

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

  const showModal = (data) => {
    setIdPesanan(data.id_pesanan);
    setNama(data.nama);
    setEmail(data.email);
    setPhone(data.phone);
    setPaket(data.paket);
    setTanggal(data.tanggal);
    setAlamat(data.alamat);
    setPesan(data.pesan);
    setShow(true);
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
    setShow(false); // Change from true to false
    setError(null);
  };
  

  return (
    <div className="container">
      <div style={{ margin: "0", width: "100%", backgroundColor: "#F4F0F0" }}>
                <Header />
            </div>

      <h1>History</h1>

      <Modal show={show} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Form Update Data</Modal.Title>
        </Modal.Header><br/>
        <Modal.Body>
          <Form onSubmit={updateHistory}>
            <Form.Group className="mb-3" controlId="formRiwayat">
              <Form.Control
                type="text"
                autoFocus
                onChange={(e) => setNama(e.target.value)}
                value={nama}
              /><br/>
              <Form.Control
                type="text"
                autoFocus
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              /><br/>
              <Form.Control
                type="text"
                autoFocus
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              /><br/>
              <Form.Control
                type="date"
                autoFocus
                onChange={(e) => setTanggal(e.target.value)}
                value={tanggal}
              /><br/>
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
              </Form.Control><br/>
              <Form.Control
                as="textarea"
                rows={1}
                autoFocus
                onChange={(e) => setAlamat(e.target.value)}
                value={alamat}
              /><br/>
              <Form.Control
                as="textarea"
                rows={1}
                autoFocus
                onChange={(e) => setPesan(e.target.value)}
                value={pesan}
              />
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

      <div>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Date</th>
              <th>Package</th>
              <th>Address</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {history.map((dataHistory, index) => (
              <tr key={dataHistory.id_pesanan}>
                <td>{index + 1}</td>
                <td>{dataHistory.nama}</td>
                <td>{dataHistory.email}</td>
                <td>{dataHistory.phone}</td>
                <td>{dataHistory.tanggal}</td>
                <td>{dataHistory.paket}</td>
                <td>{dataHistory.alamat}</td>
                <td>{dataHistory.pesan}</td>
                <td>
                <button
                style={{border: "1px solid #958874"}}
                    className="btn"
                    onClick={() => showModal(dataHistory)}
                  >
                    update
                  </button>
                  <button
                  style={{border: "1px solid #958874"}}
                    onClick={() => deleteHistory(dataHistory.id_pesanan)}
                    className="btn "
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default History;
