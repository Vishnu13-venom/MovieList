import React, { useContext } from 'react';
import { FaEye, } from "react-icons/fa";
import { Link } from "react-router-dom";
import '../styles/login.css'
import { GlobalContext } from '../context/GlobalState';
import Slider from '../inc/slider';

export const Home = () => {
  console.log("DEBUG: Loading Home");
  const { home, addMovieToWatched } = useContext(GlobalContext);
  console.log("DEBUG: Home Data: ", home);


  return (
    <>
      <div className='wrap'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">MoviesMis</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" to="/watched">Watched movie</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/add">Add Movie</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Slider />
        <div className='heading'>
          <h2>My Watchlist</h2>
        </div>
        <div className="container mb-3">
          <div className="row">

            {
              home.map((value, index) => {
                return (
                  <div className="col-md-3 my-3 mb-2" key={index}>
                    <div className="card" style={{ width: "17rem", border: "none" }}>

                      <img src={!value.Poster ? "https://cdnimg.rg.ru/img/content/226/66/67/iStock-1314587620_d_850.jpg" : value.Poster} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <button
                          className='btn btn-outline-success my-1 btn-sm'
                          onClick={() => addMovieToWatched(value)}
                        >

                          <FaEye />
                        </button>
                        <h5 className="card-title">{value.Title}</h5>
                        <div className="card-text mb-2">Year: {value.Year}</div>

                      </div>
                    </div>

                  </div>

                )
              })
            }
          </div>
        </div>
      </div>
    </>


  )
}
export default Home;