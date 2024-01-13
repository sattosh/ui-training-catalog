import { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'common/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   label: { control: 'text', default: 'Test' },
  // },
} as Meta<ButtonProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<ButtonProps> = (buttonArgs) => {
  return (
    <div>
      {(['text', 'outlined', 'contained'] as const).map((variant, index) => (
        <div className="flex flex-row items-center mt-3" key={`${variant}-${index}`}>
          <div className="mr-3">
            <Button {...buttonArgs} size="lg" variant={variant}>
              {'Test'}
            </Button>
          </div>
          <div className="mr-3">
            <Button {...buttonArgs} size="md" variant={variant}>
              {'Test'}
            </Button>
          </div>
          <div className="mr-3">
            <Button {...buttonArgs} size="sm" variant={variant}>
              {'Test'}
            </Button>
          </div>
          <div className="mr-3">
            <Button {...buttonArgs} disabled={true} variant={variant}>
              {'Test'}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};
