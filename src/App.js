import React, { Component } from 'react'
import axios from 'axios';
import loader from './img/loader.gif'
import SearchBar from './components/SearchBar'
import Header from './components/Header'
import Footer from './components/Footer'
import WeatherDay from './components/WeatherDay'
import './css/style.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading: false,
      meteo: {},
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({inputValue: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    var newValue = this.state.inputValue;
    this.setState({inputValue: newValue});
    console.log(newValue);
  }
  componentWillMount() {
    this.setState({
      isLoading: true
    })
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.inputValue ? this.state.inputValue : 'Paris'}&lang=fr&units=metric&appid=be724fe74c0763368fc2501fa7398520`)
    .then(res => {
      const meteo = res.data;
      this.setState({ 
        isLoading: false,
        meteo
      });
      //console.log(typeof meteo.weather.map(el =>meteo.weather[0].description))
      })
  }

  render() {
    const {isLoading, inputValue, meteo} = this.state
    return (
      <>
        <Header />
        {
          isLoading ?
          <img src={loader} alt="loader" className="loader-page" /> 
          : 
          <>
          <SearchBar handleSubmit={this.handleSubmit} value={inputValue} handleChange={this.handleChange} />
          <section className="container-view">
            <WeatherDay 
              country={meteo.sys.country}
              name={meteo.name} 
              description={meteo.weather.map(el =>meteo.weather[0].description)} 
              icon={meteo.weather.map(el => meteo.weather[0].icon)} 
              temp={meteo.main.temp} 
              wind={meteo.wind.speed} 
              humidity={meteo.main.humidity} 
              tempMin={meteo.main.temp_min} 
              tempMax={meteo.main.temp_max}/>
          </section>
          </>
        }
        <Footer />
      </>
    )
  }
}

export default App;
