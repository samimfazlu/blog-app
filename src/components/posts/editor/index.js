import React, { Fragment } from 'react';
import { Editor } from 'slate-react';
import { withStyles, Button, Icon } from '@material-ui/core';
import isKeyHotkey from 'is-hotkey';

const styles = {
  editor: {
    boxSizing: 'border-box',
    width: '600px',
    margin: '30px 0',
    padding: '10px',

    border: '2px solid rgba(0, 0, 0, 0.42)',
    minHeight: '300px',
    '&:hover': {
      border: '2px solid rgba(0, 0, 0, 0.87)'
    },
    '&:active': {
      border: '2px solid rgba(48, 63, 159, 1)'
    }
  },
  toolbar: {
    display: 'flex'
  }
};

const defaultNode = 'paragraph';
const isBoldHotkey = isKeyHotkey('ctrl+b');
const isItalicHotkey = isKeyHotkey('mod+i');
const isUnderlinedHotkey = isKeyHotkey('mod+u');
const isCodeHotkey = isKeyHotkey('mod+`');

const Toolbar = props => {
  return (
    <div
      style={{
        position: 'relative',
        top: '35px'
      }}
    >
      {props.children}
    </div>
  );
};

const MyEditor = props => {
  let refEditor;
  const hasBlock = type => props.value.blocks.some(node => node.type === type);

  const hasMark = type => {
    return props.value.activeMarks.some(mark => mark.type === type);
  };

  const onKeyDown = (event, editor, next) => {
    let mark;

    if (isBoldHotkey(event)) {
      mark = 'bold';
    } else if (isItalicHotkey(event)) {
      mark = 'italic';
    } else if (isUnderlinedHotkey(event)) {
      mark = 'underlined';
    } else if (isCodeHotkey(event)) {
      mark = 'code';
    } else {
      return next();
    }

    event.preventDefault();
    editor.toggleMark(mark);
  };

  const ref = editor => {
    refEditor = editor;
    return refEditor;
  };

  const renderMarkButton = (type, icon) => {
    const isActive = hasMark(type);

    return (
      <Button
        className={isActive ? 'active' : ''}
        onClick={event => onClickMark(event, type)}
      >
        <Icon>{icon}</Icon>
      </Button>
    );
  };

  const onClickMark = (event, type) => {
    event.preventDefault();
    refEditor.toggleMark(type);
  };

  const onClickBlock = (event, type, isActive) => {
    event.preventDefault();

    refEditor.setBlocks(isActive ? defaultNode : type);
  };

  const renderBlockButton = (type, icon) => {
    const isActive = hasBlock(type);
    return (
      <Button
        className={isActive ? 'active' : ''}
        onMouseDown={event => onClickBlock(event, type, isActive)}
      >
        <Icon>{icon}</Icon>
      </Button>
    );
  };

  const { value: myValue, onChange, classes } = props;

  return (
    <Fragment>
      <Toolbar>
        {renderMarkButton('bold', 'format_bold')}
        {renderMarkButton('italic', 'format_italic')}
        {renderMarkButton('underline', 'format_underlined')}
        {renderMarkButton('code', 'code')}
        {renderBlockButton('heading-one', 'looks_one')}
        {renderBlockButton('heading-two', 'looks_two')}
        {renderBlockButton('block-quote', 'format_quote')}
        {renderBlockButton('numbered-list', 'format_list_numbered')}
        {renderBlockButton('bulleted-list', 'format_list_bulleted')}
      </Toolbar>
      <Editor
        className={classes.editor}
        value={myValue}
        onChange={onChange}
        spellCheck={false}
        onKeyDown={onKeyDown}
        renderBlock={renderBlock}
        renderMark={renderMark}
        ref={ref}
        placeholder='Write the blog...'
      />
    </Fragment>
  );
};

const renderBlock = (props, editor, next) => {
  const { attributes, children, node } = props;

  switch (node.type) {
    case 'code':
      return (
        <pre {...attributes}>
          <code>{children}</code>
        </pre>
      );
    case 'block-quote':
      return <blockquote {...attributes}>{children}</blockquote>;
    case 'bulleted-list':
      return (
        <ul {...attributes}>
          <li>{children}</li>
        </ul>
      );
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>;
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>;
    case 'numbered-list':
      return (
        <ol {...attributes}>
          <li>{children}</li>
        </ol>
      );
    default:
      return next();
  }
};

const renderMark = (props, editor, next) => {
  const { children, mark, attributes } = props;

  switch (mark.type) {
    case 'bold':
      return <strong {...attributes}>{children}</strong>;
    case 'code':
      return (
        <pre {...attributes}>
          <code>{children}</code>{' '}
        </pre>
      );
    case 'italic':
      return <em {...attributes}>{children}</em>;
    case 'underline':
      return <u {...attributes}>{children}</u>;
    default:
      return next();
  }
};

export default withStyles(styles)(MyEditor);
