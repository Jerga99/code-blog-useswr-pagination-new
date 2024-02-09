import { createClient } from '@sanity/client';

const config = {
  projectId: 'your-id', // Find this at manage.sanity.io or in your sanity.json
  dataset: 'your-dataset', // this is from your Sanity project settings
  useCdn: process.env.NODE_ENV === 'production', // `false` if you want to ensure fresh data
  apiVersion: '2024-01-25', // Use the current date or the date you prefer
};

const client = createClient(config);

export default client;
