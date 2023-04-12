import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://tmdb.sandbox.zoosh.ie/dev/graphql',
  documents: ['src/**/*.{tsx,ts,js,jsx}', '!src/gql/__generated__/*.ts'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      overwrite: true,
      presetConfig: {
        gqlTagName: 'gql',
        fragmentMasking: false,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
