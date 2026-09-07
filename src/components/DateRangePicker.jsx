import { useState } from 'react'
import { CalendarDays, ChevronLeft, ChevronRight } from 'lucide-react'

const toIso = date => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
const format = value => value ? new Intl.DateTimeFormat('es-PE', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date(`${value}T12:00:00`)) : 'Selecciona una fecha'

export default function DateRangePicker({ start, end, onChange }) {
  const [open, setOpen] = useState(false)
  const [month, setMonth] = useState(new Date())
  const year = month.getFullYear()
  const monthIndex = month.getMonth()
  const firstDay = new Date(year, monthIndex, 1).getDay()
  const days = new Date(year, monthIndex + 1, 0).getDate()
  const today = toIso(new Date())
  const pick = value => {
    if (!start || end || value < start) {
      onChange(value, '')
      setOpen(true)
    } else {
      onChange(start, value)
      setOpen(false)
    }
  }

  return <div className="relative min-w-0"><button type="button" onClick={() => setOpen(!open)} className="flex w-full min-w-0 items-center justify-between gap-3 border-b border-[#d4c8b5] py-3 text-left text-sm text-[#173d33]"><span className="min-w-0 truncate">{start && end ? `${format(start)} — ${format(end)}` : start ? `${format(start)} — Selecciona salida` : 'Selecciona entrada y salida'}</span><CalendarDays size={18} className="shrink-0 text-[#78856e]"/></button>{open && <div className="absolute left-0 z-10 mt-2 w-full min-w-0 max-w-[20rem] rounded-xl border border-[#ded6c9] bg-[#fffdf9] p-4 shadow-xl"><div className="mb-4 flex items-center justify-between"><button type="button" onClick={() => setMonth(new Date(year, monthIndex - 1))} aria-label="Mes anterior"><ChevronLeft size={18}/></button><b className="text-sm capitalize">{month.toLocaleDateString('es-PE', { month: 'long', year: 'numeric' })}</b><button type="button" onClick={() => setMonth(new Date(year, monthIndex + 1))} aria-label="Mes siguiente"><ChevronRight size={18}/></button></div><div className="grid grid-cols-7 text-center text-[10px] font-bold text-[#829078]">{['D', 'L', 'M', 'M', 'J', 'V', 'S'].map((day, index) => <span key={`${day}-${index}`} className="pb-2">{day}</span>)}{Array.from({ length: firstDay }, (_, index) => <span key={`empty-${index}`}/>)}{Array.from({ length: days }, (_, index) => { const value = toIso(new Date(year, monthIndex, index + 1)); const selected = value === start || value === end; const inRange = start && end && value > start && value < end; return <button type="button" disabled={value < today} onClick={() => pick(value)} key={value} className={`mx-auto grid h-8 w-8 place-items-center rounded-full text-xs transition ${selected ? 'bg-[#173d33] text-white' : inRange ? 'bg-[#e5ecdc] text-[#173d33]' : 'hover:bg-[#eee9df]'} disabled:cursor-not-allowed disabled:text-[#c7c1b8]`}>{index + 1}</button> })}</div><p className="mt-4 border-t border-[#e4ddd2] pt-3 text-center text-[10px] text-[#68796e]">{start && !end ? 'Ahora selecciona la fecha de salida' : 'Selecciona primero la entrada y luego la salida'}</p></div>}</div>
}
