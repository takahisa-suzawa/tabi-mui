import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  gridList: {
    display: 'flex',
    flexWrap: 'wrap',
    overflowX: 'auto'
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
    minWidth: '300px'
  }
};

const tilesData = [
  {
    img: '/src/image/logo-mini.png',
    title: 'Breakfast',
    author: 'jill111'
  },
  {
    img: '/src/image/logo.png',
    title: 'Tasty burger',
    author: 'pashminu'
  },
  {
    img: '/src/image/no-image.jpg',
    title: 'Camera',
    author: 'Danson67'
  },
  {
    img: '/src/image/logo-mini.png',
    title: 'Morning',
    author: 'fancycrave1'
  },
  {
    img: '/src/image/logo-mini.png',
    title: 'Hats',
    author: 'Hans'
  },
  {
    img: '/src/image/logo-mini.png',
    title: 'Honey',
    author: 'fancycravel'
  },
  {
    img: '/src/image/logo-mini.png',
    title: 'Vegetables',
    author: 'jill111'
  },
  {
    img: '/src/image/logo-mini.png',
    title: 'Water plant',
    author: 'BkrmadtyaKarki'
  }
];

/**
 * This example demonstrates the horizontal scrollable single-line grid list of images.
 */
const GridListExampleSingleLine = () => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={3.2}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
          titleStyle={styles.titleStyle}
          titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleSingleLine;