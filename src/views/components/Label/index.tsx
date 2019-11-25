import React from 'react';

interface IfLabel {
  id: number;
  title: string;
  author: string;
}

const Label = ({ id, title, author }: IfLabel): JSX.Element => {
  return (
    <ul>
      <li>{id}</li>
      <li>{title}</li>
      <li>{author}</li>
    </ul>
  );
};

export default Label;
