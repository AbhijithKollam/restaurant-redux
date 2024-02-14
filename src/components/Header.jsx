import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { search } from '../redux/restaurantSlice';

function Header() {
    const dispatch = useDispatch()
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home"><Link to={'/'} style={{textDecoration:"none", color:"white"}}> FOOD CIRCLE</Link></Navbar.Brand>
                    <div className='d-flex justify-content-center align-items-center'>
                    <input type="text" className='form-control ms-5 bg-transparent' 
                    onChange={(e)=>dispatch(search(e.target.value))} 
                    />
                    <i class="fa-solid fa-magnifying-glass ms-3 text-white fs-5"></i>
                    </div>

                    <img 
                    height={'50px'}
                    width={'50px'}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDLjrqALZp_hL82j-c59WDh0ql4l4w5yZtRWf0DppPTw&s" className='bg-primary' alt="" />
                </Container>
            </Navbar>
        </>
    )
}

export default Header