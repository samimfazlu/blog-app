import React from 'react';
import Html from 'slate-html-serializer';
const BLOCK_TAGS = {
  blockquote: 'block-quote',
  ul: 'bulleted-list',
  p: 'paragraph',
  pre: 'code',
  h1: 'heading-one',
  h2: 'heading-two',
  ol: 'numbered-list'
};

// Add a dictionary of mark tags.
const MARK_TAGS = {
  pre: 'code',
  em: 'italic',
  strong: 'bold',
  u: 'underline'
};

const rules = [
  {
    deserialize(el, next) {
      const type = BLOCK_TAGS[el.tagName.toLowerCase()];
      if (type) {
        return {
          object: 'block',
          type: type,
          data: {
            className: el.getAttribute('class')
          },
          nodes: next(el.childNodes)
        };
      }
    },
    serialize(obj, children) {
      if (obj.object === 'block') {
        switch (obj.type) {
          case 'paragraph':
            return <p className={obj.data.get('className')}>{children}</p>;

          case 'code':
            return (
              <pre>
                <code>{children}</code>
              </pre>
            );
          case 'block-quote':
            return (
              <blockquote className={obj.data.get('className')}>
                {children}
              </blockquote>
            );
          case 'bulleted-list':
            return (
              <ul className={obj.data.get('className')}>
                <li>{children}</li>
              </ul>
            );
          case 'heading-one':
            return <h1 className={obj.data.get('className')}>{children}</h1>;
          case 'heading-two':
            return <h2 className={obj.data.get('className')}>{children}</h2>;
          case 'numbered-list':
            return (
              <ol className={obj.data.get('className')}>
                <li>{children}</li>
              </ol>
            );
          default:
            return;
        }
      }
    }
  },
  {
    deserialize(el, next) {
      const type = MARK_TAGS[el.tagName.toLowerCase()];
      if (type) {
        return {
          object: 'mark',
          type: type,
          nodes: next(el.childNodes)
        };
      }
    },
    serialize(obj, children) {
      if (obj.object === 'mark') {
        switch (obj.type) {
          case 'bold':
            return <strong>{children}</strong>;
          case 'italic':
            return <em>{children}</em>;
          case 'underline':
            return <u>{children}</u>;
          default:
            return;
        }
      }
    }
  }
];

const html = new Html({ rules });
export default html;
