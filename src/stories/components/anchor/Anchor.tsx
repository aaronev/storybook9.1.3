import React from 'react';

import './anchor.css';

export interface AnchorProps {
  /** anchor's href contents */
  href: string;
  /** anchor's visual label contents */
  label: string;
  /** anchor's visual descripton id to reference */
  hintId: string;
  /** anchor's visual description content*/
  hint: string;
  /** anchor's aria-label content*/
  ariaLabel: string;
};

/** Primary UI component for user interaction */
export const Anchor = ({
  label,
  hintId,
  hint,
  ariaLabel,
  ...props
}: AnchorProps) => {
  return (
    <div class="anchor--container">
      <a 
        {...props}
        title={hint}
        aria-label={ariaLabel}
        aria-describedby={hintId}
      >
        {label}
      </a>
      <div id={hintId} class="visually-hidden">{hint}</div>
    </div>
  );
};
