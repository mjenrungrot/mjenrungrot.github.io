// @flow

// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import Main from '../layouts/Main';
import data from '../data/publications';
import './Research.css';

const styles = (theme) => ({
  header: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  content: {
    paddingTop: theme.spacing(2),
  },
  card: {
    marginBottom: theme.spacing(2),
    display: 'flex',
  },
  cardContent: {
    flex: '1 0 auto',
  },
  cover: {
    width: '401px',
  },
  details: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
  },
  researchList: {
    paddingTop: theme.spacing(2),
  },
});

const processPublicationStatus = (venue, status) => {
  if (venue !== null) {
    return status + venue;
  } else {
    return status;
  }
};

const processPDF = (pdf) => {
  if (pdf !== null) {
    const pdfFile = require('../' + pdf);
    return (
      <Link to={pdfFile} target="_blank">
        <Typography>[PDF]</Typography>
      </Link>
    );
  } else {
    return null;
  }
};

const processCode = (code) => {
  if (code !== null) {
    if (/^https?:\/\//.test(code)) {
      return (
        <a href={code} target="_self">
          <Typography>[Code]</Typography>
        </a>
      );
    } else {
      return (
        <Link to={code} target="_self">
          <Typography>[Code]</Typography>
        </Link>
      );
    }
  } else {
    return null;
  }
};

const processLink = (link) => {
  if (link !== null) {
    if (/^https?:\/\//.test(link)) {
      return (
        <a href={link} target="_self">
          <Typography>
            [Read More]
          </Typography>
        </a>
      );
    } else {
      return (
        <Link to={link} target="_self">
          <Typography>
            [Read More]
          </Typography>
        </Link>
      );
    }
  } else {
    return null;
  }
};

const getItems = (props) =>
  data.map((item) => (
    <div key={item.title}>
      <Card className={props.classes.card}>
        <CardMedia
          className={props.classes.cover}
          image={item.image}
        />
        <div className={props.classes.details}>
          <CardContent className={props.classes.cardContent}>
            <div>
              <Typography
                variant="h6"
                style={{display: 'inline-block', width: '80%'}}
              >
                {item.title}
              </Typography>
              <Typography
                variant="h6"
                style={{
                  display: 'inline-block',
                  width: '20%',
                  textAlign: 'right',
                }}
              >
                {item.date}
              </Typography>
            </div>
            <Typography variant="subtitle1">
              {item.authors.join(', ')}
            </Typography>
            <Typography variant="subtitle2">
              {processPublicationStatus(item.venue, item.status)}
            </Typography>
            <Divider />
            <Typography variant="body2">
              {item.desc}
            </Typography><br />
            {processPDF(item.pdf)}
            {processCode(item.code)}
            {processLink(item.link)}
          </CardContent>
        </div>
      </Card>
    </div>
  ));

/**
 * Research View Component
 * @param {object} props creation params
 * @return {object} Research component
 */
function Research(props) {
  return (
    <Main selectedTab="/research">
      <main id="mainContent">
        <div className={props.classes.header}>
          <Typography variant="h4" gutterBottom>
            Research
          </Typography>
          <Typography variant="body1">
            Research interest: Audio-visual, Computer Vision, Deep Learning,
            AR/VR, Music Information Retrieval
          </Typography>
        </div>
        <div className={props.classes.content}>
          <Typography variant="h4" gutterBottom>
            List of publications
          </Typography>
          <Divider variant="middle" />
          <div className={props.classes.researchList}>
            {getItems(props)}
          </div>
        </div>
      </main>
    </Main>
  );
}

Research.propTypes = {
  classes: PropTypes.any.isRequired,
};

export default withStyles(styles)(Research);
