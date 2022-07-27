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
            <img src='/Images/jcchs.png' height='150' className='edphoto'/>
            <img src='/Images/faith.jpg' height='150' className='edphoto'/>
            <p>
                I attended 2004 - 2008. I took a lot of agricultural classes including Forestry, Floral Design, and Welding. I was an officer for my 
                schools local FFA chapter (Reporter). I was also a percussionist in the high school concert and marching band.
            </p>
            <p>
                My senier year I decided to leave my high school early and finish my High School education at
                Faith Accedmy, an altenative school for aspiring teens. I graduated from there in 2008.
            </p>
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
          <img src='/Images/athens.png' height='150' className='edphoto'/>
          <p>
            Went to Athens Tech in the fall of 2008 and graduated a year later with a Cosmetoloy license.
            My core classes included a basic math class, computer class, psychology class, and an english class.
            I graduated in spring of 2009.
          </p>
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
          <img src='/Images/alchemy.png' height='150' className='edphoto'/>
          <p>
            Decided to change career paths and go back to school. Alchemy is a 6 month long course for computer coding.
            I started in April 2022 and graduate in October 2022.
          </p>
        </AccordionDetails>
      </Accordion>

    </div>
  );
}