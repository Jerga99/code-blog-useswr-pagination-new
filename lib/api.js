import client from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const blogFields = `
  title,
  subtitle,
  'slug': slug.current,
  date,
  'author': author->{name, 'avatar': avatar.asset->url},
  coverImage,
  'content': content[]{..., 'asset': asset->}`;

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// export const getAllBlogs = async ({ offset } = { offset: 0 }) => {
//   const query = `*[_type == "blog"] | order(date desc) {${blogFields}}[${offset}...${offset + 3}]`;
//   const response = await client.fetch(query);
//   return response;
// };

export const getAllBlogs = async ({ offset = 0, limit = 3, filter = '' } = {}) => {
  // Construct the base query
  let query = `*[_type == "blog"]`;

  // Add filtering logic here if needed
  if (filter) {
    query += `[author.name == "${filter}"]`;
  }

  // Order and paginate
  query += `| order(date desc) {${blogFields}}[${offset}...${offset + limit}]`;

  const response = await client.fetch(query);
  return response;
};

export const getBlogBySlug = async (slug) => {
  const query = `*[_type == "blog" && slug.current == $slug]{${blogFields}}`;
  const response = await client.fetch(query, { slug });
  return response?.[0];
};

export async function getPaginatedBlogs({offset = 0, date = 'desc'} = {offset: 0, date: 'desc'}) {
  const results = await client
    .fetch(`*[_type == "blog"] | order(date ${date}) {${blogFields}}[${offset}...${offset + 6}]`);
  return results;
}
