export default function Ticker() {
  const items = ['archivo abierto','· 1.247 piezas catalogadas','· cinemateca boliviana','· asocine','· remixá lo inacabado','· dominio público + creative commons','· iberoamérica','· 14 países','· laboratorio en sesión','· nuevas obras cada mes']
  const all = [...items,...items,...items,...items]
  return (
    <div style={{borderBottom:'1px solid rgba(244,241,235,0.1)',background:'#0E0E0E',padding:'8px 0',overflow:'hidden'}}>
      <div className="ticker-track" style={{display:'flex',whiteSpace:'nowrap'}}>
        {all.map((t,i)=>(
          <span key={i} className="label" style={{color:'rgba(244,241,235,0.55)',padding:'0 20px',display:'inline-flex',alignItems:'center'}}>{t}</span>
        ))}
      </div>
    </div>
  )
}
