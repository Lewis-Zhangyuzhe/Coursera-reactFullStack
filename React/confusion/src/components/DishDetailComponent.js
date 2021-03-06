import React from 'react';
import {Card, CardBody, CardTitle, CardText, CardImg} from 'reactstrap';



function RenderDish({dish}) {
  if (dish != null) {
    return(
      <Card className="col-12 col-md-5">
        <CardImg width='100%' object src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }
  else {
    return(
      <div></div>
    );
  }
}
  
function RenderComment({comments}) {
  if (comments == null) {
      return (<div></div>)
  }

  //list items
  const commentList = comments.map((cmnt)=> {
    return(
      <li key={cmnt.id}>
        <p>{cmnt.comment}</p>
        <p>-- {cmnt.author},
        &nbsp;
        {new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit'
            }).format(new Date(cmnt.date))}
        </p>
      </li>
    );
  });
  
  return(
      <div className="col-12 col-md-5">
          <h3>Comment</h3>
          <ul className="list-unstyled">{commentList}</ul>
      </div>
  );
}

const DishDetail = (props) => {
  const dish = props.dish;
  if (dish == null) {
    return (<div></div>)
  }

  const dishItem = <RenderDish dish={props.dish}/>
  const commentItem = <RenderComment comments={props.dish.comments}/>;
  return(
      <div className="container">
        <div className="row">
          {dishItem}
          {commentItem}
        </div>
      </div>
  );
}

export default DishDetail;