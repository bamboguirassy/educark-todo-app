import { useState } from "react";
import ParticipantItem from "./ParticipantItem";

export default function ParticipantList() {
    const [participants, setParticipants] = useState([
        "Moussa",
        "Mamadou",
        "Fatou",
        "Aminata",
    ]);
    const [nom, setNom] = useState("Mamadou");

    function addParticipant() {
        setParticipants([nom, ...participants]);
        setNom("");
    }

    function changerNom() {
        // prendre un nom de maniere aléatoire
        // modifier le nom
        setNom(["Moussa", "Mamadou", "Fatou", "Aminata"][Math.floor(Math.random() * 4)]);
    }

    // supprimer un participant
    function removeParticipant(nomParticipant) {
        // prendre un nom de maniere aléatoire
        // modifier le nom
        setParticipants(participants.filter((participant) => participant !== nomParticipant));
    }


    return (
        <div>
            <h1>ParticipantList</h1>

            {participants.map((participant) => (
                <ParticipantItem handleDelete={removeParticipant} nom={participant} key={participant} />
            ))}

            <input onChange={($e)=>setNom($e.target.value)} type="text" name="nom" value={nom} />
            <br />
            <h1>{nom}</h1>
            <button onClick={addParticipant}>Ajouter un participant</button>
            <button onClick={changerNom}>Changer le nom</button>
        </div>
    );
}