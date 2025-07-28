import { themes } from '@storybook/theming'

export const parameters = {
  actions: {
    handles: ["click", "input"],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  }
}
