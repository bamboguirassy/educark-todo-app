import React from 'react';
import { Link } from 'react-router-dom';

function Home() {

 return (
   <div>
     <h1>Bienvenue dans notre application React</h1>
     <p>Cette application est une introduction à React et React Router.</p>
     <h2>Qu'est-ce que vous allez apprendre ?</h2>
     <ul>
       <li>Les bases de React</li>
       <li>Comment gérer l'état avec les Hooks</li>
       <li>Comment interagir avec une API RESTful</li>
       <li>Comment gérer la navigation avec React Router</li>
     </ul>
     <h2>Prêt à commencer ?</h2>
     <Link to="/todos">Voir les Todos</Link>
   </div>
 );
}
export default Home;