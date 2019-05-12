import React from 'react'
import { string, number } from 'prop-types'

const WeatherDay = ({name, description, icon, temp, wind, humidity, tempMin, tempMax}) => {
  const date = new Date().toLocaleDateString('fr-FR')
  const imgsrc = 'http://openweathermap.org/img/w/'+icon+'.png'
  return(
    <>
    <article>
      <div className="title">
        <h2>{name}</h2>
        <p>{date}</p>
      </div>
      <div className="info-container">
        <div className="container-sky">
          <p>{description}</p>
          <div>
            <img src={imgsrc} alt="icones" />
            <p className="temp">{temp}°C</p>
          </div>
        </div>
        <div className="other-info">
          <p>Wind: {wind} m/s</p>
          <p>Humidité: {humidity} %</p>
          <p>Température min: {tempMin} °C</p>
          <p>Température max: {tempMax} °C</p>
        </div>
      </div>
    </article>
    </>
  )
}

export default WeatherDay

WeatherDay.propTypes = {
  name: string.isRequired,
  description: string.isRequired,
  icon: string.isRequired,
  temp: number.isRequired,
  wind: number.isRequired,
  humidity: number.isRequired,
  tempMin: number.isRequired,
  tempMax: number.isRequired,
}