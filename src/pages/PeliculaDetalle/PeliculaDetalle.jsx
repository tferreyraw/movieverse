import { useEffect, useState } from "react";
import { get } from "../../utils/connection";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container.js";
import Row from "react-bootstrap/esm/Row.js";
import Col from "react-bootstrap/esm/Col.js";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import "./PeliculaDetalle.css";

export const PeliculaDetalle = () => {
  const [pelicula, setPelicula] = useState(null);

  const { peliculaId } = useParams();

  useEffect(() => {
    get(`/movie/${peliculaId}?language=es-MX`).then((data) => {
      setPelicula(data);
    });
  }, [peliculaId]);

  if (!pelicula) {
    return null;
  }

  const imgURL = `https://image.tmdb.org/t/p/w300${pelicula.poster_path}`;

  return (
    <Container fluid className='contenedorDetalle text-white mb-3 mt-3'>
      <div className='title-container'>
        <Row className=' pb-3'>
          <Col sm={12} md={8} lg={8} className='title pb-2'>
            {pelicula.title}
          </Col>
          <Col sm={12} md={4} lg={4} className='date container'>
            {pelicula.release_date}
          </Col>
        </Row>
        <Row className='tagline'>{pelicula.tagline}</Row>
      </div>
      <Row className='text-white'>
        <Col
          sm={12}
          md={6}
          lg={5}
          className='d-flex align-items-center justify-content-center'
        >
          <img className='img' src={imgURL} alt={pelicula.title} />
        </Col>
        <Col sm={12} md={6} lg={7}>
          <div className='peliculaDetalle'>
            <Accordion defaultActiveKey='0'>
              <Accordion.Item eventKey='0'>
                <Accordion.Header className='acordeon-header'>
                  <strong>Generos</strong>
                </Accordion.Header>
                <Accordion.Body className='acordeon'>
                  <ListGroup horizontal='lg' className='justify-content-center'>
                    {pelicula.genres.map((genre) => (
                      <ListGroup.Item
                        key={genre.id}
                        variant='danger'
                        className='list-acordeon'
                      >
                        <strong>{genre.name}</strong>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey='1'>
                <Accordion.Header>
                  <strong> Popularidad</strong>
                </Accordion.Header>
                <Accordion.Body className='popularity-acordeon'>
                  <ListGroup
                    horizontal='lg'
                    className='justify-content-center  '
                  >
                    <ListGroup.Item className='list-acordeon' variant='danger'>
                      <strong>Popularidad: </strong>
                      {pelicula.popularity.toFixed(0)}
                    </ListGroup.Item>
                    <ListGroup.Item className='list-acordeon' variant='danger'>
                      <strong>Puntuacion: </strong>{" "}
                      {pelicula.vote_average.toFixed(2)}
                    </ListGroup.Item>
                    <ListGroup.Item className='list-acordeon' variant='danger'>
                      <strong>Votos: </strong>
                      {pelicula.vote_count}
                    </ListGroup.Item>
                  </ListGroup>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Card>
              <Card.Body className='description'>
                <p>
                  <strong>Descripción: </strong>
                  {pelicula.overview}
                </p>
                <p>
                  <strong> Duración: </strong> {pelicula.runtime} minutos
                </p>
              </Card.Body>
            </Card>
            <ListGroup horizontal className='align-self-center'>
              <ListGroup.Item variant='primary'>
                <strong>
                  Presupuesto:{" "}
                  {pelicula.budget.toLocaleString("es-ES", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                  })}
                </strong>
              </ListGroup.Item>
              <ListGroup.Item variant='success'>
                <strong>
                  Recaudación:{" "}
                  {pelicula.revenue.toLocaleString("es-ES", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                  })}
                </strong>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
