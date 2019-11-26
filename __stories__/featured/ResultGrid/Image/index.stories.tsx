import React from 'react';
import { storiesOf  } from '@storybook/react';
import styled from 'styled-components';
import { Image } from 'pages/featured.tsx';

const result = [{
  name: "Gilbert",
  title: "Comedian",
  image: "https://d31wcbk3iidrjq.cloudfront.net/static/user/NuLZJ326L.jpeg",
  tags: ["Actors", "Legends", "Comedian"],
  price: "$150"
},
{
  name: "Abcccbc",
  title: "Musician",
  image: "https://d31wcbk3iidrjq.cloudfront.net/static/user/qVl2Vogqd.jpg",
  tags: ["Actors", "TV", "Comedian"],
  price: "$35"
},{
  name: "Gilbert",
  title: "Comedian",
  image: "https://d31wcbk3iidrjq.cloudfront.net/static/user/NuLZJ326L.jpeg",
  tags: ["Actors", "Legends", "Comedian"],
  price: "$150"
},
{
  name: "Abcccbc",
  title: "Musician",
  image: "https://d31wcbk3iidrjq.cloudfront.net/static/user/qVl2Vogqd.jpg",
  tags: ["Actors", "TV", "Comedian"],
  price: "$35"
}]

storiesOf('Pages|Featured/ResultsGrid/Image', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'Default Button',
    () => {
    	return (
    		<div>
    			<label> default image</label><br /><br />
          <GridImageWrapper>
            <GridImageContainer>
              <Price>{result[0].price}</Price>
              <ImageItem>
                <img src={result[0].image} alt="image" />
              </ImageItem>
              <ImageContent>
                <SmallTitle>{result[0].title}</SmallTitle>
                <Title>{result[0].name}</Title>
                <div style={{ display: "flex" }}>
                  {result[0].tags.length > 0 &&
                    result[0].tags.map((tag, i) => (
                      <SmallTitle key={i} bottom>
                        {tag}
                      </SmallTitle>
                    ))}
                </div>
              </ImageContent>
            </GridImageContainer>
          </GridImageWrapper>
    		</div>
    	)
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  ).add(
    'Button List',
    () => {
      return (
        <div style={{ display: "flex", flexWrap: "wrap", maxWidth: "1170px" }}>
          {
            result.map((r, i) => {
              return <GridImageWrapper key={i}>
                <GridImageContainer>
                  <Price>{r.price}</Price>
                  <ImageItem>
                    <img src={r.image} alt="image" />
                  </ImageItem>
                  <ImageContent>
                    <SmallTitle>{r.title}</SmallTitle>
                    <Title>{r.name}</Title>
                    <div style={{ display: "flex" }}>
                      {r.tags.length > 0 &&
                        r.tags.map((tag, i) => (
                          <SmallTitle key={i} bottom>
                            {tag}
                          </SmallTitle>
                        ))}
                    </div>
                  </ImageContent>
                </GridImageContainer>
              </GridImageWrapper>
            })
          }
        </div>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )

const Title = styled.h3.attrs({
  className: "mt-0 font-bold text-25 mr-10 block overflow-hidden whitespace-no-wrap mb-0 text-red-900"
})`
  text-overflow: ellipsis;
`;

const GridImageWrapper = styled.div.attrs({
  className: "min-lg:w-3/12 lxm:w-50p lxm:min-h-0 lxm:h-0 lxm:min-w-0 lg:w-1/3 xl:w-1/4 mb-20 min-h-170 max-h-350 min-h-170 pr-500 pl-500 min-h-145"
})`
`;

const GridImageContainer = styled.div.attrs({
  className: "relative py-0 px-500 overflow-hidden bg-white bg-cover rounded-5 h-350 lxm:h-auto shadow-primary"
})`
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: translateY(-3px);
  }
`;

const Price = styled.span.attrs({
  className: "absolute color-white font-semibold text-16 bg-f9 rounded-15 py-1 px-15 right-10 top-10 lmd:text-14"
})``;

const ImageItem = styled.div.attrs({
  className: "md:relative w-full bg-eee h-70-p m-md:px-5/10 m-md:py-6/10"
})`
  box-sizing: border-box;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    @media (max-width: 768px) {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  }
`;

const ImageContent = styled.div.attrs({
  className: "w-full h-3/10 px-12 py-10"
})`
  @media (max-width: 768px) {
    .flex {
      display: none
    }
  }
`;

const SmallTitle = styled.a.attrs({
  className: "whitespace-no-wrap cursor-pointer overflow-hidden block color-6c text-11"
})`
  text-overflow: ellipsis;

  &:after {
    font-size: 13px;
    content: "•";
    padding: 0 3px;
    display: ${props => (props.bottom ? "inline-block" : "none")};
  }

  &:hover {
    text-decoration: ${props => (props.bottom ? "underline" : null)};
  }
`;