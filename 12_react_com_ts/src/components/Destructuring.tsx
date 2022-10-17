import React from 'react'

type Props = {
    title: string;
    content: string;
    commentsQty: number;
    tags: string[];

    // 7 - Enum
    category : Category;
}

export enum Category { 
    HTML = 'HTML',
    CSS = 'CSS',
    JS = 'JavaScript',
    REACT = 'React',
    TS = 'Typescript'
}

const Destructuring = ({title, content, commentsQty, tags, category}: Props) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
            <p>Comments: {commentsQty}</p>
            {tags.map((tag) => (
                <span>#{tag} </span>
            ))}
            <h4>
                Category: {category}
            </h4>
        </div>
  )
}

export {Destructuring}