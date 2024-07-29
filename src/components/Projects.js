import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './Projects.css';

const initialProjects = [
    { title: 'Tropizzcartour', description: 'Site fictif location voiture', Language: '#PHP', Language2: '#MYSQL', githubLink: 'https://github.com/doniphane/Tropizcartours', image: `${process.env.PUBLIC_URL}/4.png` },
    { title: 'Cybergardien', description: 'Project fictif association ',  Language: '#HTML', Language2: '#CSS', githubLink: 'https://github.com/doniphane/Cyber-Gardien-Projet-Assos-Fictif-', image: `${process.env.PUBLIC_URL}/5.png` },
    { title: 'Thermos', description: 'Project récupération temperature via une api ',  Language: '#HTML', Language2: '#CSS', githubLink: 'https://github.com/doniphane/Thermos', image: `${process.env.PUBLIC_URL}/6.png` }, 
    { title: 'RestCountry', description: 'Récuperation du nombre de drapeaux API',  Language: '#HTML ', Language2: '#CSS', githubLink: 'https://github.com/doniphane/FLag', image: `${process.env.PUBLIC_URL}/7.png` },
    { title: 'Project 6', description: 'A venir ', githubLink: 'lien_github_project_6',  image: `${process.env.PUBLIC_URL}/11.jpg` }, 
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
                navigation
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
                            <img src={project.image} alt={`Image du projet ${project.title}`} />
                            <p className='description'>{project.description}</p>
                            <p className='language'>{project.Language}</p>
                            <p className='language'>{project.Language2}</p>
                            <Link to={project.githubLink} target="_blank">
                                <button className="btn-github">Voir sur GitHub</button>
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
    );
}

export default Projects;
