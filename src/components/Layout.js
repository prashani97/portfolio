import {useState, useEffect} from 'react';
import { Col, Row, Container } from 'react-bootstrap'
import Sidebar from './Sidebar'
import '../App.css'
import { useWindowSize } from '../hooks/useWindowSize'
import { object } from 'prop-types';

function Layout(props) {

  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const size = useWindowSize();

  useEffect(()=>{
      setIsOpen(!(size.width<768));
  },[size.width])

  return (
    <Container fluid>
      <Row>
        <Col xs={1}>
          <Sidebar isOpen={isOpen} toggle={()=>toggle()}/>
        </Col>
        <Col xs={11} className={`${isOpen?'content-halfWidth':'content-fullWidth'}`}>
          {props.children}
        </Col>
      </Row>
    </Container>
  )
}

Layout.propTypes={
  children: object
}

export default Layout