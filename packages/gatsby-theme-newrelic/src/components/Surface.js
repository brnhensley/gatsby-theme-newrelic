import PropTypes from 'prop-types';
import { css } from '@emotion/react';
import { React } from 'react';

const BASES = {
  PRIMARY: 'PRIMARY',
  SECONDARY: 'SECONDARY',
};

const styles = {
  base: {
    [BASES.PRIMARY]: css`
      border: 1px solid var(--border-color);
      background: var(--primary-background-color);
    `,

    [BASES.SECONDARY]: css`
      background: var(--primary-background-color);
      .dark-mode & {
        background: var(--primary-hover-color);
      }
    `,
  },
  interactive: {
    [BASES.PRIMARY]: css`
      &:hover {
        border-color: var(--border-color);
      }
    `,
  },
};

const Surface = ({ base, interactive, children, injected_css }) => (
  <div
    css={css`
      border-radius: 0.25rem;
      box-shadow: var(--shadow-3);
      text-decoration: none;

      ${styles.base[base]};

      ${interactive &&
      css`
        cursor: pointer;
        transition: transform 0.15s ease-out, border-color 0.15s ease-out,
          box-shadow 0.15s ease-out;

        &:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-4);
        }

        ${styles.interactive[base]};
      `}

      ${injected_css};
    `}
  >
    {children}
  </div>
);

Surface.propTypes = {
  base: PropTypes.oneOf(Object.values(BASES)).isRequired,
  interactive: PropTypes.bool,
  children: PropTypes.node, // This surface is interactive! It moves!
  injected_css: PropTypes.string,
};

Surface.defaultProps = {
  interactive: false,
};

Surface.BASE = BASES;

export default Surface;
