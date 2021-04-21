import React from 'react'
import { MemoryRouter, Switch, Route } from 'react-router-dom'

import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { LinkContainer } from 'react-router-bootstrap'

import Home from './components/home.js'
import Create from './components/create.js'
import List from './components/list.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => (
  <>
    <MemoryRouter>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand href='#'>
          <LinkContainer to='/'>
            <span>Card Maker</span>
          </LinkContainer>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#'>
              <LinkContainer to='/create'>
                <span>Creer une carte</span>
              </LinkContainer>
            </Nav.Link>
            <Nav.Link href='#'>
              <LinkContainer to='/list'>
                <span>Liste</span>
              </LinkContainer>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <>
        <Switch>
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/list'>
            <List />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </>
    </MemoryRouter>
  </>
)

export default App
