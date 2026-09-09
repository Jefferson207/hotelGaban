import { Sparkles, Mountain, Waves, Trees } from 'lucide-react'
import hero from '../../portada3.png'
import heroAlternate from '../../portada_hotel.png'
import room from '../assets/images/habitacion-naturaleza.png'
import photoOne from '../assets/images/foto1.png'
import photoTwo from '../assets/images/foto2.png'
import photoThree from '../assets/images/foto3.png'

export const WHATSAPP_NUMBER = '51950066814'
export const hotel = { name: 'Hotel Plaza San Gaban', location: 'Carr. Interoceánica 102, Lanlacuni Bajo 21275', phone: '+51 950 066 814', email: '', socials: { facebook: '', instagram: '', tiktok: '' }, hero, room }
export const heroSlides = [hero, heroAlternate]
export const rooms = [
  { slug:'simple', name:'Habitación Simple', price:'S/ 120', description:'Un espacio sereno para descansar a tu ritmo.', image:room, images:[room,'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85','https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=85'], features:['1 cama','Baño privado','TV','WiFi','Agua caliente'] },
  { slug:'matrimonial', name:'Habitación Matrimonial', price:'S/ 160', description:'Calidez y comodidad para compartir el viaje.', image:'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85', images:['https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85','https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85','https://images.unsplash.com/photo-1594563703937-fdc640497dcd?auto=format&fit=crop&w=1000&q=85'], features:['Cama matrimonial','Baño privado','TV','WiFi','Agua caliente'] },
  { slug:'doble', name:'Habitación Doble', price:'S/ 180', description:'La elección ideal para amigos o familia.', image:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=85', images:['https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=85','https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1000&q=85','https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1000&q=85'], features:['2 camas','Baño privado','TV','WiFi','Agua caliente'] }
]
export const gallery = [hero, photoOne, photoTwo, photoThree]
export const galleryAlt = ['Paisaje de San Gabán', 'Hotel Plaza San Gaban', 'Hotel Plaza San Gaban', 'Hotel Plaza San Gaban']
export const highlights = [{label:'Naturaleza',icon:Trees},{label:'Tranquilidad',icon:Sparkles},{label:'Aventura',icon:Mountain},{label:'Descanso',icon:Waves}]
