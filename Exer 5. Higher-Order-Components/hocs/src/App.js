import React, { Component } from 'react';
import './App.css';
import Article from './components/Article/Article';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import warningWrapper from './hocs/worningWrapper';
import errorHandlingWrapper from './hocs/errorHandlingWrapper';
import BindingForm from './components/BindingForm/BindingForm';

const ArticleWithWorning = warningWrapper(errorHandlingWrapper(Article));
const RegisterWithWorning = warningWrapper(errorHandlingWrapper(Register));
const NavigationWithWorning = warningWrapper(errorHandlingWrapper(Navigation));

class App extends Component {
  onSubmit(e, data) {
    e.preventDefault();
    console.log(data);
  }

  render() {
    return (
      <section className="App">
        <BindingForm onSubmit={this.onSubmit}>
          <h1>Login form</h1>
          <input type="text" name="username" placeholder="username" />
          <input type="text" name="password" placeholder="password" />
        </BindingForm>
        <BindingForm onSubmit={this.onSubmit}>
          <h1>Movie form</h1>
          <input type="text" name="movie" placeholder="movie" />
          <input type="text" name="description" placeholder="description" />
          <input type="text" name="posterUrl" placeholder="posterUrl" />
        </BindingForm>
        <ArticleWithWorning />
        <RegisterWithWorning />
        <NavigationWithWorning />
      </section>
    );
  }
}

export default App;
