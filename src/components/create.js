import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import axios from 'axios'

const Create = () => {
  const [formData, setFormData] = useState({
    name: '',
    power: '',
    text: ''
  })

  const addCard = async e => {
    e.preventDefault()
    await axios
      .post('http://localhost:4242/', {
        ...formData
      })
      .then(function (response) {
        if (response.status === 200) {
          setFormData({
            name: '',
            power: '',
            text: ''
          })
        }
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
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })
  return (
    <Form>
      <Col xs={1}>
        <Form.Group controlId='card-title'>
          <Form.Label>Power</Form.Label>
          <Form.Control
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
          <Form.Label>Name</Form.Label>
          <Form.Control
            name='name'
            size='lg'
            type='text'
            placeholder='Scary name'
            onChange={e => onChange(e)}
          />
        </Form.Group>
      </Col>
      <Col xs={7}>
        <Form.Group controlId='card-text'>
          <Form.Label>Card Text</Form.Label>
          <Form.Control
            name='text'
            as='textarea'
            rows={3}
            onChange={e => onChange(e)}
          />
        </Form.Group>
      </Col>
      <Col>
        <Button type='submit' className='mb-2' onClick={e => addCard(e)}>
          Submit
        </Button>
      </Col>
    </Form>
  )
}
export default Create
