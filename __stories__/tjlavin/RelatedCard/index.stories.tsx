import React from 'react';
import styled from 'styled-components'
import { storiesOf  } from '@storybook/react';
import { RelatedCard } from 'components/RelatedCard/RelatedCard.tsx';
import { ResultsGrid } from 'pages/tjlavin';

const card =
  {
      price: "$25",
      src: "tjlavin_bottom.png",
      smallTitle: "MTV - The Challenge",
      title: "Zach Nichols"
  };

const cards = [
{
    price: "$25",
    src: "tjlavin_bottom.png",
    smallTitle: "MTV - The Challenge",
    title: "Zach Nichols"
}, {
    price: "$50",
    src: "tjlavin_bottom.png",
    smallTitle: "Sports",
    title: "Zach Johne"
}];

storiesOf('Pages|Tjlavin/RelatedCard', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'RelatedCard',
    () => {
      return (
        <RelatedCard price={card.price} src={card.src} smallTitle={card.smallTitle} title={card.title} key={0} />
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } })
  .add(
    'RelatedCard List',
    () => {
      return (
        <ResultsGrid>
          {
            cards.map((card, i) => {
              return <RelatedCard price={card.price} src={card.src} smallTitle={card.smallTitle} title={card.title} key={i} />
            })
          }
        </ResultsGrid>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } })