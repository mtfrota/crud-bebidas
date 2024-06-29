import QRCode from 'qrcode.react';
import React from 'react';
import './Contatos.css';

const Contatos: React.FC = () => {
  // Função para gerar o QR Code com base no número de telefone do WhatsApp
  const generateQRCode = (phoneNumber: string): string => {
    // Número do WhatsApp com código do país
    const whatsappNumber = '+5585988382733';
    // Usando o URI correto para links do WhatsApp
    const whatsappURI = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}`;
    // Gerar QR Code
    return `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(whatsappURI)}&size=200x200`;
  };

  return (
    <div className="contatos">
      <div className="qr-code">
        <QRCode value={generateQRCode('+5585988382733')} size={200} />
      </div>
      <p>Escaneie o QR Code acima para entrar em contato conosco via WhatsApp.</p>
    </div>
  );
};

export default Contatos;
