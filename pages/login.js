import { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import Head from "next/head";

import { Router } from "../routes";
import { Link } from "../components/Link";
// import Layout from "../components/Layout";
import Input from "../components/Input";
import Button from "../components/Button";
// import { Title, Body } from "../components/Text";
import config from "../config";
// import { TouchLogin } from "../components/Login";

const LoginContainer = styled.div`
  margin: auto;
  width: 500px;
  padding-top: 80px;
`;

export default class Signup extends Component {
  state = {
    email: "",
    password: "",
    passwordVerification: "",
    submitting: false,
    tips: {}
  };
  login = async () => {
    const { checkAuth, submitting } = this.props;
    const { email, password } = this.state;
    if (submitting) {
      return false;
    }
    if (email.length === 0 && password.length === 0) {
      return false;
    }
    this.setState({ submitting: true });
    const tips = {};
    const response = await axios({
      url: config.api.host + "/auth",
      method: "POST",
      data: { email, password },
      withCredentials: true
    });
    this.setState({ submitting: false });
    if (!response.data.error) {
      await checkAuth();
      Router.pushRoute("dashboard");
    } else {
      if (response.data.error === "not_registered") {
        tips.email = "Seems like you have the wrong email?";
      }
      if (response.data.error === "incorrect_password") {
        tips.password = "You've got the password wrong";
      }
      if (response.data.error === "not_verified") {
        tips.email = "Looks like you haven't confirmed your email...";
      }
    }
    this.setState({
      tips
    });
    console.log(response);
  };

  onChangeEmail = ev => {
    this.setState({ email: ev.target.value });
  };
  onChangePassword = ev => {
    this.setState({ password: ev.target.value });
  };
  onKeyDown = event => {
    if (event && event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      this.login();
    }
  };
  render() {
    const { auth, user, isTouch } = this.props;

    if (auth) {
      Router.pushRoute("dashboard");
    }

    const { email, password, submitting, tips } = this.state;
    return (
    //   <Layout auth={auth} user={user} isTouch={isTouch}>
    //     <Head>
    //       <title>Login - Jaresume</title>
    //     </Head>
    //     {isTouch && (
    //       <TouchLogin
    //         email={email}
    //         password={password}
    //         submitting={submitting}
    //         tips={tips}
    //         onChangeEmail={this.onChangeEmail}
    //         onChangePassword={this.onChangePassword}
    //         login={this.login}
    //         onKeyDown={this.onKeyDown}
    //       />
    //     )}
    //     {!isTouch && (
          <LoginContainer onKeyDown={this.onKeyDown}>
            <form>
              <br />
              <br />
              <p>Login</p>
              {/* <Title>Login</Title> */}
              <br />
              <br />
              <Input
                label="Email"
                subLabel={tips.email}
                type="email"
                onChange={this.onChangeEmail}
                value={email}
              />
              <Input
                type="password"
                label="Password"
                subLabel={tips.password}
                onChange={this.onChangePassword}
                value={password}
              />
              <Button disabled={submitting} onClick={this.login}>
                Login
              </Button>
            </form>

            <br />
            <p>
              {/* Don't have an account? <Link href="/signup">signup</Link> */}
            </p>
            <p>
              {/* Forgot your password? <Link to="forgot_password">reset</Link> */}
            </p>
          </LoginContainer>
    //     )}
    //   </Layout>
    );
  }
}