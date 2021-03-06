import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';

import { Form, Col, Row, Button, Container } from 'react-bootstrap';
import css from '../views/HomeView.module.css';

const RegisterView = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <h1 className={css.color}>Registration page</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label className={css.color}>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                required
                value={name}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Form.Label className={css.color}>Mail</Form.Label>
          <Row>
            <Col>
              <Form.Control
                type="email"
                name="email"
                required
                value={email}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Form.Label className={css.color}>Password</Form.Label>
          <Row>
            <Col>
              <Form.Control
                type="password"
                name="password"
                required
                value={password}
                onChange={handleChange}
              />
            </Col>
          </Row>
        </Form.Group>
        <Row>
          <Col>
            <Button className={css.button} type="submit">
              Register
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default RegisterView;
