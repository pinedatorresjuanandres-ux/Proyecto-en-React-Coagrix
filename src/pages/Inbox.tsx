import { useState } from 'react';
import { AppFrame } from '../components/PageFrame';
import { MessageCard } from '../components/Cards';
import { SearchBar } from '../components/Utilities';
import { messages } from '../data';

export default function Inbox() {
  const [query, setQuery] = useState('');
  const visible = messages.filter((message) => message.name.toLowerCase().includes(query.toLowerCase()));
  return <AppFrame active="Mensajes"><main className="page-container"><div className="container"><div className="content-heading"><div><span className="eyebrow">Comunicación directa</span><h1>Mensajes</h1><p>Conversa con agricultores, empresas y comerciantes de tu red.</p></div><a className="btn-primary" href="/conversation">+ Nuevo mensaje</a></div><div className="message-layout"><aside className="message-list"><div className="message-list-header"><h3>Bandeja de entrada <span className="unread-badge">2</span></h3><SearchBar placeholder="Buscar conversación" value={query} onChange={setQuery} /></div>{visible.map((message) => <MessageCard message={message} key={message.id} />)}</aside><section className="conversation empty-conversation"><div className="empty-state"><span>💬</span><h2>Selecciona una conversación</h2><p>Elige un contacto para ver los mensajes y continuar la conversación.</p></div></section></div></div></main></AppFrame>;
}
