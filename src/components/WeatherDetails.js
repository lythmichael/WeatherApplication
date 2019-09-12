import React from 'react'
import Skycons from 'react-skycons'

const darkskyUrl = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/3fd87533d2fba1d58ab402eb089f6b0e/59.33,18.06?units=si";

class WeatherDetails extends React.Component {
    state = {
        daily: []
    }

    componentDidMount() {
        fetch(darkskyUrl)
            .then(response => response.json())
            .then(json => this.setState({
                daily: json.daily.data
            }));
    }

    //<h3 className="white-text marginFix">{new Date(time * 1000).toLocaleString('se-se', { weekday: 'long' }).toUpperCase()}</h3> 
    detailComponent = ({ time, title }) => (
        <div className="row center container">
            <div className="card small grey darken-4 col s6">
                <div className="card-content">
                    {console.log(title)}
                    <h3 className="white-text marginFix2">{
                        new Date(time * 1000)
                            .toLocaleDateString('se-SE', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })
                            .toUpperCase()
                    }</h3>
                    <hr />
                    <br />
                    <h3 className="white-text marginFix">Min temp: {title.temperatureMin}</h3>
                    <h3 className="white-text marginFix">Max temp: {title.temperatureMax}</h3>
                    {this.iconComponent(title.icon)}
                </div>
            </div>
        </div>
    )

    iconComponent = icon => {
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        return (

            <Skycons
                color='black'
                style={{ width: 128, height: 64 }}
                icon={currentIcon}
            />

        )
    }

    render() {
        const days = this.state.daily.slice(0, -2);
        console.log(this.state);
        return (
            <div>
                {days.map(d => (<this.detailComponent key={d.time} time={d.time} title={d} />))}
            </div>
        )
    }
}

export default WeatherDetails;