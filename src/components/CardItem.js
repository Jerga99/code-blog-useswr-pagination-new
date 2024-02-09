import { Card } from 'react-bootstrap';
import formatDate from '@/utils/formatDate';

import Link from 'next/link';
import { urlFor } from '@/lib/api';

const CardItem = ({ author, image, date, link, subtitle, title }) => {
  const { name } = author || {};

  return (
    <Card className={`fj-card`}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          <img
            src={author?.avatar}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar"
          />
          <div>
            <Card.Title className="font-weight-bold mb-1">{name}</Card.Title>
            <Card.Text className="card-date">{formatDate(date)}</Card.Text>
          </div>
        </Card.Header>
        <div className="view overlay">
          {image && <Card.Img src={urlFor(image).height(300).url()} alt="Card image cap" />}
        </div>
        <Card.Body>
          <Card.Title className="card-main-title">{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
        </Card.Body>
      </div>
      {link && (
        <Link {...link} className="card-button">
          Read More
        </Link>
      )}
    </Card>
  );
};

export default CardItem;
