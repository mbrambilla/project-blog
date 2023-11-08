import RSS from 'rss';
import { getBlogPostList } from '@/helpers/file-helpers';
import { BLOG_TITLE, BLOG_DESCRIPTION } from '@/constants';

export async function GET() {
  const postList = await getBlogPostList();
  let feed = new RSS({
    title: BLOG_TITLE,
    description: BLOG_DESCRIPTION
  });

  postList.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.abstract,
      date: post.publishedOn,
      url: `http://localhost/${post.slug}`
    });
  });

  console.log(feed);

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
