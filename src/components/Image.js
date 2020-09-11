import React, { useState, useEffect } from 'react';
import  Heading  from './Heading';
import { UnsplashImage } from './UnsplashImage';
import { Loader } from './Loader';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// Style
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }
`;

const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

function Image(props) {
  const [photos, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = () => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(`${apiRoot}/collections/139386/photos?client_id=${accessKey}`)
  
      
      .then(res => {
        setImage([...photos, ...res.data]);
         })
  }


  return (
    <div>
      <Heading />
      <GlobalStyle />
      <InfiniteScroll
        dataLength={photos.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <WrapperImages>
          {photos.map(photo => (
            <UnsplashImage url={photo.urls.thumb} key={photo.id} />
          ))}
          

        </WrapperImages>
      </InfiniteScroll>
    </div>
  );
}

export default Image;

