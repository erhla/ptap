import React from 'react';
import {
  Row,
  Col,
  Card
} from 'antd';

const re = /(\b[a-z](?!\s))/g;
const createTitle = (title) => title.replace('_', ' ').replace(re, (x) => x.toUpperCase());

// displays the target property information
const PropertyInfo = (props) => {
    const { targetProperty } = props;
    const { cols } = props;
    const gridStyle = {
      width: `${Math.round(100 / cols)}%`,
      textAlign: 'center',
    };
    const characteristics = Object.entries(targetProperty).filter(([title, description]) => (
      title !== '' && description !== '' && title !== 'PIN' && title !== 'Distance'
    ));
    characteristics.sort(([title1], [title2]) => {
      const t1 = title1.toLowerCase();
      const t2 = title2.toLowerCase();
      if (t1 > t2) { return 1; }
      if (t1 < t2) { return -1; }
      return 0;
    });
    return (
      <>
        <Row>
          <Col xs={{ span: 24, offset: 0 }} sm={{ span: 24, offset: 0 }}>
            <h1>Your Property Information</h1>
            <p>Below is the data that the City of Detroit has on file for your property.</p>
            <br />
          </Col>
        </Row>
        {characteristics.map(([title, description]) => (
          <Card.Grid hoverable={false} style={gridStyle}>
            <Row><b>{createTitle(title)}</b></Row>
            <Row><p>{description}</p></Row>
          </Card.Grid>
        ))}
      </>
    );
  };

export default PropertyInfo;
