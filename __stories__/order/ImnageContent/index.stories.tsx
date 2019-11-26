import React from 'react';
import styled from 'styled-components'
import { storiesOf  } from '@storybook/react';
import { ImageContent } from 'components/ImageContent/ImageContent.tsx';

const TalentLink = styled.a`
    color: #337ab7;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    letter-spacing: .1px;
    font-size: 18px;
`;

const imageContents = [
    {
        src: 'confirmation-email.svg',
        text: ["Check your email, We sent a confirmation to ", <b>liamdanielduffy@gmail.com</b>]
    },
    {
        src: 'confirmation-calendar.svg',
        text: [<TalentLink> Adam Pike </TalentLink>, " has ", <b>4 days</b>, " to complete your request"]
    },
    {
        src: 'confirmation-computer.svg',
        text: ["When your request is completed, we'll email you a link to review, share, or download your Cameo"]
    },
    {
        src: 'confirmation-credit-card.svg',
        text: ["if ", <TalentLink> Adam Pike </TalentLink>, " isn't able to complete your request, the ", <b>$5</b>, " hold on your card will be removed within 5~7 business days."]
    }
];


storiesOf('Pages|Order/ImageContent', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'ImageContent',
    () => {
    	return (
    		<div style={{ width: "385px" }}>
    			<RightContentRow>
              <ImageContainer>
                  <img src={imageContents[0].src} alt='image' />
              </ImageContainer>
              <RowTextContent>
                  {imageContents[0].text}
              </RowTextContent>
          </RightContentRow>
    		</div>
    	)
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )

  .add(
    'ImageContent List',
    () => {
      return (
        <div style={{ width: "385px" }}>
          { imageContents.map((image, i) => {
                return <RightContentRow key={i}>
                          <ImageContainer>
                              <img src={image.src} alt='image' />
                          </ImageContainer>
                          <RowTextContent>
                              {image.text}
                          </RowTextContent>
                      </RightContentRow>
              })}
        </div>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )

const ImageContainer = styled.div.attrs({
    className: 'relative py-100 px-0 h-50 left--15'
})`
    img {
        height: 30px;
        width: 30px;
        min-width: 30px;
        background: #f7f7f7;
}`

const RightContentRow = styled.div.attrs({
    className: "items-center flex ml-15 pb-30 text-4d min-h-54"
})`
`
const RightContentContainer = styled.div.attrs({
    className: 'py-0 px-10 m-lmd:py-5 lmd:px-15'
})`
    &:before {
        border-left: 1px solid #e5e5e5;
        bottom: 18%;
        content: "";
        display: inline-block;
        height: 60%;
        left: 44px;
        margin: 0 auto;
        position: absolute;
        top: 22%;
        width: 0;
        @media screen and (min-width: 992px){
            bottom: 16%;
            height: 67%;
            left: 69px;
            top: 17%;
        }
    }
`
const RightContentWrapper = styled.div.attrs({
    className: "px-15 relative min-lmd:ml-1/12"
})`
`

const RowTextContent = styled.div`

`;
