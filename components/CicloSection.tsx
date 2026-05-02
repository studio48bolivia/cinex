const steps=[
  {n:'01',verb:'Tomá',color:'#6B5CE7',meta:'Archivo',body:'Accedé a un repositorio creciente de cortos abandonados, descartes, ensayos y rushes liberados bajo licencias compartidas.',title:'Material de archivo abierto.'},
  {n:'02',verb:'Transformá',color:'#0F6E56',meta:'Laboratorio',body:'En el Laboratorio, proyectos en curso reúnen montajistas, sonidistas y guionistas para darle nueva forma al material.',title:'Remontaje colectivo.'},
  {n:'03',verb:'Compartí',color:'#D85A30',meta:'Infinite Reel',body:'Cada remix vuelve al ecosistema con créditos compartidos, listo para ser proyectado, citado o remontado otra vez.',title:'Nuevas obras devueltas.'},
]
export default function CicloSection() {
  return (
    <section style={{background:'#F4F1EB',color:'#1A1A1A'}}>
      <div style={{maxWidth:1440,margin:'0 auto',padding:'100px 40px'}}>
        <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',marginBottom:56,flexWrap:'wrap',gap:24}}>
          <div>
            <div className="label" style={{color:'rgba(26,26,26,0.55)',marginBottom:16,display:'flex',alignItems:'center',gap:12}}><span style={{width:24,height:1,background:'rgba(26,26,26,0.4)',display:'block'}}/>El ciclo</div>
            <h2 className="display" style={{fontSize:'clamp(32px,5vw,64px)',margin:0}}>Tomá <span style={{color:'rgba(26,26,26,0.3)'}}>·</span> Transformá <span style={{color:'rgba(26,26,26,0.3)'}}>·</span> Compartí</h2>
          </div>
          <div className="label hidden md:block" style={{color:'rgba(26,26,26,0.4)',textAlign:'right',lineHeight:1.6}}>tres movimientos<br/>un loop infinito</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {steps.map((s,i)=>(
            <div key={s.n} style={{padding:'0 32px',paddingLeft:i===0?0:32,borderLeft:i>0?'1px solid rgba(26,26,26,0.15)':'none'}}>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:24}}>
                <div className="label" style={{color:s.color,display:'flex',alignItems:'center',gap:8}}><span style={{width:8,height:8,background:s.color,display:'inline-block'}}/>{s.meta}</div>
                <span className="label" style={{color:'rgba(26,26,26,0.35)'}}>paso {parseInt(s.n)} / 3</span>
              </div>
              <div className="display" style={{fontSize:'clamp(72px,8vw,112px)',color:s.color,lineHeight:1}}>{s.n}</div>
              <h3 className="display" style={{fontSize:'clamp(24px,2.5vw,34px)',marginTop:16,color:'#1A1A1A'}}>{s.verb}</h3>
              <p style={{marginTop:16,fontSize:15.5,lineHeight:1.65,color:'rgba(26,26,26,0.7)',maxWidth:'34ch'}}>{s.body}</p>
              <div style={{marginTop:32,display:'flex',alignItems:'center',gap:12}}><div style={{height:1,flex:1,background:'rgba(26,26,26,0.2)'}}/><span className="label" style={{color:'rgba(26,26,26,0.55)'}}>{s.title}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
