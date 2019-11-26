import React from 'react';
import { storiesOf  } from '@storybook/react';
import styled from 'styled-components';
import { ResultsGrid, Image } from 'pages/featured.tsx';
import { results } from 'utils/data';
import AppBar from "@material-ui/core/AppBar";

const options = [
  { value: "", text: "Recommended" },
  { value: "10", text: "Price High to Low" },
  { value: "20", text: "Price Low to High" },
  { value: "30", text: "Alphabet A-Z" },
  { value: "", text: "Response Time (fastest to slowest)" },
];

storiesOf('Pages|Featured/ResultsGrid', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'Results Grid',
    () => {
    	return (
    		<div style={{ maxWidth: "1170px", margin: "0 auto" }}>
    			<ResultsGrid>
            {results.map((item, i) => (
              <Image
                key={i}
                price={item.price}
                image={item.image}
                title={item.title}
                name={item.name}
                tags={item.tags}
              />
            ))}
          </ResultsGrid>
    		</div>
    	)
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )

export const GridImageWrapper = styled.div.attrs({
  className: "lg:w-1/3 xl:w-1/4 mb-5 px-500 mb-5 xl:w-3/12 lg:w-4/12  min-h-170 max-h-350 min-w-145 lxm:w-1/2 lxm:min-h-auto lxm:h-auto lxm:min-w-auto"
})``;

export const GridImageContainer = styled.div.attrs({
  className: 'relative bg-cover bg-white overflow-hidden h-full shadow-primary rounded-5 lxm:h-auto'
})`
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &:hover {
    transform: translateY(-3px);
  }
`;

export const Price = styled.span.attrs({
  className: "absolute color-white font-medium text-16 bg-f9 rounded-15 py-1 px-15 right-10 top-10 lmd:text-14"
})``;

export const ImageItem = styled.div.attrs({
  className: "w-full m-md:relative bg-eee h-70-p m-md:px-5/10 m-md:py-6/10"
})`
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

export const ImageContent = styled.div.attrs({
  className: 'w-full py-100 px-3 h-3/10'
})``;

export const SmallTitle = styled.a.attrs({
  className: 'block overflow-hidden whitespace-no-wrap cursor-pointer text-tiny-0 text-6c'
})`
  text-overflow: ellipsis;
  &:after {
    font-size: 0.8125rem;
    content: "•";
    padding: 0 3px;
    display: ${props => (props.bottom ? "inline-block" : "none")};
  }

  &:hover {
    text-decoration: ${props => (props.bottom ? "underline" : null)};
  }
`;

export const FlatAppBar = styled(AppBar).attrs({
  className: 'shadow-none'
})`
`;

export const LogoContainer = styled.div.attrs({
  className: 'flex flex-grow items-center justify-start'
})`
`;

export const Logo = styled.img.attrs({
    src: "/logo-cropped.png",
    className: 'm-0 max-h-50'
  })`
`;