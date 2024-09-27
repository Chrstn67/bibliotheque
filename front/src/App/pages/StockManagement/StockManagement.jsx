import React, { useEffect, useState } from "react";
import axios from "axios";

function StockManagement() {
  const [publications, setPublications] = useState([]);
  const [newPublication, setNewPublication] = useState({
    type: "",
    title: "",
    sigle: "",
    langue: "",
    stock: "",
  });
  const [editPublication, setEditPublication] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/publications")
      .then((response) => {
        setPublications(response.data);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des publications:",
          error
        );
      });
  }, []);

  const handleCreatePublication = () => {
    axios
      .post("http://localhost:5000/api/publications", newPublication)
      .then((response) => {
        setPublications([...publications, response.data]);
        setNewPublication({
          type: "",
          title: "",
          sigle: "",
          langue: "",
          stock: "",
        });
      })
      .catch((error) => {
        console.error("Erreur lors de la création de la publication:", error);
      });
  };

  const handleDeletePublication = (id) => {
    axios
      .delete(`http://localhost:5000/api/publications/${id}`)
      .then(() => {
        setPublications(
          publications.filter((publication) => publication._id !== id)
        );
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la suppression de la publication:",
          error
        );
      });
  };

  const handleUpdatePublication = () => {
    axios
      .put(
        `http://localhost:5000/api/publications/${editPublication._id}`,
        editPublication
      )
      .then((response) => {
        setPublications(
          publications.map((publication) =>
            publication._id === response.data._id ? response.data : publication
          )
        );
        setEditPublication(null);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la mise à jour de la publication:",
          error
        );
      });
  };

  return (
    <section>
      <h2>Gestion des Stocks</h2>
      <p>Accédez à l'état des stocks et gérez les commandes ici.</p>

      {/* Formulaire pour créer une nouvelle publication */}
      <div>
        <h3>Ajouter une nouvelle publication</h3>
        <input
          type="text"
          placeholder="Type"
          value={newPublication.type}
          onChange={(e) =>
            setNewPublication({ ...newPublication, type: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Titre"
          value={newPublication.title}
          onChange={(e) =>
            setNewPublication({ ...newPublication, title: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Sigle"
          value={newPublication.sigle}
          onChange={(e) =>
            setNewPublication({ ...newPublication, sigle: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Langue"
          value={newPublication.langue}
          onChange={(e) =>
            setNewPublication({ ...newPublication, langue: e.target.value })
          }
        />
        <input
          type="number"
          placeholder="Stock"
          value={newPublication.stock}
          onChange={(e) =>
            setNewPublication({ ...newPublication, stock: e.target.value })
          }
        />
        <button onClick={handleCreatePublication}>Ajouter</button>
      </div>

      <ul>
        {publications.map((publication) => (
          <li key={publication._id}>
            {editPublication && editPublication._id === publication._id ? (
              <div>
                <input
                  type="text"
                  value={editPublication.type}
                  onChange={(e) =>
                    setEditPublication({
                      ...editPublication,
                      type: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  value={editPublication.title}
                  onChange={(e) =>
                    setEditPublication({
                      ...editPublication,
                      title: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  value={editPublication.sigle}
                  onChange={(e) =>
                    setEditPublication({
                      ...editPublication,
                      sigle: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  value={editPublication.langue}
                  onChange={(e) =>
                    setEditPublication({
                      ...editPublication,
                      langue: e.target.value,
                    })
                  }
                />
                <input
                  type="number"
                  value={editPublication.stock}
                  onChange={(e) =>
                    setEditPublication({
                      ...editPublication,
                      stock: e.target.value,
                    })
                  }
                />
                <button onClick={handleUpdatePublication}>Mettre à jour</button>
                <button onClick={() => setEditPublication(null)}>
                  Annuler
                </button>
              </div>
            ) : (
              <div>
                {publication.type} - {publication.title} - {publication.sigle} -{" "}
                {publication.langue} - {publication.stock}
                <button onClick={() => setEditPublication(publication)}>
                  Modifier
                </button>
                <button
                  onClick={() => handleDeletePublication(publication._id)}
                >
                  Supprimer
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default StockManagement;
