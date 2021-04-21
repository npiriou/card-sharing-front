import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

const Create = props => {
  const [formData, setFormData] = useState(
    props.id === null
      ? {
          name: '',
          power: '',
          text: ''
        }
      : {
          name: props.name,
          power: props.power,
          text: props.text
        }
  )
  const [ok, setOk] = useState(false)

  const addCard = async e => {
    e.preventDefault()
    if (props.id !== null) {
      const response = await axios
        .put(`http://localhost:4242/${props.id}`, {
          ...formData
        })
        .then(function (response) {
          setFormData({
            name: '',
            power: '',
            text: ''
          })
          setOk(true)
          setTimeout(() => {
            setOk(false)
          }, 3000)
          props.passUpdate(!props.update)
          props.closeModal()
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          } else if (error.request) {
            console.log(error.request)
          } else {
            console.log('Error', error.message)
          }
          console.log(error.config)
        })
    } else {
      const response = await axios
        .post('http://localhost:4242/', {
          ...formData
        })
        .then(function (response) {
          setFormData({
            name: '',
            power: '',
            text: ''
          })
          setOk(true)
          setTimeout(() => {
            setOk(false)
          }, 3000)
        })
        .catch(error => {
          if (error.response) {
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          } else if (error.request) {
            console.log(error.request)
          } else {
            console.log('Error', error.message)
          }
          console.log(error.config)
        })
    }
  }
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })
  return (
    <Form>
      <Col xs={1}>
        <Form.Group controlId='card-title'>
          <Form.Label>Puissance*</Form.Label>
          <Form.Control
            value={formData.power}
            name='power'
            size='lg'
            type='numer'
            placeholder='X'
            onChange={e => onChange(e)}
          />
        </Form.Group>
      </Col>
      <Col xs={7}>
        <Form.Group controlId='card-title'>
          <Form.Label>Nom*</Form.Label>
          <Form.Control
            value={formData.name}
            name='name'
            size='lg'
            type='text'
            placeholder=''
            onChange={e => onChange(e)}
          />
        </Form.Group>
      </Col>
      <Col xs={7}>
        <Form.Group controlId='card-text'>
          <Form.Label>Texte de la carte</Form.Label>
          <Form.Control
            value={formData.text}
            name='text'
            as='textarea'
            rows={3}
            onChange={e => onChange(e)}
          />
        </Form.Group>
      </Col>
      <Col>
        <Button type='submit' className='mb-2' onClick={e => addCard(e)}>
          💾
        </Button>
        {ok ? <span>💾 👌</span> : ''}
      </Col>
    </Form>
  )
}
Create.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  power: PropTypes.number,
  id: PropTypes.number,
  update: PropTypes.bool,
  passUpdate: PropTypes.func,
  closeModal: PropTypes.func
}
export default Create
