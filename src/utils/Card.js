export default function Card({background, couleur, nom}) {

    return (
      <div style={{backgroundColor: background, color: couleur}}>
        <h1>Card</h1>
        <p>Je suis un card : {nom}</p>
      </div>
    );
  }