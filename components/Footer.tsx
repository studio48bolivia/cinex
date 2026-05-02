'use client'
import Link from 'next/link'
const Logo=()=>(<Link href="/" style={{display:'flex',alignItems:'center',gap:8,textDecoration:'none'}}>
  <span style={{position:'relative',display:'inline-flex',alignItems:'center',justifyContent:'center',width:28,height:28}}>
    <span style={{position:'absolute',inset:0,border:'1px solid rgba(244,241,235,0.8)'}}/><span style={{position:'absolute',top:-3,left:3,width:4,height:4,background:'rgba(244,241,235,0.8)'}}/><span style={{position:'absolute',top:-3,right:3,width:4,height:4,background:'rgba(244,241,235,0.8)'}}/><span style={{position:'absolute',bottom:-3,left:3,width:4,height:4,background:'rgba(244,241,235,0.8)'}}/><span style={{position:'absolute',bottom:-3,right:3,width:4,height:4,background:'rgba(244,241,235,0.8)'}}/>
    <span className="label" style={{fontSize:10,fontWeight:700,color:'#F4F1EB'}}>CX</span>
  </span>
  <span style={{fontWeight:700,letterSpacing:'-0.02em',fontSize:17,color:'#F4F1EB'}}>CineXpress</span>
</Link>)
const allies=[{name:'Cinemateca Boliviana',sub:'archivo · La Paz',icon:'CB'},{name:'Asocine',sub:'asociación · ES',icon:'AS'},{name:'MediaX',sub:'distribución',icon:'MX'},{name:'Punto Cero',sub:'productora · BO',icon:'P0'},{name:'Foco Dulce',sub:'colectivo · MX',icon:'FD'}]
const navCols=[
  {title:'Explorar',links:[{l:'Archivo',h:'/archivo'},{l:'Laboratorio',h:'/laboratorio'},{l:'Infinite Reel',h:'/festival'},{l:'Comunidad',h:'/comunidad'}]},
  {title:'Participar',links:[{l:'Donar material',h:'/archivo#donar'},{l:'Proyectos abiertos',h:'/laboratorio'},{l:'Asambleas',h:'/comunidad'},{l:'Mentorías',h:'/comunidad'}]},
  {title:'Documentos',links:[{l:'Manifiesto',h:'/manifiesto'},{l:'Licencias',h:'/manifiesto'},{l:'Prensa',h:'/comunidad'},{l:'Contacto',h:'mailto:studio48bolivia@gmail.com'}]},
]
export default function Footer(){
  return(
    <footer style={{background:'#0E0E0E',color:'#F4F1EB'}}>
      <div style={{maxWidth:1440,margin:'0 auto',padding:'80px 40px 40px'}}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-12" style={{borderBottom:'1px solid rgba(244,241,235,0.1)'}}>
          <div className="lg:col-span-8">
            <div className="label" style={{color:'rgba(244,241,235,0.55)',marginBottom:20,display:'flex',alignItems:'center',gap:12}}><span style={{width:24,height:1,background:'rgba(244,241,235,0.3)',display:'block'}}/>Manifiesto · línea 01</div>
            <p className="display" style={{fontSize:'clamp(28px,5vw,68px)',lineHeight:0.95,maxWidth:'18ch',margin:0}}>Lo abandonado<br/><span style={{color:'rgba(244,241,235,0.4)'}}>no se tira:</span><br/>se monta de nuevo.</p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3">
            <Link href="/manifiesto" style={{display:'inline-flex',alignItems:'center',justifyContent:'space-between',gap:16,padding:'0 20px',height:48,background:'#F4F1EB',color:'#1A1A1A',fontWeight:500,fontSize:14,textDecoration:'none'}} onMouseEnter={e=>e.currentTarget.style.background='#fff'} onMouseLeave={e=>e.currentTarget.style.background='#F4F1EB'}><span>Leer el manifiesto</span><span>→</span></Link>
            <Link href="/auth" style={{display:'inline-flex',alignItems:'center',justifyContent:'space-between',gap:16,padding:'0 20px',height:48,border:'1px solid rgba(244,241,235,0.3)',color:'#F4F1EB',fontSize:14,textDecoration:'none'}} onMouseEnter={e=>{e.currentTarget.style.borderColor='#F4F1EB';e.currentTarget.style.background='rgba(244,241,235,0.05)'}} onMouseLeave={e=>{e.currentTarget.style.borderColor='rgba(244,241,235,0.3)';e.currentTarget.style.background='transparent'}}><span>Sumarse a la asamblea</span><span>+</span></Link>
          </div>
        </div>
        <div style={{padding:'48px 0',borderBottom:'1px solid rgba(244,241,235,0.1)'}}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:24}}>
            <div className="label" style={{color:'rgba(244,241,235,0.55)'}}>Aliados · una red de archivos vivos</div>
            <div className="label" style={{color:'rgba(244,241,235,0.4)'}}>2018 → presente</div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {allies.map(a=>(<div key={a.name} style={{display:'flex',alignItems:'center',gap:12,padding:'12px 16px',border:'1px solid rgba(244,241,235,0.12)',transition:'border-color 0.2s'}} onMouseEnter={e=>e.currentTarget.style.borderColor='rgba(244,241,235,0.35)'} onMouseLeave={e=>e.currentTarget.style.borderColor='rgba(244,241,235,0.12)'}>
              <div className="label" style={{width:36,height:36,border:'1px solid rgba(244,241,235,0.3)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>{a.icon}</div>
              <div><div style={{fontSize:13,fontWeight:500}}>{a.name}</div><div className="label" style={{color:'rgba(244,241,235,0.45)',marginTop:2}}>{a.sub}</div></div>
            </div>))}
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8" style={{padding:'48px 0',borderBottom:'1px solid rgba(244,241,235,0.1)'}}>
          {navCols.map(col=>(<div key={col.title}><div className="label" style={{color:'rgba(244,241,235,0.55)',marginBottom:16}}>{col.title}</div><ul style={{listStyle:'none',padding:0,margin:0,display:'flex',flexDirection:'column',gap:8}}>{col.links.map(lk=>(<li key={lk.l}><Link href={lk.h} style={{fontSize:14,color:'rgba(244,241,235,0.8)',textDecoration:'none'}} onMouseEnter={e=>e.currentTarget.style.color='#F4F1EB'} onMouseLeave={e=>e.currentTarget.style.color='rgba(244,241,235,0.8)'}>{lk.l}</Link></li>))}</ul></div>))}
          <div><div className="label" style={{color:'rgba(244,241,235,0.55)',marginBottom:16}}>Boletín</div><p style={{fontSize:14,color:'rgba(244,241,235,0.7)',lineHeight:1.65,margin:'0 0 12px'}}>Una bobina de noticias por mes.</p><Link href="/festival" style={{fontSize:14,color:'#F4F1EB',textDecoration:'none'}}>Suscribirme →</Link></div>
        </div>
        <div style={{paddingTop:32,display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:16}}>
          <div style={{display:'flex',alignItems:'center',gap:16}}><Logo/><span className="label" style={{color:'rgba(244,241,235,0.4)'}}>cinexpress · 2018 — 2026</span></div>
          <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',gap:'8px 24px'}} className="label">
            <Link href="/privacidad" style={{color:'rgba(244,241,235,0.55)',textDecoration:'none'}}>Política de privacidad</Link>
            <Link href="mailto:studio48bolivia@gmail.com" style={{color:'rgba(244,241,235,0.55)',textDecoration:'none'}}>Contacto</Link>
            <span style={{color:'rgba(244,241,235,0.4)'}}>© CineXpress · CC BY-SA 4.0</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
