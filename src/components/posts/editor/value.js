import { Value } from 'slate';

const initialValue =
  localStorage.getItem('content') ||
  Value.fromJSON({
    document: {
      nodes: [
        {
          object: 'block',
          type: 'paragraph',
          nodes: [
            {
              object: 'text',
              text: ''
            }
          ]
        }
      ]
    }
  });

export default initialValue;
