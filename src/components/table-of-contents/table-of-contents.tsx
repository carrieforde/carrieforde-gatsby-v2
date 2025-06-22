import { Link } from '@/components/link/link';
import { List } from '@/components/list/list';
import { TableOfContentsProps } from '@/components/table-of-contents/types';
import * as React from 'react';
import * as s from '@/components/table-of-contents/table-of-contents.module.css';

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  items,
  onClick,
}) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <List as="ol" className={s.tableOfContents}>
      {items.map((item) => (
        <List.Item key={item.url}>
          <Link href={item.url} className={s.link} onClick={onClick}>
            {item.title}
          </Link>
          {item.items && item.items.length > 0 ? (
            <TableOfContents items={item.items} />
          ) : null}
        </List.Item>
      ))}
    </List>
  );
};
