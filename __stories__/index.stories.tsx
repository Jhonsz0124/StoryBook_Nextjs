import React from 'react';
import { storiesOf  } from '@storybook/react';
import styled from 'styled-components';
import "services/browser/Tailwind.css";

import {
  SubmitBtn,
  InputWrapper,
  RowLable,
  FormRowContent,
  FormDesc,
  FormTitle,
  BodyRowContent,
  BodyWrapper,
  BodyContainer,
  BodyRow,
  Select
} from '../pages/enroll';

const options = [
    { key: "twitter", value: "Twitter" },
    { key: "instagram", value: "Instagram" },
    { key: "youtube", value: "Youtube" },
    { key: "facebook", value: "Facebook" },
    { key: "Twitch", value: "twitch" },
    { key: "musically", value: "TikTok" },
    { key: "other", value: "Other" },
]

storiesOf('Pages|enroll', module)
  // If you want to set the option for all stories in of this kind
  .addParameters({ options: { panelPosition: 'bottom' } })
  .add(
    'enroll page',
    () => {
      return (
        <BodyWrapper>
            <BodyContainer>
                <BodyRow>
                    <BodyRowContent>
                        <FormTitle>
                            Apply to join Cameo
                        </FormTitle>
                        <FormDesc>
                            If you have fans and want to join Cameo as talent, you can enroll here and we'll be in touch.
                        </FormDesc>
                        <FormInput text="Your name" placeholder="Michael Jordan" />
                        <FormInput text="Email" placeholder="you@example.com" />
                        <FormInput text="Phone number (never shared)" placeholder="555-555-5555" />
                        <FormRowContent>
                            <RowLable>Where can we find you?</RowLable>
                            <InputWrapper>
                                <Select type="Number" defaultValue="twitter" placeholder="twitter" >
                                    {
                                        options.map((option, index) => {
                                            return <option value={option.key} key={index}>{option.value}</option>
                                        })
                                    }
                                </Select>
                            </InputWrapper>
                        </FormRowContent>
                        <FormInput text="Your handle" placeholder="@jimmybuffet" />
                        <FormInput text="How many followers do you have?" placeholder="400k" />
                        <FormRowContent>
                            <SubmitBtn>
                                Submit
                            </SubmitBtn>
                        </FormRowContent>
                    </BodyRowContent>
                </BodyRow>
            </BodyContainer>
        </BodyWrapper>
      )
    },
    // If you want to set the options for a specific story
    { options: { panelPosition: 'right' } }
  )

interface IProps {
  text: string;
  placeholder: string;
}

const FormInput = ({ text, placeholder }: IProps) => {
  return (
    <FormRowContent>
      <RowLable>{text}</RowLable>
      <InputWrapper>
            <input type="text" placeholder={placeholder}/>
        </InputWrapper>
    </FormRowContent>
  )
}