import React, { useState } from "react";
import axios from "axios";
import "./Commandes.scss";

function Commandes({
  readerName,
  readerId, // Remplace readerName par readerId
  readerCommands,
  setIsModalOpen,
  setCommandes,
}) {
  const [newCommande, setNewCommande] = useState({
    type: "",
    title: "",
    sigle: "",
    langue: "",
    quantity: 0,
    typeCommande: "", // "Annuelle" ou "Permanente"
  });

  const handleCreateCommande = () => {
    // Inclure le readerId (ID réel) pour lier la commande au bon lecteur
    const commandeToCreate = { ...newCommande, reader: readerId }; // Remplace readerId par l'ID réel du lecteur
    console.log("Commande à créer:", commandeToCreate);

    axios
      .post("http://localhost:5000/api/commandes", commandeToCreate)
      .then((response) => {
        setCommandes((prevCommandes) => [...prevCommandes, response.data]);
        setNewCommande({
          type: "",
          title: "",
          sigle: "",
          langue: "",
          quantity: 0,
          typeCommande: "",
        });
      })
      .catch((error) => {
        console.error("Erreur lors de la création de la commande:", error);
      });
  };

  const handleDeleteCommande = (commandeId) => {
    axios
      .delete(`http://localhost:5000/api/commandes/${commandeId}`)
      .then(() => {
        // Mettez à jour les commandes pour refléter la suppression
        setCommandes((prevCommandes) =>
          prevCommandes.filter((commande) => commande._id !== commandeId)
        );
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression de la commande:", error);
      });
  };

  return (
    <dialog open className="modal">
      <h3>Commandes de {readerName}</h3>

      {/* Champs de saisie pour une nouvelle commande */}
      <div>
        <input
          type="text"
          placeholder="Type"
          value={newCommande.type}
          onChange={(e) =>
            setNewCommande({ ...newCommande, type: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Titre"
          value={newCommande.title}
          onChange={(e) =>
            setNewCommande({ ...newCommande, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Sigle"
          value={newCommande.sigle}
          onChange={(e) =>
            setNewCommande({ ...newCommande, sigle: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Langue"
          value={newCommande.langue}
          onChange={(e) =>
            setNewCommande({ ...newCommande, langue: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Quantité"
          value={newCommande.quantity}
          onChange={(e) =>
            setNewCommande({ ...newCommande, quantity: e.target.value })
          }
        />
        <select
          value={newCommande.typeCommande}
          onChange={(e) =>
            setNewCommande({ ...newCommande, typeCommande: e.target.value })
          }
        >
          <option value="">Sélectionner le type de commande</option>
          <option value="Annuelle">Annuelle</option>
          <option value="Permanente">Permanente</option>
        </select>
        <button onClick={handleCreateCommande}>Ajouter Commande</button>
      </div>

      {readerCommands.length > 0 ? (
        <ul>
          {readerCommands.map((commande) => (
            <li key={commande._id}>
              <strong>Type de Commande:</strong> {commande.typeCommande}
              <ul>
                {commande.publications.map((pub) => (
                  <li key={pub.publicationId}>
                    {pub.title} ({pub.sigle}) - {pub.quantity}
                  </li>
                ))}
              </ul>
              <button onClick={() => handleDeleteCommande(commande._id)}>
                Supprimer la commande
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucune commande trouvée pour ce lecteur.</p>
      )}
      <button onClick={() => setIsModalOpen(false)}>Fermer</button>
    </dialog>
  );
}

export default Commandes;
