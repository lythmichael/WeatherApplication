import React from 'react'
import WeatherInformation from './WeatherInformation';
import WeatherDetails from './WeatherDetails';

class Home extends React.Component {

    render() {
        return (
            <div className="Home">
                <WeatherInformation />
                <WeatherDetails />
            </div>
        )
    }
}

export default Home