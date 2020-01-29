import { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import debounce from "lodash/debounce";
import Head from "next/head";

import config from "../config";
import { Router } from "../routes";
import { Link } from "../components/Link";
import Layout from "../components/Layout";
import Input from "../components/Input";
import Button from "../components/Button";
import { SubTitle, Title, Body } from "../components/Text";

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const SignupContainer = styled.div`
  margin: auto;
  width: 500px;
  padding: 80px;
`;

export default class Signup extends Component {
  state = {
    email: "",
    password: "",
    passwordVerification: "",
    submitted: false,
    submitting: false,
    valid: false,
    tips: {}
  };
  componentDidMount() {
    this.validChecker = debounce(this.checkValidity, 1000);
  }
  signup = async () => {
    console.log("try submit");
    const { valid, email, password } = this.state;
    if (!valid) {
      return false;
    }
    this.setState({ submitting: true });
    const response = await axios({
      url: config.api.host + "/user",
      method: "POST",
      data: { email, password }
    });
    console.log(response.data);
    if (response.data.error) {
      if (response.data.error === "email_exists") {
        this.setState({
          submitting: false,
          valid: false,
          tips: { email: "This email is already taken =(" }
        });
      }
    } else {
      this.setState({ submitted: true });
    }
  };
  checkValidity = () => {
    const { email, password } = this.state;
    console.log(Math.random());
    console.log(validateEmail(email));
    const tips = {};
    if (email.length > 0 && !validateEmail(email)) {
      tips.email = "Not quite an email";
    }
    if (password.length > 0 && password.length < 8) {
      tips.password = "Use 8 characters at least";
    }
    const valid =
      Object.keys(tips).length === 0 &&
      email.length > 0 &&
      password.length > 0;
    console.log(tips, valid);
    this.setState({ tips, valid });
  };
  onChangeEmail = ev => {
    this.setState({ email: ev.target.value });
    this.validChecker();
  };
  onChangePassword = ev => {
    this.setState({ password: ev.target.value });
    this.validChecker();
  };

  onKeyDown = event => {
    if (event && event.key === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      this.checkValidity();
      setTimeout(this.signup, 100);
    }
  };

  render() {
    const { auth, user, isTouch } = this.props;
    const {
      email,
      password,
      submitted,
      tips,
      valid,
      submitting
    } = this.state;
    if (auth) {
      Router.pushRoute("dashboard");
    }
    return (
      <Layout auth={auth} user={user}>
        <Head>
          <title>Signup - Jaresume</title>
        </Head>
        <SignupContainer onKeyDown={this.onKeyDown}>
          {submitted && (
            <div>Great work! Check your inbox to confirm your account.</div>
          )}
          {!submitted && (
            <div>
              {" "}
              <br />
              <br />
              <Title>Signup</Title>
              <br />
              <br />
              <Input
                label="Email"
                subLabel={tips.email}
                type="text"
                onChange={this.onChangeEmail}
                value={email}
              />
              <Input
                label="Password"
                type="password"
                subLabel={tips.password}
                onChange={this.onChangePassword}
                value={password}
              />
              <Button disabled={submitting} onClick={this.signup}>
                Signup
              </Button>
              <br />
              <Body>
                {/* Already have an account? <Link href="/login">login</Link> */}
              </Body>
            </div>
          )}
        </SignupContainer>
      </Layout>
    );
  }
}