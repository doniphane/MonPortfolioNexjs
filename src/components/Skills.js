import React from 'react';
import './Skills.css'; // Fichier de styles CSS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import du composant FontAwesomeIcon
import { faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faWordpress, faLinux, faWindows } from '@fortawesome/free-brands-svg-icons'; // Icônes de marques
import { faDatabase, faLeaf } from '@fortawesome/free-solid-svg-icons'; // Icônes solid

// Tableau des compétences avec leurs icônes et catégories
const skills = [
  { name: 'HTML', icon: faHtml5, category: 'Front-end' },
  { name: 'CSS', icon: faCss3Alt, category: 'Front-end' },
  { name: 'JavaScript', icon: faJs, category: 'Front-end' },
  { name: 'React.js', icon: faReact, category: 'Front-end' },
  { name: 'Node.js', icon: faNodeJs, category: 'Back-end' },
  { name: 'MySQL', icon: faDatabase, category: 'Back-end' },
  { name: 'MongoDB', icon: faLeaf, category: 'Back-end' },
  { name: 'WordPress', icon: faWordpress, category: 'CMS' },
  { name: 'Linux', icon: faLinux, category: 'Divers' },
  { name: 'Windows', icon: faWindows, category: 'Divers' }
];

const Skills = () => {
  // Fonction pour regrouper les compétences par catégorie
  const groupByCategory = () => {
    return skills.reduce((acc, skill) => {
      acc[skill.category] = acc[skill.category] || [];
      acc[skill.category].push(skill);
      return acc;
    }, {});
  };

  // Récupérer les compétences groupées par catégorie
  const skillsByCategory = groupByCategory();

  return (
    <div className="skills">
      <h2>Compétences</h2>
      <div className="skills-container">
        {Object.keys(skillsByCategory).map(category => (
          <div key={category} className="category">
            <h3>{category}</h3>
            <div className="cards">
              {skillsByCategory[category].map((skill, index) => (
                <div key={index} className="card">
                  <div className="card-icon">
                    <FontAwesomeIcon icon={skill.icon} size="3x" />
                  </div>
                  <div className="card-content">
                    <h4>{skill.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
