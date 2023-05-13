export default function ParticipantItem({nom, handleDelete}) {

    return (
      <div>
        <p>Je suis un participantItem : {nom}</p>
        <button onClick={()=>handleDelete(nom)}>Supprimer</button>
      </div>
    );
  }