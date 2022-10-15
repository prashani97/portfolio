import { Col, Row} from 'react-bootstrap';
import {FaEllipsisH} from 'react-icons/fa';
import { routes } from '../configs/routes.config'
import {AnimatePresence, motion} from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { bool, func } from 'prop-types';

function Sidebar(props) {
   
    return (
            <motion.div animate={{width: props.isOpen ? "300px": "45px"}} className="sidebar sidebar-items">
                <Col className='d-flex justify-content-end m-3'>
                    <FaEllipsisH size={20} onClick={props.toggle}/>
                </Col>
                <Row className='nav-links'>
                    {routes.map((route) => (
                    <NavLink  to={route.path} key={route.title} className="d-flex  link text-white">
                            <Col sm={3} className='nav-icons p-3'>
                                {route.icon}
                            </Col>
                            <AnimatePresence>
                                {props.isOpen && <motion.div sm={9} className='nav-text p-3'>
                                    {route.title}
                                </motion.div>}
                            </AnimatePresence>
                    </NavLink> 
                    ))}
                </Row>
            </motion.div>
    )
}

Sidebar.propTypes={
    isOpen: bool.isRequired,
    toggle: func.isRequired
}

Sidebar.defaultProps={
    isOpen: true
}

export default Sidebar