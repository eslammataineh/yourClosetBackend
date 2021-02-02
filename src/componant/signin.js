import React, { Component } from "react";
import "../style/css/login.css";
import axios from "axios";
class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      ValidationErr: "",
    };
  }

  handelChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  validationForm = () => {
    let overallresult = true;

    if (!this.state.username) {
      this.setState({
        ValidationErr: "username cannot be empty",
      });
      overallresult = false;
    } else if (!this.state.username.match(/^[a-zA-Z]+$/)) {
      this.setState({
        ValidationErr: "username must be letters ",
      });
      overallresult = false;
    } else if (!this.state.email) {
      this.setState({
        ValidationErr: " email cannot be empty",
      });
      overallresult = false;
    } else if (typeof this.state.email !== "undefined") {
      let lastAtPos = this.state.email.lastIndexOf("@");
      let lastDotPos = this.state.email.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          this.state.email.indexOf("@@") == -1 &&
          lastDotPos > 2 &&
          this.state.email.length - lastDotPos > 2
        )
      ) {
        overallresult = false;

        this.setState({
          ValidationErr: "Email is not valid",
        });
      } else {
        if (!this.state.password) {
          this.setState({
            ValidationErr: "password can't be empty",
          });
        } else {
          this.setState({ ValidationErr: "" });
          return overallresult;
        }
      }
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.validationForm()) {
      axios
        .post("http://localhost:4000/signin", this.state)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });

      this.setState({
        username: "",
        email: "",
        password: "",
      });
    }
  };
  render() {
    return (
      <div className="container-fluid content">
        <img
          className="backgroundhome"
          src={process.env.PUBLIC_URL + "imgs/satan (2).jpg"}
          alt=""
        />
        <div className="container con">
          <div className="row">
            <div className="errors"> {this.state.ValidationErr}</div>
            <form className="col-12 col-md-8 col-lg-6 text-center">
              <div>
                <input
                  type="text"
                  name="username"
                  id="name"
                  placeholder="User name"
                  value={this.state.username}
                  onChange={this.handelChange}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handelChange}
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="Password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.handelChange}
                />
              </div>
              <button type="submit" onClick={this.handleSubmit}>
                Signin
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin;
