import { Music2 } from 'lucide-react';
import { hotel, WHATSAPP_NUMBER } from './data/hotelData';

function Facebook() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 22v-9h3l.5-4H14V7c0-1 .3-2 2-2h2V1.5C17 1.2 16 1 15 1c-3 0-5 2-5 5v3H7v4h3v9Z" /></svg>;
}
function Instagram() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>;
}

export default function FloatingContact() {
  const socials = [
    { name: 'Facebook', url: hotel.socials.facebook, Icon: Facebook },
    { name: 'Instagram', url: hotel.socials.instagram, Icon: Instagram },
    { name: 'TikTok', url: hotel.socials.tiktok, Icon: Music2 },
  ];
  return <>
    <aside className="floating-socials" aria-label="Redes sociales del hotel">
      <span className="floating-socials-label">REDES</span>
      {socials.map(({ name, url, Icon }) => url ? (
        <a key={name} href={url} target="_blank" rel="noopener noreferrer" aria-label={name} title={name}><Icon size={20} aria-hidden="true" /></a>
      ) : (
        <span key={name} className="social-pending" aria-label={`${name}: próximamente`} title={`${name}: próximamente`}><Icon size={20} aria-hidden="true" /></span>
      ))}
    </aside>
    <a className="floating-whatsapp" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola, quisiera información sobre las habitaciones de Hotel Plaza San Gaban.')}`} target="_blank" rel="noopener noreferrer" aria-label="Consultar por WhatsApp" title="Escríbenos por WhatsApp">
      <svg width="31" height="31" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.46 0 .1 5.35.1 11.94c0 2.1.55 4.16 1.6 5.97L0 24l6.25-1.64a11.94 11.94 0 0 0 5.79 1.48h.01C18.63 23.84 24 18.49 24 11.9c0-3.19-1.24-6.18-3.48-8.42ZM12.05 21.82a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.71.97.99-3.62-.24-.37a9.9 9.9 0 0 1-1.52-5.27c0-5.47 4.45-9.92 9.92-9.92a9.86 9.86 0 0 1 7.02 2.91 9.86 9.86 0 0 1 2.9 7.02c0 5.47-4.45 9.87-9.95 9.87Zm5.44-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" /></svg>
    </a>
  </>;
}
