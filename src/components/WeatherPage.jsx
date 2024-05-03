import { Col, Container, Image, Row } from "react-bootstrap";
import day from "../assets/day.svg";
import sunrise from "../assets/icons8-sunrise-40.png";
import sunset from "../assets/icons8-sunset-40.png";
import wind from "../assets/icons8-wind-48.png";
import windDirection from "../assets/icons8-wind-direction-64.png";
import pressure from "../assets/icons8-pressure-40.png";
import humidity from "../assets/icons8-water-48.png";
import feelsLike from "../assets/icons8-hot-temperature-53.png";
import visibility from "../assets//icons8-visibility-48.png";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const WeatherPage = () => {
  const params = useParams();
  const [coordinates, setcoordinates] = useState({
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    city: "",
    description: "",
    sunrise: "",
    sunset: "",
    wind: "",
    windDirection: "",
  });

  const fetchLatLon = () => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${params.id}&limit=1&appid=dec4bb695671249ba51129b7a76f7324`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Fetch fallita");
        }
      })
      .then((coordinate) => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coordinate[0].lat}&lon=${coordinate[0].lon}&appid=dec4bb695671249ba51129b7a76f7324`
        )
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("Fetch fallita");
            }
          })
          .then((weather) => {
            console.log(weather);
            let dateSunrise = new Date(weather.sys.sunrise * 1000);
            let timeSunrise;
            if (dateSunrise.getHours() < 12) {
              timeSunrise = dateSunrise.getHours() + ":" + dateSunrise.getMinutes() + " AM";
            } else {
              timeSunrise = dateSunrise.getHours() - 12 + ":" + dateSunrise.getMinutes() + " PM";
            }

            let dateSunset = new Date(weather.sys.sunset * 1000);
            let timeSunset;
            if (dateSunset.getHours() < 12) {
              timeSunset = dateSunset.getHours() + ":" + dateSunset.getMinutes() + " AM";
            } else {
              timeSunset = dateSunset.getHours() - 12 + ":" + dateSunset.getMinutes() + " PM";
            }

            setcoordinates({
              temp: parseInt(weather.main.temp - 273.15),
              temp_max: parseInt(weather.main.temp_max - 273.15),
              temp_min: parseInt(weather.main.temp_min - 273.15),
              city: weather.name,
              description: weather.weather[0].main + ", " + weather.weather[0].description,
              sunrise: timeSunrise,
              sunset: timeSunset,
              wind: weather.wind.speed + " km/h",
              windDirection: weather.wind.deg + " deg",
              pressure: weather.main.pressure + " hPa",
              visibility: weather.visibility / 1000 + " km",
              feels_like: parseInt(weather.main.feels_like - 273.15),
              humidity: weather.main.humidity + "%",
            });
          });
      });
  };
  useEffect(() => {
    fetchLatLon();
  }, []);
  return (
    <Container fluid className="searchContainer">
      <Row className="align-items-center mb-5 ">
        <Col xs={6} lg={4}>
          <Image src={day} alt="sunny day" className=" w-75" />
        </Col>
        <Col xs={6} lg={4}>
          <h3 className="fw-bold font-grey">{coordinates.city}</h3>
          <h2 className="text-white big-temperature fw-bold">{coordinates.temp}°</h2>
          <h3 className="mt-3 fs-5 font-grey ">{coordinates.description}</h3>
        </Col>
        <Col xs={6} lg={2} className="d-none d-lg-block">
          <h2 className="text-white fs-4">Min</h2>
          <h2 className="text-white mb-5 display-3 fw-semibold">{coordinates.temp_min}°</h2>
        </Col>
        <Col xs={6} lg={2} className="d-none d-lg-block">
          <h2 className="text-white fs-4">Max</h2>
          <h2 className="text-white mb-5 display-3 fw-semibold">{coordinates.temp_max}°</h2>
        </Col>
      </Row>

      <Row className="align-items-center ms-3 ">
        <Col xs={6} md={4} lg={3}>
          <Row>
            <Col xxl={3}>
              <Image src={sunrise} alt="sunny day" className=" ms-5 mt-2 " />
            </Col>
            <Col xxl={9}>
              <h3 className="mt-3 fs-5 font-grey  ">Sunrise</h3>
              <h3 className="mt-3 fs-5 text-white mt-0">{coordinates.sunrise} </h3>
            </Col>
          </Row>
        </Col>
        <Col xs={6} md={4} lg={3}>
          <Row>
            <Col xxl={3}>
              <Image src={sunset} alt="sunny day" className=" ms-5 mt-2 " />
            </Col>
            <Col xxl={9}>
              <h3 className="mt-3 fs-5 font-grey  ">Sunset</h3>
              <h3 className="mt-3 fs-5 text-white mt-0">{coordinates.sunset} </h3>
            </Col>
          </Row>
        </Col>
        <Col xs={6} md={4} lg={3}>
          <Row>
            <Col xxl={3}>
              <Image src={wind} alt="sunny day" className=" ms-5 mt-2 " />
            </Col>
            <Col xxl={9}>
              <h3 className="mt-3 fs-5 font-grey  ">Wind</h3>
              <h3 className="mt-3 fs-5 text-white mt-0">{coordinates.wind} </h3>
            </Col>
          </Row>
        </Col>
        <Col xs={6} md={4} lg={3}>
          <Row>
            <Col xxl={3}>
              <Image src={windDirection} alt="sunny day" className=" ms-5 mt-2 " />
            </Col>
            <Col xxl={9}>
              <h3 className="mt-3 fs-5 font-grey  ">Wind Direction</h3>
              <h3 className="mt-3 fs-5 text-white mt-0">{coordinates.windDirection} </h3>
            </Col>
          </Row>
        </Col>
        <Col xs={6} md={4} lg={3} className="mt-5">
          <Row>
            <Col xxl={3}>
              <Image src={pressure} alt="sunny day" className=" ms-5 mt-2 " />
            </Col>
            <Col xxl={9}>
              <h3 className="mt-3 fs-5 font-grey  ">Pressure</h3>
              <h3 className="mt-3 fs-5 text-white mt-0">{coordinates.pressure} </h3>
            </Col>
          </Row>
        </Col>
        <Col xs={6} md={4} lg={3} className="mt-5">
          <Row>
            <Col xxl={3}>
              <Image src={humidity} alt="sunny day" className=" ms-5 mt-2 " />
            </Col>
            <Col xxl={9}>
              <h3 className="mt-3 fs-5 font-grey  ">Humidity</h3>
              <h3 className="mt-3 fs-5 text-white mt-0">{coordinates.humidity} </h3>
            </Col>
          </Row>
        </Col>
        <Col xs={6} md={4} lg={3} className="mt-5">
          <Row>
            <Col xxl={3}>
              <Image src={feelsLike} alt="sunny day" className=" ms-5 mt-2 " />
            </Col>
            <Col xxl={9}>
              <h3 className="mt-3 fs-5 font-grey  ">Feels Like</h3>
              <h3 className="mt-3 fs-5 text-white mt-0">{coordinates.feels_like}° </h3>
            </Col>
          </Row>
        </Col>
        <Col xs={6} md={4} lg={3} className="mt-5">
          <Row>
            <Col xxl={3}>
              <Image src={visibility} alt="sunny day" className=" ms-5 mt-2 " />
            </Col>
            <Col xxl={9}>
              <h3 className="mt-3 fs-5 font-grey  ">Visibility</h3>
              <h3 className="mt-3 fs-5 text-white mt-0">{coordinates.visibility} </h3>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default WeatherPage;
