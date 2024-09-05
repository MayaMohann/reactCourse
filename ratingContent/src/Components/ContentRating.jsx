
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();

    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
      handleLike: () => {
        this.setState((prevState) => ({
          likes: prevState.likes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      },
      handleDislike: () => {
        this.setState((prevState) => ({
          dislikes: prevState.dislikes + 1,
          totalRatings: prevState.totalRatings + 1
        }));
      }

    };

  }
  render() {
    return (
     <>

     <div className='content-rating'>
      <h2>
      Life is a beautiful journey filled with moments that shape who we are. It’s the simple joys, like a smile from a loved one or the warmth of the sun on your face, that make life truly special. Each day is a new opportunity to grow, learn, and love. Embrace the challenges, for they make the triumphs sweeter. Cherish the people around you, for they add color to your world. Life is a precious gift, a tapestry woven with experiences, dreams, and endless possibilities. Live it fully, with gratitude and a heart open to all it has to offer.
      </h2>

      <div className='rating-buttons'>
        <button className="like-button" onClick={this.state.handleLike}>
            Like ({this.state.likes})
          </button>
          <button className="dislike-button" onClick={this.state.handleDislike}>
            Dislike ({this.state.dislikes})
          </button>
        </div>

        <h1>Total Ratings: {this.state.totalRatings}</h1>

     </div>
     </>
    );
  }
}

export default ContentRating;
