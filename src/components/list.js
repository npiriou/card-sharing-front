import { useState, useEffect } from 'react'
import axios from 'axios'

import Card from './card'
import './list.css'

const List = () => {
  const [data, setData] = useState([])
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const resq = await axios
        .get(`http://localhost:4242/`)
        .then(function (response) {
          if (response.status === 200) {
            // setData(response.data)
            console.log(response.data)
            setData(response.data)
            console.log('updated dat')
          }
        })
        .catch(error => {
          // Error 😨
          if (error.response) {
            /*
             * The request was made and the server responded with a
             * status code that falls out of the range of 2xx
             */
            console.log(error.response.data)
            console.log(error.response.status)
            console.log(error.response.headers)
          } else if (error.request) {
            /*
             * The request was made but no response was received, `error.request`
             * is an instance of XMLHttpRequest in the browser and an instance
             * of http.ClientRequest in Node.js
             */
            console.log(error.request)
          } else {
            // Something happened in setting up the request and triggered an Error
            console.log('Error', error.message)
          }
          console.log(error.config)
        })
    }
    fetchData()
  }, [update])

  return (
    <div className='cards'>
      {data.map(card => (
        <Card
          key={card.id}
          id={card.id}
          name={card.name}
          power={card.power}
          text={card.text}
          passUpdate={setUpdate}
          update={update}
        />
      ))}
    </div>
  )
}
export default List
