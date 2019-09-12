import React from 'react'

const openWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?id=2673730&units=metric&appid=d940a950b29e4ef29ab82d76b18aa91e";

class WeatherInformation extends React.Component {
    state = {
        weather: [],
        temp: []
    }

    componentDidMount() {
        fetch(openWeatherUrl)
            .then(response => response.json())
            .then(json => this.setState({
                weather: json,
                temp: json.main.temp,
            }));
    }

    render() {
        var currentdate = new Date();
        // var datetime = currentdate.getDate() + "/"
        //     + (currentdate.getMonth() + 1) + "/"
        //     + currentdate.getFullYear() + "  "
        //     + currentdate.getHours() + ":"
        //     + currentdate.getMinutes();

        var datetime = new Date().toLocaleString('se-se', { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' }).toUpperCase()
        return (
            <div className="row center container">
                <div className="card medium grey darken-4 col s12">
                    <div className="card-content">
                        <h1 className="white-text">{this.state.weather.name}</h1>
                        <hr />
                        <br />
                        <h3 className="white-text marginFix">{datetime} </h3>
                        <h3 className="white-text marginFix">Temperatur: {this.state.temp}°C</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default WeatherInformation;