import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Row , Col} from 'react-bootstrap'


function Restcard({restaurant}) {
    return (
        <div>

            <Link to={`/restaurant-view/${restaurant.id}`} style={{textDecoration:"none"}}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img
                        height={'250px'}
                        width={'100%'}
                        variant="top" src={restaurant?.photograph} />
                    <Card.Body>
                        <Card.Title>{restaurant?.name}</Card.Title>
                        <Card.Text>
                            Neighbourhood : {restaurant?.neighborhood}
                        </Card.Text>
                       
                    </Card.Body>
                </Card>
            </Link>


        </div>
    )
}

export default Restcard