import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';

import { Form, Col, Row, Button, Container } from 'react-bootstrap';
import css from '../views/HomeView.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <h1 className={css.color}>Login page</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Row>
            <Col>
              <Form.Label className={css.color}>email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                required
                value={email}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Form.Label className={css.color}>password:</Form.Label>
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
          <Row>
            <Col>
              <Button type="submit">Log in</Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Container>
  );
}
