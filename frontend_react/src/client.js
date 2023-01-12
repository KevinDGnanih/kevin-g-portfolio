import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'sqlwo3iz',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skvtIZVvfQrqqFPe7OwqGZMetVxCfo1U3NM6FpepqqwLDOj9caOfasFBfDvxZbOSa6P1IsDHVeGi99OIEkfYPHlp4wSYknQGOxH9aGiXC76jy0WzYdCKJ1eceoT4PSra6inFHhT5LWcMYjyB8GN1qy065q1DMfeEE6ALkk50LmzjbFpV8OHR'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);