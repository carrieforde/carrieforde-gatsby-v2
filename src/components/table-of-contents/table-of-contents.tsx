import { Link } from '@/components/link/link';
import { List } from '@/components/list/list';
import * as s from '@/components/table-of-contents/table-of-contents.module.css';
import { TableOfContentsProps } from '@/components/table-of-contents/types';
import * as React from 'react';
import { Popover } from '../popover/popover';
import { Box } from '../box/box';

function getItemConfig(items: TableOfContentsProps["items"], currentLevel = 0): {level: number, url: string}[] {
  return items.reduce((acc, curr) => {
    if (curr.items && curr.items.length > 0) {
      
      return [...acc, {level: currentLevel, url: curr.url }, ...getItemConfig(curr.items, currentLevel + 1).flatMap((item) => item)]
    }

    return [...acc, {level: currentLevel, url: curr.url }]
  }, [{level: 0, url: ""}]);
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  items,
}) => {
  
  if (!items || items.length === 0) {
    return null;
  }

  const mappedItems = getItemConfig(items);

  return (
    <Box className={s.placeholderContainer}>
      <PlaceholderList items={mappedItems} />
    </Box>
  )

  // return (
  //   <Popover className={s.tableOfContents}>
  //     <TableOfContentsList items={items}  />
  //   </Popover>
  // );
};

type PlaceholderListProps = {
  items: {level: number, url: string}[];
}

const PlaceholderList: React.FC<PlaceholderListProps> = ({items}) => {

  return (
    <Box className={s.placeholderContainer}>
      {items.map(({level, url}) => {
        
        return (
          <Box as="span" className={s.placeholder} key={url} style={{width: `${16 - (4 * level)}px`}} />
       )
      })}
    </Box>
  );}

type TableOfContentsListProps = TableOfContentsProps;

const TableOfContentsList: React.FC<TableOfContentsListProps> = ({
  items
}) => {
  return (
    <List as="ol" className={s.tableOfContentsList}>
      {items.map((item) => (
        <List.Item key={item.url}>
          <Link href={item.url} className={s.link}>
            {item.title}
          </Link>
          {item.items && item.items.length > 0 ? (
            <TableOfContentsList items={item.items} />
          ) : null}
        </List.Item>
      ))}
    </List>
  );
};