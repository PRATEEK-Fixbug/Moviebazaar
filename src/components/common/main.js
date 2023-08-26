import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  const cardContainerStyle = {
    backgroundImage: 'url("https://images.freecreatives.com/wp-content/uploads/2015/03/Huge-Backgrounds-17.jpg")', // Replace with your background image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={cardContainerStyle}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          img src="https://tse1.mm.bing.net/th?id=OIP.4bLBoKQnJMelU1pDOFMARwHaEK&pid=Api&P=0&h=220.jpg" 
          padding="20px"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          img src="https://tse1.mm.bing.net/th?id=OIP.4bLBoKQnJMelU1pDOFMARwHaEK&pid=Api&P=0&h=220.jpg" 
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          img src="https://tse1.mm.bing.net/th?id=OIP.4bLBoKQnJMelU1pDOFMARwHaEK&pid=Api&P=0&h=220.jpg" 
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
