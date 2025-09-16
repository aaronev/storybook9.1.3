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
      {
      props.download &&
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      }

      <a 
        {...props}
        title={hint}
        aria-label={ariaLabel}
        aria-describedby={hintId}
      >
      {
      props.download &&
        <i class="fa fa-download" aria-hidden="true"></i>
      }

        {label}
      </a>
      <div id={hintId} class="visually-hidden">{hint}</div>
    </div>
  );
};
