import React, { useState, useEffect } from 'react';
import {
  TextField,
  withStyles,
  Typography,
  Button,
  Select,
  MenuItem,
  Input,
  ListItemText
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';

import initialValue from './editor/value';
import MyEditor from './editor';
import html from './editor/rules';

const styles = {
  root: {
    width: '600px',
    margin: '0 auto'
  },
  heading: {
    margin: '30px 0'
  },
  select: {
    margin: '30px 0',
    minWidth: '150px'
  }
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const names = ['Blog', 'Travel', 'Foreign Affairs', 'Marketing', 'programming'];

const PostForm = ({
  classes,
  addPost,
  history,
  updatePost,
  post,
  match: {
    params: { id }
  }
}) => {
  const [title, setTitle] = useState('');

  const [tagName, setTagName] = useState([]);

  const [error, setError] = useState(false);

  const [editor, setEditor] = useState(html.deserialize(initialValue));
  useEffect(() => {
    if (post) {
      setTitle(post.title);

      setTagName(post.tags);
      setEditor(html.deserialize(post.body));
    } else {
      setTitle('');
      setError(false);
      setTagName([]);
      setEditor(html.deserialize(initialValue));
    }
  }, [post]);

  const handleTagChange = e => {
    setTagName(e.target.value);
  };

  // const joinSelected = selected => {
  //   return selected.join(', ');
  // };

  const handleTitleChange = e => {
    setTitle(e.target.value);

    if (e.target.value === '') {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleEditorValueChange = ({ value }) => {
    if (value.document !== editor.document) {
      const editorValueString = html.serialize(value);

      localStorage.setItem('content', editorValueString);
    }
    setEditor(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(title);
    if (post) {
      const updatedPost = {
        id: post.id,
        title,
        body: localStorage.getItem('content'),
        tags: tagName
      };
      updatePost(updatedPost);
      localStorage.removeItem('content');
    } else {
      const post = {
        id: 321,
        title,
        body: localStorage.getItem('content'),
        tags: tagName
      };
      addPost(post);
      localStorage.removeItem('content');
    }
    console.log(tagName);
    history.push('/');
  };
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Typography variant='h5' component='h3' className={classes.heading}>
        Add Post
      </Typography>
      <TextField
        error={error}
        placeholder='Enter you blog title'
        fullWidth
        helperText='Title of the post goes Here'
        onChange={handleTitleChange}
        value={title}
      />
      <MyEditor onChange={handleEditorValueChange} value={editor} />
      <Select
        multiple
        displayEmpty
        onChange={handleTagChange}
        value={tagName}
        className={classes.select}
        input={<Input id='select-multiple-checkbox' />}
        renderValue={selected => {
          if (selected && selected.length === 0) {
            return <em>Select Tag</em>;
          } else {
            return selected.join(', ');
          }
        }}
        MenuProps={MenuProps}
      >
        {names.map(name => (
          <MenuItem key={name} value={name}>
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
      <br />
      <Button type='submit' variant='contained' color='primary'>
        Submit
      </Button>
    </form>
  );
};

export default withRouter(withStyles(styles)(PostForm));
