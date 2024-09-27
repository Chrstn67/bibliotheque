import React, { useEffect, useState } from "react";
import axios from "axios";
import Commandes from "../Commandes/Commandes";
import "./ReadersList.scss";

function ReadersList() {
  const [readers, setReaders] = useState([]);
  const [newReader, setNewReader] = useState({ name: "", groupNumber: "" });
  const [editReader, setEditReader] = useState(null);
  const [sortOrder, setSortOrder] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const [commandes, setCommandes] = useState([]);
  const [readerCommands, setReaderCommands] = useState([]);
  const [selectedReaderName, setSelectedReaderName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour contrôler l'ouverture de la modale

  // Récupération des lecteurs et des commandes
  useEffect(() => {
    const fetchReaders = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/readers");
        setReaders(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des lecteurs:", error);
      }
    };

    const fetchCommandes = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/commandes");
        setCommandes(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des commandes:", error);
      }
    };

    fetchReaders();
    fetchCommandes();
  }, []);

  const handleCreateReader = () => {
    axios
      .post("http://localhost:5000/api/readers", newReader)
      .then((response) => {
        setReaders([...readers, response.data]);
        setNewReader({ name: "", groupNumber: "" });
      })
      .catch((error) => {
        console.error("Erreur lors de la création du lecteur:", error);
      });
  };

  const handleDeleteReader = (id) => {
    axios
      .delete(`http://localhost:5000/api/readers/${id}`)
      .then(() => {
        setReaders(readers.filter((reader) => reader._id !== id));
      })
      .catch((error) => {
        console.error("Erreur lors de la suppression du lecteur:", error);
      });
  };

  const handleUpdateReader = () => {
    axios
      .put(`http://localhost:5000/api/readers/${editReader._id}`, editReader)
      .then((response) => {
        setReaders(
          readers.map((reader) =>
            reader._id === response.data._id ? response.data : reader
          )
        );
        setEditReader(null);
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour du lecteur:", error);
      });
  };

  const handleViewCommands = (readerId, readerName) => {
    // Vérification que readerId est bien défini
    if (!readerId) {
      console.error("readerId est indéfini");
      return; // Ne pas continuer si readerId est indéfini
    }

    // Filtrer les commandes pour un lecteur donné
    const commandsForReader = commandes.filter(
      (command) => command.reader && command.reader._id === readerId
    );
    setReaderCommands(commandsForReader);
    setSelectedReaderName(readerName);
    setIsModalOpen(true); // Ouvrir la modale après la sélection
  };

  const sortedReaders = [...readers].sort((a, b) => {
    if (sortOrder === "groupNumber") {
      return sortDirection === "asc"
        ? a.groupNumber.localeCompare(b.groupNumber)
        : b.groupNumber.localeCompare(a.groupNumber);
    } else {
      return sortDirection === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    }
  });

  return (
    <section>
      <h2>Gestion des Lecteurs</h2>

      <div>
        <h3>Ajouter un nouveau lecteur</h3>
        <input
          type="text"
          placeholder="Nom"
          value={newReader.name}
          onChange={(e) => setNewReader({ ...newReader, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Numéro de groupe"
          value={newReader.groupNumber}
          onChange={(e) =>
            setNewReader({ ...newReader, groupNumber: e.target.value })
          }
        />
        <button className="more" onClick={handleCreateReader}>
          Ajouter
        </button>
      </div>

      <div className="sorting-controls">
        <label>
          Trier par: <br />
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="name">Nom</option>
            <option value="groupNumber">Numéro de groupe</option>
          </select>
        </label>
        <label>
          Direction:
          <br />
          <select
            value={sortDirection}
            onChange={(e) => setSortDirection(e.target.value)}
          >
            <option value="asc">Ascendant</option>
            <option value="desc">Descendant</option>
          </select>
        </label>
      </div>

      <ul>
        {sortedReaders.map((reader) => (
          <li key={reader._id}>
            {editReader && editReader._id === reader._id ? (
              <div className="input-list">
                <input
                  type="text"
                  value={editReader.name}
                  onChange={(e) =>
                    setEditReader({ ...editReader, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  value={editReader.groupNumber}
                  onChange={(e) =>
                    setEditReader({
                      ...editReader,
                      groupNumber: e.target.value,
                    })
                  }
                />
                <div className="buttons">
                  <button onClick={handleUpdateReader}>Mettre à jour</button>
                  <button onClick={() => setEditReader(null)}>Annuler</button>
                </div>
              </div>
            ) : (
              <div>
                <span>
                  {reader.name} - {reader.groupNumber}
                </span>
                <div className="buttons">
                  <button onClick={() => setEditReader(reader)}>
                    Modifier
                  </button>
                  <button onClick={() => handleDeleteReader(reader._id)}>
                    Supprimer
                  </button>
                  <button
                    onClick={() => handleViewCommands(reader._id, reader.name)}
                  >
                    Voir les commandes
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Affichage des commandes dans une modale */}
      {isModalOpen && (
        <Commandes
          readerName={selectedReaderName}
          readerCommands={readerCommands}
          setIsModalOpen={setIsModalOpen}
          setCommandes={setCommandes}
        />
      )}
    </section>
  );
}

export default ReadersList;
