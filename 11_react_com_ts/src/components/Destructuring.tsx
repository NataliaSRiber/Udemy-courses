import * as React from 'react';

interface Props {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];
  // 8 - enum
  category: Category;
}


export enum Category {
  Be = "Belinha",
  Ka = "Kalifa",
  Tu = "Tufão",
  Xi = "Xitara",
  TS = "TS"
}

export default function Destructuring ({title, content, commentsQty, tags, category}: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários{commentsQty}</p>
      <div>
        {tags.map((tag) => (
          <span>#{tag}</span>
        ))}
      </div>
      <h4>Categoria: {category}</h4>
    </div>
  );
}
