import React from 'react';

import './checkbox.css';

export interface CheckboxProps {
  /** checkbox's hint container id */
  label: string;
  /** checkbox's aria-label content*/
  ariaLabel: string;
  /** Optional click handler */
  onClick?: () => void;
  /** checkbox's visual descripton id to reference */
  hintId: string;
  /** checbox's visual description content*/
  hint: string;
   /** checbox's visual hidden label content*/
  invisibleLabel: boolean;
}

/** Primary UI component for user interaction */
export const Checkbox = ({
  label,
  hintId,
  hint,
  invisibleLabel,
  ariaLabel,
  onClick,
  ...props
}: CheckboxProps) => {

  const liveRegionRef = React.useRef(null);

  return (
    <div class="checkbox--container">
      <span ref={liveRegionRef} class="visually-hidden" aria-live="polite"></span>
      <div>
        <label>
          <input
            class={'checkbox--select'}
            title={hint}
            type="checkbox"
            aria-label={ariaLabel}
            aria-describedby={hintId}
            onClick={onClick}
            {...props}
          />
          <span class="checkbox-visual-label" class={invisibleLabel ? "visually-hidden" :  false}>{label}</span>
        </label>
        <div class="hint--container">
            <span id={hintId}>{hint}</span>
          </div>
      </div>
    </div>
  );
};
