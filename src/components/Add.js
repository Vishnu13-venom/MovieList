import axios from 'axios'
import '../styles/login.css'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { GlobalContext } from "./../context/GlobalState";

function Add() {
  const [text, setText] = useState("");
  const [movie, setMovie] = useState([]);
  const { addMovieToWatchlist, addMovieToHome } = useContext(GlobalContext);


  const changeText = (event) => {
    // console.log(event);
    setText(event.target.value)
  }

  const getMovie = (e) => {
    e.preventDefault();

    axios.get(`https://www.omdbapi.com/?s=${text}&apikey=43033444`)
      .then((response) => {
        console.log(response);
        setMovie(response.data.Search)
      })
  }
  return (
    <> 
    <div className = "bodyin">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Movies List</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/Home">Home</Link>
              </li>
            </ul>
            <form className="d-flex" onSubmit={getMovie}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={text} onChange={changeText} />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <div className=" container mb-3">
        <div className="row">
          {
            movie.map((value, index) => {
              return (
                <div className="col-md-3 my-3 mb-2" key={index}>
                  <div className="card" style={{ width: "17rem" }}>
                    <img src={!value.Poster ? "https://cdnimg.rg.ru/img/content/226/66/67/iStock-1314587620_d_850.jpg" : value.Poster} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{value.Title}</h5>
                      <div className="card-text mb-2">Year: {value.Year}</div>
                      <button type="button" rel="nonopener" className="btn btn-success btn-sm" onClick={() => addMovieToHome(value)}>Add to WatchList</button>
                      <button type="button" rel="nonopener" className="btn btn-success btn-sm mx-2" style={{ marginLeft: 2 }} onClick={() => addMovieToWatchlist(value)}>Watched</button>
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

export default Add;