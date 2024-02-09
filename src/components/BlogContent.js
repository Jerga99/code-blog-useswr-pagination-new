import BlockContent from '@sanity/block-content-to-react';
import HighlightCode from './HighlightCode';
import { urlFor } from '@/lib/api';

const serializers = {
  types: {
    code: ({ node: { language, code, filename } }) => (
      <HighlightCode language={language}>
        {code}
        <div className="code-filename">{filename}</div>
      </HighlightCode>
    ),
    image: ({ node: { asset, alt, position = 'center' } }) => {
      let style = {};

      return (
        <div className={`blog-image blog-image-${position}`}>
          {asset && <img src={urlFor(asset).height(300).url()} alt={alt} />}

          <div className="image-alt">{alt}</div>
        </div>
      );
    },
  },
};

const BlogContent = ({ content }) => {
  return (
    <BlockContent
      imageOptions={{ w: 320, h: 240, fit: 'max' }}
      serializers={serializers}
      blocks={content}
    />
  );
};

export default BlogContent;
