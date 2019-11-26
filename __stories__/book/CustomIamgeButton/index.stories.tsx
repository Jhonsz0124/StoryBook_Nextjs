import React from 'react';
import styled from 'styled-components';
import { storiesOf  } from '@storybook/react';

storiesOf('Pages|Book/CustomImageButton', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'Custom Image',
    () => {
      return (
        <div>
          <label> custom image button</label><br />
          <DownloadButton>
              <DownloadContainer>
                  <DownloadImage src="download-to-storage-drive.svg" />
                  <DownloadText>Custom Image</DownloadText>
              </DownloadContainer>
          </DownloadButton>
        </div>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  );

const DownloadButton = styled.a.attrs({
  className: 'bg-background uppercase border-none leading-normal py-1 px-1 rounded font-normal text-center whitespace-no-wrap align-middle cursor-pointer text-blue-600 mr-3 mb-3 w-auto text-sm m-md:hidden m-lmd: inline-block'
})`
    box-shadow: 1px 1px 4px rgba(0,0,0,.4);
    transition: all .4s;
    touch-action: manipulation;
`;

const DownloadContainer = styled.div.attrs({className: 'flex items-center'})
`
`;

const DownloadImage = styled.img.attrs({ className: 'hover: text-black', width: 15, height: 15 })`
`;

const DownloadText = styled.span.attrs({ className: 'ml-2 hover:black'})`
`;