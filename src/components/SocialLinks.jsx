import { Camera, Music2 } from 'lucide-react'
import { hotel } from '../data/hotelData'

const links = [
  { name: 'Facebook', url: hotel.socials.facebook, icon: <span className="font-sans text-xl font-bold leading-none">f</span> },
  { name: 'Instagram', url: hotel.socials.instagram, icon: <Camera size={19}/> },
  { name: 'TikTok', url: hotel.socials.tiktok, icon: <Music2 size={19}/> },
]

export default function SocialLinks(){return <aside aria-label="Redes sociales" className="fixed left-0 top-1/2 z-30 -translate-y-1/2 overflow-hidden rounded-r-2xl bg-[#0d3025] shadow-xl shadow-black/25"><div className="flex flex-col">{links.map(({name,url,icon})=><a key={name} href={url||'#'} target={url?'_blank':undefined} rel={url?'noreferrer':undefined} aria-label={name} title={url?name:`Configura el enlace de ${name}`} className="grid h-12 w-12 place-items-center border-b border-white/15 text-white transition hover:bg-[#dec687] hover:text-[#17372c] last:border-b-0">{icon}</a>)}</div></aside>}
