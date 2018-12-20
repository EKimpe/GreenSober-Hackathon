const quiz = {
  questions: [
    {
      question: "Quels usages fais-tu de ton téléphone ?",
      answers: [
        { label: "Je téléphone et envoie des messages uniquement", point: 2 },
        { label: "Je surfe sur internet & je joue à des jeux", point: 4 },
        {
          label: "Je regarde beaucoup de vidéos et je prends des photos",
          point: 6
        },
        {
          label:
            "J’utilise toutes les fonctionnalités et j’ai beaucoup d’applications",
          point: 8
        }
      ],
      id: 1
    },
    {
      question: "Utilises-tu ton téléphone pour regarder des vidéos ?",
      answers: [
        { label: "Non, rarement...", point: 2 },
        { label: "Quelques fois par semaine", point: 4 },
        {
          label: "Au moins une fois par semaine",
          point: 6
        },
        {
          label: "Je passe ma vie à regarder des vidéos !",
          point: 8
        }
      ],
      id: 2
    },
    {
      question: "Quel budget pour ton smartphone ?",
      answers: [
        { label: "0 à 400€", point: 2 },
        { label: "401 à 700€", point: 4 },
        {
          label: "701 à 900€",
          point: 6
        },
        {
          label: "Plus de 900€",
          point: 8
        }
      ],
      id: 3
    },
    {
      question:
        "Penses-tu avoir beaucoup de données à stocker sur ton téléphone ?",
      answers: [
        {
          label: "Non je ne fais que téléphoner et envoyer des messages (16Go)",
          point: 2
        },
        { label: "Oui, j’ai des photos à stocker (32go)", point: 4 },
        {
          label:
            "Je n’ai pas de musique, mais j’ai des photos et quelques vidéos et quelques applications (64Go)",
          point: 6
        },
        {
          label:
            "Oui, j’écoute beaucoup de musique, j’ai beaucoup d’applications et de vidéos (128go)",
          point: 8
        }
      ],
      id: 4
    },
    {
      question: "Et niveau appareil photo ?",
      answers: [
        {
          label: "Je l’utilise rarement",
          point: 2
        },
        {
          label:
            "Je photographie plusieurs fois par semaine mais la qualité m’importe peu",
          point: 4
        },
        {
          label: "Je prends en photo tout ce que je vois",
          point: 6
        },
        {
          label:
            "Je prends beaucoup de photos et la qualité est importante pour moi",
          point: 8
        }
      ],
      id: 5
    },
    {
      question: "Que penses-tu des téléphones reconditionnés ?",
      answers: [
        {
          label: "C’est quoi ce truc !?",
          point: 2
        },
        {
          label: "Je connais mais j’ai acheté le mien neuf",
          point: 4
        },
        {
          label: "J’en ai entendu parlé mais je n’ai pas confiance",
          point: 6
        },
        {
          label: "J’en ai déjà acheté de cette manière !",
          point: 8
        }
      ],
      id: 6
    },
    {
      question: "Pour toi la taille du téléphone est-elle importante ?",
      answers: [
        {
          label: "Il faut qu’il puisse tenir dans ma poche",
          point: 2
        },
        {
          label: "Peu importe tant qu’il tient dans ma main",
          point: 4
        },
        {
          label:
            "Oui j’aime avoir un grand écran pour regarder mes photos/vidéo",
          point: 6
        },
        {
          label:
            "Je préfère un téléphone de grande taille qui se rapproche du format tablette",
          point: 8
        }
      ],
      id: 7
    },
    {
      question:
        "Pour toi la consommation énergétique de ton téléphone est-elle importante ?",
      answers: [
        {
          label: "Non je ne fais pas attention, je m’en fiche",
          point: 2
        },
        {
          label: "Non je ne fais pas attention mais j’y penserai à l’avenir",
          point: 4
        },
        {
          label: "Oui j’essaye déjà d’y faire attention",
          point: 6
        },
        {
          label: "Oui complètement !",
          point: 8
        }
      ],
      id: 8
    },
    {
      question:
        "Aimerais-tu un téléphone responsable ou composé de matériaux recyclés ?",
      answers: [
        {
          label: "Non hors de question, je n’ai pas confiance",
          point: 2
        },
        {
          label:
            "Peu importe, tant qu’il répond à mes attentes (technologie, design…)",
          point: 4
        },
        {
          label: "Ce n’est pas indispensable pour moi, mais pourquoi pas",
          point: 6
        },
        {
          label: "Oui c’est important pour moi",
          point: 8
        }
      ],
      id: 9
    },
    {
      question: "La marque de ton téléphone est-elle importante pour toi ?",
      answers: [
        {
          label: "Oui, je ne jure que par la même marque depuis des années !",
          point: 2
        },
        {
          label: "Ce n’est pas mon critère principal mais ça peut compter",
          point: 4
        },
        {
          label: "Non, je prends le moins cher",
          point: 6
        },
        {
          label: "Oui mais j’ai déjà changé plusieurs fois sans soucis",
          point: 8
        }
      ],
      id: 10
    }
  ]
};

module.exports = { quiz };
