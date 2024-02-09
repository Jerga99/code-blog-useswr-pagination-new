import PageLayout from '@/components/PageLayout';
import { getBlogBySlug, getAllBlogs, urlFor } from '@/lib/api';
import { Row, Col } from 'react-bootstrap';

import BlogHeader from '@/components/BlogHeader';
import BlogContent from '@/components/BlogContent';

const BlogDetail = ({ blog }) => {
  const { title, subtitle, coverImage, content, date, author } = blog;

  return (
    <PageLayout className="blog-detail-page">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <BlogHeader
            title={title}
            subtitle={subtitle}
            coverImage={urlFor(coverImage).height(300).url()}
            author={author}
            date={date}
          />
          <hr />
          {content && <BlogContent content={content} />}
        </Col>
      </Row>
    </PageLayout>
  );
};

export const getStaticProps = async ({ params }) => {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: {
      blog,
    },
  };
};

export const getStaticPaths = async () => {
  const blogs = await getAllBlogs();
  const paths = blogs?.map((blog) => ({ params: { slug: blog.slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default BlogDetail;
