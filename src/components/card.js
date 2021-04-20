import PropTypes from 'prop-types'

const Card = ({ name, power, text }) => {
  return (
    <figure className='card card--normal'>
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
  )
}

Card.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string,
  power: PropTypes.number
}

export default Card
