'use client';
import { useRef } from 'react';
import { Button, Grid, Container } from '@mui/material';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { ContactSection } from './components/ContactSection';
import { motion } from 'framer-motion';
import html2pdf from 'html2pdf.js';

export default function ContactPage() {
  const contentRef = useRef();

  const handleDownloadPDF = () => {
    const element = contentRef.current;
    html2pdf().set({
      margin: 0.5,
      filename: 'contacto.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    }).from(element).save();
  };

  return (
    <>
      {/* Botón para descargar PDF */}
      <Container sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button variant="contained" color="primary" onClick={handleDownloadPDF}>
          Download PDF
        </Button>
      </Container>

      {/* TODO el contenido dentro de la referencia */}
      <div ref={contentRef}>
        <Header />

        <Container 
          maxWidth="lg" 
          sx={{ py: 4, '& .MuiGrid-container': { alignItems: 'flex-start' } }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Sidebar />
              </motion.div>
            </Grid>
            <Grid item xs={12} md={8}>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <MainContent />
              </motion.div>
            </Grid>
          </Grid>
        </Container>

        <Container
          maxWidth="lg"
          sx={{ py: 4, mt: 2, px: 2, '& .MuiPaper-root': { boxShadow: 1, p: 3 } }}
        >
        
        </Container>
      </div>
      <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <ContactSection />
          </motion.div>
    </>
  );
}
