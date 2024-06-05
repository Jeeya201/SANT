import React from 'react';
import './InfoButtons.css';



export default function InfoButtons({first,second}) {
  return (  
<div>
<div class="infoCard">
  <div class="infoCard2">{first}<br/>
{second}
  </div>
</div>
</div>
  )
}
