import React from 'react'
import './TitleGlow.css';

export default function TitleGlow() {
  return (
    <div>
      <button class="button" data-text="Awesome">
    <span class="actual-text">&nbsp;Shams Al Noor Technology&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;Shams Al Noor Technology&nbsp;</span>
</button>
    </div>
  )
}
