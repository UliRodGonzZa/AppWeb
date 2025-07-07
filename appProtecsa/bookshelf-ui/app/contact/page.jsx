// app/test-contact/page.jsx (o pages/test-contact.js)
'use client'; // Solo necesario si usas hooks o componentes client-side

import { ContactSection } from "../components/ContactSection"; // Ajusta la ruta según tu estructura

export default function TestContactPage() {
  return (
    <div style={{ minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>
        Página de prueba para ContactSection
      </h1>
      <ContactSection /> {/* Componente aislado para pruebas */}
    </div>
  );
}