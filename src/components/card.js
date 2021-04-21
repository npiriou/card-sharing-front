import { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'
import { MemoryRouter, Switch, Route } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

import Create from './create'
const Card = ({ name, power, text, id, passUpdate, update }) => {
  const [modal, setModal] = useState(false)
  const [updating, setUpdating] = useState(false)
  const showModal = () => {
    setModal(true)
  }
  const updateCard = () => {
    setUpdating(true)
  }
  const closeModal = () => setModal(false)
  const deleteCard = async () => {
    const resp = await axios
      .delete(`http://localhost:4242/${id}`)
      .then(resp => {
        console.log(resp.status)
        if (resp.status === 200) console.log('200')
        passUpdate(!update)
        closeModal()
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  return (
    <>
      <figure className='card card--normal' onClick={() => showModal()}>
        <figcaption className='card__caption'>
          <h1 className='card__name'>{name}</h1>

          <h3 className='card__type'>{power}</h3>

          <div className='card__stats'>{text}</div>

          {/* <div className='card__abilities'>
          <h4 className='card__ability'>
            <span className='card__label'>Ability</span>
            Run Away
          </h4>
          <h4 className='card__ability'>
            <span className='card__label'>Hidden Ability</span>
            Anticipation
          </h4>
        </div> */}
        </figcaption>
      </figure>
      <ReactModal
        isOpen={modal}
        contentLabel='Example'
        onRequestClose={() => closeModal()}
        shouldCloseOnOverlayClick={true}
      >
        {updating ? (
          <Create
            name={name}
            id={id}
            power={power}
            text={text}
            update={update}
            passUpdate={passUpdate}
            closeModal={closeModal}
          />
        ) : (
          <>
            <div>
              <button onClick={() => closeModal()}>❌</button>
            </div>
            <figure className='card card--normal' onClick={() => showModal()}>
              <figcaption className='card__caption'>
                <h1 className='card__name'>{name}</h1>
                <h3 className='card__type'>{power}</h3>
                <div className='card__stats'>{text}</div>
              </figcaption>
            </figure>
            <button onClick={() => deleteCard()}>🗑️</button>
            <button onClick={() => updateCard()}>🖋️</button>
          </>
        )}
      </ReactModal>
    </>
  )
}

Card.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  power: PropTypes.number,
  id: PropTypes.number,
  update: PropTypes.bool,
  passUpdate: PropTypes.func
}

export default Card
