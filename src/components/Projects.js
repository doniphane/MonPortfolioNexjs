import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './Projects.css';

const initialProjects = [
    { title: 'Calendrier Interactif', description: 'Projet Agenda Web - Calendrier Interactif', Language: '#HTML ', Language2: '#CSS', Language3: '#JS', Language4: '#PHP', githubLink: 'https://github.com/doniphane/Agenda', image: `${process.env.PUBLIC_URL}/11.png` },
    { title: 'Tropizzcartour', description: 'Site fictif de location de voiture', Language: '#PHP', Language2: '#MYSQL', Language3: '#JS', Language4: '#Tailwind css', githubLink: 'https://github.com/doniphane/Tropizcartours', image: `${process.env.PUBLIC_URL}/4.png` },
    { title: 'Cybergardien', description: 'Projet fictif pour une association', Language: '#HTML', Language2: '#CSS', Language3: '#JS', githubLink: 'https://github.com/doniphane/Cyber-Gardien-Projet-Assos-Fictif-', image: `${process.env.PUBLIC_URL}/5.png` },
    { title: 'Thermos', description: 'Projet de récupération de température via une API', Language: '#HTML', Language2: '#CSS', Language3: '#JS', githubLink: 'https://github.com/doniphane/Thermos', image: `${process.env.PUBLIC_URL}/6.png` }, 
    { title: 'RestCountry', description: 'Récupération du nombre de drapeaux via une API', Language: '#HTML ', Language2: '#CSS', Language3: '#JS', githubLink: 'https://github.com/doniphane/FLag', image: `${process.env.PUBLIC_URL}/7.png` },
   
];

const Projects = () => {
    return (
        <div className="projects">
            <h2>Mes Projets</h2>
            <div className="carteContainer">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    pagination={{ clickable: true }}
                    navigation={{
                        nextEl: '.custom-swiper-button-next',
                        prevEl: '.custom-swiper-button-prev',
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                    }}
                >
                    {initialProjects.map(project => (
                        <SwiperSlide key={project.title}>
                            <div className="project-card">
                                <h3>{project.title}</h3>
                                <img src={project.image} alt={`Aperçu du projet ${project.title}`} />
                                <p className="description">{project.description}</p>
                                <p className="language">{project.Language}</p>
                                <p className="language">{project.Language2}</p>
                                <p className="language">{project.Language3}</p>
                                <p className="language">{project.Language4}</p>
                                <Link to={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    <button className="btn-github">Voir sur GitHub</button>
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="custom-navigation">
                    <button className="custom-swiper-button-prev">Précédent</button>
                    <button className="custom-swiper-button-next">Suivant</button>
                </div>
            </div>
        </div>
    );
}

export default Projects;
