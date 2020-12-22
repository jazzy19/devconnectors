import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import jay from './jay.jpg';
import smit from './smit.png';
const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={jay} />
          <Card.Body>
            <Card.Title>
              Jay Solanki
              <a href="https://drive.google.com/file/d/1ofLqVWRqanCFg5ptgJKJnYN9mM7PEkuK/view?usp=sharing">
                . <i class="fas fa-file"></i>
              </a>
            </Card.Title>
            <Card.Text>
              Coming with the rare combination of Designing and Development
              skills, which can make work looks more creative.<br></br>{' '}
              <strong>Skills</strong>
              <br></br>Full Stack Development
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <p className="text-muted">
              <a href="https://www.linkedin.com/in/jay-solanki-074355179/">
                <i class="fab fa-linkedin"></i>
              </a>{' '}
              <a href="https://github.com/jazzy19">
                <i class="fab fa-github"></i>
              </a>{' '}
              <a href="https://www.instagram.com/jaysolankiphotography/">
                <i class="fab fa-instagram"></i>
              </a>{' '}
              <a href="https://jaysolanki736@gmail.com">
                <i class="fas fa-envelope"></i>
              </a>{' '}
            </p>
          </Card.Footer>
        </Card>
        <Card></Card>
        <Card>
          <Card.Img variant="top" src={smit} />
          <Card.Body>
            <Card.Title>
              Smit Savani
              <a href="https://drive.google.com/file/d/1rqo3EYHD0iwcEG73CNQD3frnEpWYbFwM/view?usp=sharing">
                . <i class="fas fa-file"></i>
              </a>
            </Card.Title>
            <Card.Text>
              Coming with the Skills of being an excellent leadership quality
              which can help a organization to grow.<br></br>{' '}
              <strong>Skills</strong>
              <br></br>Data Science, Data Analysis, Machine Learning
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <p className="text-muted">
              <a href="https://www.linkedin.com/in/smit-savani/">
                <i class="fab fa-linkedin"></i>
              </a>{' '}
              <a href="https://github.com/savanismit">
                <i class="fab fa-github"></i>
              </a>{' '}
              <a href="https://www.instagram.com/jaysolankiphotography/">
                <i class="fab fa-instagram"></i>
              </a>{' '}
              <a href="https://savanismit11@gmail.com">
                <i class="fas fa-envelope"> </i>
              </a>
            </p>
          </Card.Footer>
        </Card>
      </CardGroup>
    </section>
  );
};
Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthentocated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(Landing);
