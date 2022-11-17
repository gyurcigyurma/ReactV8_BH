/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Component } from 'react';

class Carousel extends Component {
  state = {
    active: 0,
    name: 'luna',
  };

  static defaultProps = {
    images: ['https://pets-images.dev-apis.com/pets/none.jpg'],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal zeri"></img>
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <img
              onClick={this.handleIndexClick}
              data-index={index}
              key={photo}
              src={photo}
              className={index === active ? 'active' : ''}
              alt="animal thumb"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
