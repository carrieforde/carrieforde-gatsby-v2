import * as React from 'react';
import { Link } from '@/components/link/link';
import * as s from './pagination.module.css';
import { PaginationLinkProps } from '@/components/pagination/types';
import { Text } from '@/components/text/text';
import { Box } from '@/components/box/box';

const Next: React.FC<PaginationLinkProps> = ({ text = 'Next', to }) => (
  <Link className={s.nextLink} href={to} variant="navigation">
    <Text as="span">{text}</Text>
    <Text as="span" className={s.arrow}>
      &rarr;
    </Text>
  </Link>
);

const Previous: React.FC<PaginationLinkProps> = ({ text = 'Previous', to }) => (
  <Link className={s.previousLink} href={to} variant="navigation">
    <Text as="span" className={s.arrow}>
      &larr;
    </Text>
    <Text as="span">{text}</Text>
  </Link>
);

type NumberLinkProps = Omit<PaginationLinkProps, 'text'> & {
  text: string;
};

const Number: React.FC<NumberLinkProps> = ({ to, text }) => (
  <Link
    activeClassName={s.linkActive}
    className={s.link}
    href={to}
    variant="navigation"
  >
    {text}
  </Link>
);

type PaginationProps = {
  basePath: string;
  currentPage: number;
  totalPages: number;
};

export const Pagination: React.FC<PaginationProps> = ({
  basePath,
  currentPage,
  totalPages,
}) => {
  // No need to paginate a single page.
  if (totalPages <= 1) {
    return null;
  }

  const showPrevious = currentPage > 1;
  const previousPath =
    currentPage <= 2 ? basePath : `${basePath}/${currentPage - 1}`;

  const showNext = currentPage < totalPages;
  const nextPath = `${basePath}/${currentPage + 1}`;

  return (
    <Box as="nav" className={s.pagination}>
      {showPrevious && <Previous text="Newer Posts" to={previousPath} />}

      <Box className={s.numbers}>
        {Array.from({ length: totalPages }).map((_, idx) => {
          const to = idx === 0 ? basePath : `${basePath}/${idx + 1}`;
          const text = (idx + 1).toString();

          return <Number key={to} text={text} to={to} />;
        })}
      </Box>

      {showNext && <Next text="Older Posts" to={nextPath} />}
    </Box>
  );
};
