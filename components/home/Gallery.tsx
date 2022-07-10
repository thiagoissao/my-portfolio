import { IconButton, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

interface GalleryProps {
  images: string[];
}

const useStyles = makeStyles(theme => ({
  button: {
    display: 'flex',
    position: 'absolute',
    width: theme.spacing(5),
    height: theme.spacing(5),
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
    '&.MuiIconButton-root': {
      color: 'white',
    },
  },

  root: {
    width: 400,
    height: 400,
    overflow: 'hidden',
    position: 'relative',
  },

  imagesContainerStyle: {
    display: 'flex',
    overflowX: 'visible',
    transitionProperty: 'transform',
    willChange: 'transform',
    height: '100%',
    borderRadius: theme.spacing(3),
  },

  image: {
    objectFit: 'contain',
    borderRadius: theme.spacing(3),
  },
}));

let wheelTimeout: NodeJS.Timeout;
let transitionTimeout: NodeJS.Timeout;
let lastTouch = 0;
const width = 400;

const Gallery = ({ images }: GalleryProps) => {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [movement, setMovement] = useState(0);
  const [transitionDuration, setTransitionDuration] = useState(0);

  const handleMovement = (delta: number) => {
    clearTimeout(transitionTimeout);
    setMovement(oldMovement => {
      const maxLength = images.length - 1;
      let nextMovement = oldMovement + delta;

      if (nextMovement < 0) {
        nextMovement = 0;
      }

      if (nextMovement > maxLength * width) {
        nextMovement = maxLength * width;
      }

      return nextMovement;
    });
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    clearTimeout(wheelTimeout);
    handleMovement(e.deltaX);
    wheelTimeout = setTimeout(() => handleMovementEnd(), 100);
  };

  const handleTouchEnd = () => {
    handleMovementEnd();
    lastTouch = 0;
  };

  const handleMovementEnd = () => {
    const endPosition = movement / width;
    const endPartial = endPosition % 1;
    const endingIndex = endPosition - endPartial;
    const deltaInteger = endingIndex - currentIndex;

    let nextIndex = endingIndex;

    if (deltaInteger >= 0) {
      if (endPartial >= 0.1) {
        nextIndex += 1;
      }
    } else if (deltaInteger < 0) {
      nextIndex = currentIndex - Math.abs(deltaInteger);
      if (endPartial > 0.9) {
        nextIndex += 1;
      }
    }

    transitionTo(nextIndex, Math.min(0.5, 1 - Math.abs(endPartial)));
  };

  const transitionTo = (index: number, duration: number) => {
    setCurrentIndex(index);
    setMovement(index * width);
    setTransitionDuration(duration);

    transitionTimeout = setTimeout(() => {
      setTransitionDuration(0);
    }, duration * 100);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    lastTouch = e.nativeEvent.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const delta = lastTouch - e.nativeEvent.touches[0].clientX;
    lastTouch = e.nativeEvent.touches[0].clientX;

    handleMovement(delta);
  };

  const maxLength = images.length - 1;
  const maxMovement = maxLength * (width || 0);
  const showBackButton = movement !== 0;
  const showForwardButton = movement !== maxMovement;
  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onWheel={handleWheel}
      className={classes.root}
    >
      {showBackButton && (
        <IconButton
          className={classes.button}
          style={{ left: 8 }}
          onClick={() => transitionTo(currentIndex - 1, 0.5)}
        >
          <ArrowBackIosRoundedIcon />
        </IconButton>
      )}
      {showForwardButton && (
        <IconButton
          className={classes.button}
          style={{ right: 8 }}
          onClick={() => transitionTo(currentIndex + 1, 0.5)}
        >
          <ArrowForwardIosRoundedIcon />
        </IconButton>
      )}
      <div
        className={classes.imagesContainerStyle}
        style={{
          transitionDuration: `${transitionDuration}s`,
          transform: `translateX(${movement * -1}px)`,
        }}
      >
        {images.map(image => {
          return (
            <img
              key={image}
              className={classes.image}
              alt={image}
              src={image}
              width="100%"
              height="100%"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
