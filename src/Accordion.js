import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion() {
  return (
    <div className='accordion'>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='acc-head'>High School</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <img src='/Images/jcchs.png' height='150'/>
            <p>HIGH SCHOOL</p>

          </div>
        </AccordionDetails>
      </Accordion>



      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='acc-head'>College</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img src='/Images/athens.png' height='150'/>
          <p>COLLEGE</p>
        </AccordionDetails>
      </Accordion>



      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='acc-head'>Alchemy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <img src='/Images/alchemy.png' height='150'/>
          <p>CODING SCHOOL</p>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}