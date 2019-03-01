import React, { Component } from 'react';
import { Router, Route, Redirect, Switch } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import createBrowserHistory from 'history/createBrowserHistory';

import Home from './Home/Home';
import Details from './Details/Details'
import Header from './Header/Header';
import Register from './Register/Register';
import Login from './Login/Login';
import Create from './Create/Create';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      isAdmin: false,
      movies: [],
      history: createBrowserHistory()
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e, data, isSingup) {
    e.preventDefault();
    fetch('http://localhost:9999/auth/sign' + (isSingup ? 'up' : 'in'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(data => data.json())
      .then(responseBody => {
        if (responseBody.username) {
          this.setState({
            username: responseBody.username,
            isAdmin: responseBody.isAdmin
          });
          localStorage.setItem('username', responseBody.username);
          localStorage.setItem('isAdmin', responseBody.isAdmin);
          toast.success(`Welcome, ${responseBody.username}`, {
            closeButton: false
          });
        } else {
          toast.error(responseBody.message, {
            closeButton: false
          })
        }
      })
  }

  handleCreateSubmit(e, data) {
    e.preventDefault();
    fetch('http://localhost:9999/feed/movie/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(data => data.json())
      .then(responseBody => {
        if (!responseBody.error) {
          toast.success(responseBody.message, {
            closeButton: false
          });
        } else {
          toast.error(responseBody.message, {
            closeButton: false
          })
        }
      })
  }

  handleLogout() {
    this.setState({ username: null, isAdmin: false });
    this.state.history.push('/login');
    localStorage.clear();
    toast.success('Successfully logout!');
  }

  render() {
    return (
      <div className="App">
        <ToastContainer autoClose={2000} closeButton={false} />
        <Router history={this.state.history} >
          <div>
            <Header handleLogout={this.handleLogout} {...this.state} />
            <Switch>
              <Route path="/" exact render={(props) => <Home {...props} {...this.state} />} />} />
              <Route path="/movies/:id" render={ (props) => <Details {...props} movie={this.state.movies[this.state.selectedMovieId]} />} />
              <Route path="/create" exact component={() => this.state.isAdmin ? (<Create handleCreateSubmit={this.handleCreateSubmit} handleChange={this.handleChange} />) : <Redirect to={{ pathname: '/login' }} />} />
              <Route path="/register" component={() => <Register handleSubmit={this.handleSubmit} handleChange={this.handleChange} />} exact />
              <Route path="/login" component={() => <Login handleSubmit={this.handleSubmit} handleChange={this.handleChange} />} exact />
              <Route Route render={() => <h1>Page not found.</h1>} />
            </Switch>
          </div>

        </Router>
      </div>
    );
  }
}

export default App;
