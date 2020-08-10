import React, { memo, useState } from 'react';
import Router from 'next/router'
import {
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';

const LoginPage = memo(props => {
  const { isOpen, toggle } = props;

  const [loginError, setLoginError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    fetch('https://api-uat.dress-as.com:4460/vers/v1/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((r) => {
        console.log(r.status);
        if (r.status === 200) {
          Router.push('/')
        }
      })
  }
  return (
    <Card className="w-25 box-shadow">
      <CardBody>
        <Form onSubmit={handleSubmit} method="POST">
          <fieldset>
            <legend className="text-primary bg-gradient-primary font-weight-bold uppercase">
              <h3 className="mt-2 ml-3 text-light text-center">Login</h3>
            </legend>
            <FormGroup>
              <Label for="exampleInputEmail3">Email address</Label>
              <Input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail3"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
              />
              <small id="emailHelp" className="form-text text-muted"></small>
            </FormGroup>
            <FormGroup>
              <Label for="exampleInputPassword3">Password</Label>
              <Input
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword3"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck3"
              />
              <Label check for="exampleCheck3">
                Check me out
              </Label>
            </FormGroup>
          </fieldset>
          <Button color="primary" block size="lg" className="mt-2">
            Submit
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
});

export default LoginPage;
