import React from 'react'
import './App.scss';
import ToursListCards from './ToursListCards'


function App() {

  const BASE_URL = 'http://localhost:3006'

  const [tours, setTours] = React.useState([])

  function removeTourHandler(id) {
    const newTours = [...tours].filter((tour) => {
      return tour.id !== id
    })
    setTours(newTours)
  }



  async function getTours() {
    try {
      const response = await fetch(BASE_URL + '/tours');
      const result = await response.json()
      setTours(result)
    } catch (error) {
      console.log(`Ошибка - ${error} `)
    }
  }

  React.useEffect(() => {
    getTours()
  }, [])


  if (tours.length === 0) {
    return (
      <div className="tours__wrapper">
        <div className="tours__inner">
          <h1 className="tours__title">No Tours Left</h1>
          <button className="tours__btn-refresh btn" onClick={() => getTours()}>Обновить</button>
        </div>
      </div>
    )
  }


  return (
    <div className="main">
      <ToursListCards tours={tours} getTourId={removeTourHandler} />
    </div>
  );
}

export default App;
