import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import CustomButton from '../components/atoms/Button';

export default {
  title: 'Atoms/CustomButton',
  component: CustomButton,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof CustomButton>;

const Template: ComponentStory<typeof CustomButton> = args => (
  <CustomButton {...args} />
);

export const primaryButton = Template.bind({});
primaryButton.args = {
  text: 'Login',
  width: 100,
  height: 30,
  onPress: () => console.log('pressed on custom button'),
};
