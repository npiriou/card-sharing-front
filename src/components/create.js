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
  const [ok, setOk] = useState(false)

  const addCard = async e => {
    e.preventDefault()
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
export default Create
