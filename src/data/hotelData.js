import { BedDouble, Bath, Tv, Wifi, Droplets, Car, Sparkles, ConciergeBell, MapPin, Mountain, Waves, Trees, Coffee } from 'lucide-react'
import hero from '../assets/images/selva-san-gaban.png'
import room from '../assets/images/habitacion-naturaleza.png'
import mistyForest from '../assets/images/selva-neblina.png'
import riverForest from '../assets/images/selva-rio.png'

export const WHATSAPP_NUMBER = '' // Agrega el número con código de país, sin + ni espacios.
export const hotel = { name: 'Hotel Plaza San Gaban', location: 'San Gabán, Puno, Perú', phone: '', email: '', socials: { facebook: '', instagram: '', tiktok: '' }, hero, room }
export const heroSlides = [hero, mistyForest, riverForest]
export const rooms = [
  { name:'Habitación Simple', price:'S/ 120', description:'Un espacio sereno para descansar a tu ritmo.', image:room, images:[room,'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=85','https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1000&q=85'], features:['1 cama','Baño privado','TV','WiFi','Agua caliente'] },
  { name:'Habitación Matrimonial', price:'S/ 160', description:'Calidez y comodidad para compartir el viaje.', image:'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85', images:['https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85','https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=85','https://images.unsplash.com/photo-1594563703937-fdc640497dcd?auto=format&fit=crop&w=1000&q=85'], features:['Cama matrimonial','Baño privado','TV','WiFi','Agua caliente'] },
  { name:'Habitación Doble', price:'S/ 180', description:'La elección ideal para amigos o familia.', image:'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=85', images:['https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1000&q=85','https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=1000&q=85','https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1000&q=85'], features:['2 camas','Baño privado','TV','WiFi','Agua caliente'] }
]
export const services = [{name:'WiFi',icon:Wifi},{name:'Agua caliente',icon:Droplets},{name:'Televisión',icon:Tv},{name:'Recepción',icon:ConciergeBell},{name:'Limpieza',icon:Sparkles},{name:'Estacionamiento',icon:Car},{name:'Habitaciones privadas',icon:BedDouble},{name:'Atención personalizada',icon:Coffee}]
export const gallery = [hero,'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=900&q=85','https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=900&q=85',room,'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1100&q=85']
export const galleryAlt = ['Neblina entre montañas','Vegetación tropical','Río y bosque','Habitación acogedora','Paisaje de San Gabán']
export const highlights = [{label:'Naturaleza',icon:Trees},{label:'Tranquilidad',icon:Sparkles},{label:'Aventura',icon:Mountain},{label:'Descanso',icon:Waves}]
export { Bath, MapPin }
