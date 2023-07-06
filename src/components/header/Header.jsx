import "./Header.css";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/esm/Row.js";
import Col from "react-bootstrap/esm/Col.js";

export const Header = ({ changeSearchValue }) => {
  return (
    <Col className='container-fluid d-flex align-items-center p-4 header'>
      <Link to={"/"} className='col text-decoration-none link'>
        <Col sm={8} className=' d-flex align-items-center '>
          <Row className='d-flex align-items-center text-icon justify-content-center'>
            <img className='svg ' src='../pelis.svg' alt='Icono  ' />
            MovieVerse
          </Row>
        </Col>
      </Link>
      <Col sm={4} md={2} lg={2}>
        <input
          onChange={(ev) => changeSearchValue(ev.target.value)}
          className='form-control'
          type='search'
          placeholder='Buscar...'
        />
      </Col>
    </Col>
  );
};
