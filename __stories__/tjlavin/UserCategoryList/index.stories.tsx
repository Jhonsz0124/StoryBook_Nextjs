import React from 'react';
import styled from 'styled-components'
import { storiesOf  } from '@storybook/react';


const categories = [
  "TV Hosts",
  "Reality TV",
  "Featured",
  "Extreme Sports",
  "MTV",
  "The Challenge",
  "BMX",
];

storiesOf('Pages|tjlavin/UserCategoryList', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'Item',
    () => {
      return (
        <>
          <UserCatItem>{categories[0]}</UserCatItem>
        </>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )
  .add(
    'List',
    () => {
      return (
        <>
          <UserCategoryList>
            {
              categories.map((m, i) => {
                return <UserCatItem key={i}>{m}</UserCatItem>
              })
            }
          </UserCategoryList>
        </>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )

const UserCategoryList = styled.div.attrs({className: 'flex flex-wrap mt-6'})`
`

const UserCatItem = styled.a.attrs({
  className:'mt-0 ml-0 mr-3 inline-block no-underline text-lg py-9 px-18 mb-7 rounded-30 bg-f7 text-4d hover:bg-ec'
})`
`