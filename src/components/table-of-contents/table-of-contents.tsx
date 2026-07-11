import { Link } from '@/components/link/link';
import { List } from '@/components/list/list';
import * as s from '@/components/table-of-contents/table-of-contents.module.css';
import { TableOfContentsItem, TableOfContentsProps } from '@/components/table-of-contents/types';
import * as React from 'react';
import { Popover } from '../popover/popover';
import { Box } from '../box/box';
import clsx from 'clsx';

const useHeadingIntersectionObserver = (headingId: string) => {
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  React.useEffect(() => {
    // Select the target element by its ID instead of a ref
    const target = document.getElementById(headingId);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      {
        scrollMargin: "60% 0px 0px 0px",
        threshold: 0.1 // Triggers when 50% of the element is visible
      } 
    );

    observer.observe(target);

    // Clean up observer on component unmount
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
}

function getItemConfig(items: TableOfContentsProps["items"], currentLevel = 0): {level: number, url: string}[] {
  return items.reduce((acc, curr) => {
    if (curr.items && curr.items.length > 0) {
      
      return [...acc, {level: currentLevel, url: curr.url }, ...getItemConfig(curr.items, currentLevel + 1).flatMap((item) => item)]
    }

    return [...acc, {level: currentLevel, url: curr.url }]
  }, [{level: 0, url: ""}]);
}

const useTableOfContentsItems = (items: TableOfContentsItem[]) => {
  const mappedItems = getItemConfig(items);

  return React.useMemo(() => (
    mappedItems.map((item) => {
      return {
        ...item,
        isActive: useHeadingIntersectionObserver(item.url.replace("#", ""))
      };
    })
  ), [mappedItems]);
};

export const TableOfContents: React.FC<TableOfContentsProps> = ({
  items,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  if (!items || items.length === 0) {
    return null;
  }

  const mappedItems = useTableOfContentsItems(items);

  const handleMouseEnter = React.useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = React.useCallback(() => setIsHovered(false), []);

  return (
    <Box className={s.placeholderContainer} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <PlaceholderList items={mappedItems} />

     {isHovered && <Popover className={s.tableOfContents} isOpen={true}>
        <TableOfContentsList items={items}  />
      </Popover>}
    </Box>
  )
};

type PlaceholderListProps = {
  items: {level: number, url: string, isActive: boolean}[];
}

const PlaceholderList: React.FC<PlaceholderListProps> = ({items}) => {
  return (
    <Box className={s.placeholderContainer}>
      {items.map(({level, url, isActive}) => {
        return (
          <PlaceholderItem level={level} url={url} isActive={isActive} />
        );
      })}
    </Box>
  );
};

type PlaceholderItemProps = {
  level: number;
  url: string;
  isActive: boolean;
}

const PlaceholderItem: React.FC<PlaceholderItemProps> = ({level, url, isActive}) => {
  const classes = clsx(s.placeholder, {
    [s.active]: isActive
  });

  return url !== "" ? <Box as="span" className={classes} key={url} style={{width: `${16 - (4 * level)}px`}} /> : null;
}

type TableOfContentsListProps = TableOfContentsProps;

const TableOfContentsList: React.FC<TableOfContentsListProps> = ({
  items
}) => {
  return (
    <List as="ol" className={s.tableOfContentsList}>
      {items.map((item) => {
        const isActive = useHeadingIntersectionObserver(item.url.replace("#", ""));
        const classes = clsx(s.link, {
          [s.linkActive]: isActive
        });
        
        return (
          <List.Item key={item.url}>
            <Link href={item.url} className={classes}>
              {item.title}
            </Link>
            {item.items && item.items.length > 0 ? (
              <TableOfContentsList items={item.items} />
            ) : null}
          </List.Item>
        )
      })}
    </List>
  );
};