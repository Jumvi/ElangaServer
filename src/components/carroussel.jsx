import React from 'react'
import { Swiper,SwiperSlide } from 'swiper/react';
import { Navigation,Pagination,FreeMode } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import chou from '../assets/culturechou.jpg';
import mais from '../assets/culturemais2.jpg';
import poivrau from '../assets/culturepoivreau.jpg';
import mais1 from '../assets/parcmais.jpg';
import tomate from '../assets/projettomate.jpg';
import jus from '../assets/usinejus.jpg';

export default function Carroussel() {

  return (
    <div className='relative'>
   <Swiper breakpoints={{340:{
    slidesPerView:3,
    spaceBetween:30
   },
   700:{
    slidesPerView:3,
    spaceBetween:30
   } }} 
   freeMode = {true}   
   navigation ={true} 
   pagination={{clickable:true}}
    scrollbar={{draggable:true}}
    modules={FreeMode,Pagination}>

    <SwiperSlide>
        <figure className='flex flex-col group relative shadow-lg runded cursor-pointer'>
            <img src={tomate} alt="parctomate" />
            <figcaption className='flex flex-col p-6'>
                <div className='grid grid-cols-2 border-black border-b  '>
                    <span className='font-semibold'>Parc de tomate à kikwit</span>
                    <span className='font-semibold'>Budget réalisation : 
                        <span>2500 $</span>
                    </span>
                </div>
                <p className='border-b border-black'>
                    Découvrez notre fier parc de culture de tomates niché à Sonabata, s'étendant sur 4 hectares de terre fertile. Avec une capacité de production impressionnante de 20 tonnes par an, notre projet promet de fournir des tomates savoureuses et de qualité supérieure. Grâce à des méthodes agricoles innovantes et durables, nous cultivons avec passion pour répondre à la demande croissante de produits frais et locaux. Soutenez notre initiative sur la plateforme de crowdfunding agricole et participez à la croissance d'une agriculture responsable et florissante
                </p>

                <div className='flex'>
                    <p className='font-semibold' >
                         totale réçue :
                        <span>2500 $</span>
                    </p>
                    <p className='font-semibold'>
                        temps de recolte :
                        <span> 3 mois </span>
                    </p>
                    <p className='font-semibold'>
                        Réalisation du projet : 
                        <span>Déjà 3 récoltes </span>
                    </p>
                </div>
            </figcaption>
        </figure>
    </SwiperSlide>
    <SwiperSlide>
    <figure className='flex flex-col group relative shadow-lg runded cursor-pointer'>
            <img src={jus} alt="parctomate" />
            <figcaption className='flex flex-col p-6'>
                <div className='grid grid-cols-2 border-black border-b '>
                    <span className='font-semibold'>Parc de tomate à kikwit</span>
                    <span className='font-semibold' >Budget réalisation :   <span>2500$</span>
                      
                    </span>
                </div>
                <p className='border-black border-b '>
                    Découvrez notre fier parc de culture de tomates niché à Sonabata, s'étendant sur 4 hectares de terre fertile. Avec une capacité de production impressionnante de 20 tonnes par an, notre projet promet de fournir des tomates savoureuses et de qualité supérieure. Grâce à des méthodes agricoles innovantes et durables, nous cultivons avec passion pour répondre à la demande croissante de produits frais et locaux. Soutenez notre initiative sur la plateforme de crowdfunding agricole et participez à la croissance d'une agriculture responsable et florissante
                </p>

                <div className='flex'>
                    <p className='font-semibold'>
                         totale réçue :
                        <span>2500$</span>
                    </p>
                    <p className='font-semibold'>
                        temps de recolte :
                        <span>3 mois </span>
                    </p>
                    <p className='font-semibold'>
                        Réalisation du projet : 
                        <span>Déjà 3 récoltes </span>
                    </p>
                </div>
            </figcaption>
        </figure>
    </SwiperSlide>
    <SwiperSlide>
    <figure className='flex flex-col group relative shadow-lg runded cursor-pointer'>
            <img src={mais1} alt="parctomate" />
            <figcaption className='flex flex-col p-6'>
                <div className='grid grid-cols-2 border-black border-b '>
                    <span className='font-semibold'>Parc de tomate à kikwit</span>
                    <span className='font-semibold'>Budget réalisation : 
                        <span>2500$</span>
                    </span>
                </div>
                <p className='border-black border-b '>
                    Découvrez notre fier parc de culture de tomates niché à Sonabata, s'étendant sur 4 hectares de terre fertile. Avec une capacité de production impressionnante de 20 tonnes par an, notre projet promet de fournir des tomates savoureuses et de qualité supérieure. Grâce à des méthodes agricoles innovantes et durables, nous cultivons avec passion pour répondre à la demande croissante de produits frais et locaux. Soutenez notre initiative sur la plateforme de crowdfunding agricole et participez à la croissance d'une agriculture responsable et florissante
                </p>

                <div className='flex'>
                    <p className='font-semibold'>
                         totale réçue :
                        <span>2500$</span>
                    </p>
                    <p className='font-semibold'>
                        temps de recolte :
                        <span> 3 mois </span>
                    </p>
                    <p className='font-semibold'>
                        Réalisation du projet : 
                        <span>Déjà 3 récoltes </span>
                    </p>
                </div>
            </figcaption>
        </figure>
    </SwiperSlide>
    <SwiperSlide>
    <figure className='flex flex-col group relative shadow-lg runded cursor-pointer border'>
            <img src={poivrau} alt="parctomate" />
            <figcaption className='flex flex-col p-6'>
                <div className='grid grid-cols-2 border-black border-b '>
                    <span className='font-semibold'>Parc de tomate à kikwit</span>
                    <span className='font-semibold'>Budget réalisation : 
                        <span>2500$</span>
                    </span>
                </div>
                <p className='border-black border-b '>
                    Découvrez notre fier parc de culture de tomates niché à Sonabata, s'étendant sur 4 hectares de terre fertile. Avec une capacité de production impressionnante de 20 tonnes par an, notre projet promet de fournir des tomates savoureuses et de qualité supérieure. Grâce à des méthodes agricoles innovantes et durables, nous cultivons avec passion pour répondre à la demande croissante de produits frais et locaux. Soutenez notre initiative sur la plateforme de crowdfunding agricole et participez à la croissance d'une agriculture responsable et florissante
                </p>

                <div className='flex'>
                    <p>
                         totale réçue :
                        <span>2500 $</span>
                    </p>
                    <p>
                        temps de recolte :
                        <span> 3 mois </span>
                    </p>
                    <p>
                        Réalisation du projet : 
                        <span>Déjà 3 récoltes </span>
                    </p>
                </div>
            </figcaption>
        </figure>
    </SwiperSlide>
    <SwiperSlide>
    <figure className='flex flex-col group relative shadow-lg runded cursor-pointer'>
            <img src={mais} alt="parctomate" />
            <figcaption className='flex flex-col p-6'>
                <div className='grid grid-cols-2 border-black border-b '>
                    <span className='font-semibold'>Parc de tomate à kikwit</span>
                    <span className='font-semibold'>Budget réalisation : 
                        <span>2500 $</span>
                    </span>
                </div>
                <p className='border-black border-b '>
                    Découvrez notre fier parc de culture de tomates niché à Sonabata, s'étendant sur 4 hectares de terre fertile. Avec une capacité de production impressionnante de 20 tonnes par an, notre projet promet de fournir des tomates savoureuses et de qualité supérieure. Grâce à des méthodes agricoles innovantes et durables, nous cultivons avec passion pour répondre à la demande croissante de produits frais et locaux. Soutenez notre initiative sur la plateforme de crowdfunding agricole et participez à la croissance d'une agriculture responsable et florissante
                </p>

                <div className='flex'>
                    <p className='font-semibold'>
                         totale réçue :
                        <span>2500$</span>
                    </p>
                    <p className='font-semibold'>
                        temps de recolte :
                        <span> 3 mois </span>
                    </p>
                    <p>
                        Réalisation du projet : 
                        <span>Déjà 3 récoltes </span>
                    </p>
                </div>
            </figcaption>
        </figure>
    </SwiperSlide>
    <SwiperSlide>
    <figure className='flex flex-col  shadow-lg runded cursor-pointer'>
            <img src={chou} alt="parctomate" />
            <figcaption className='flex flex-col p-6'>
                <div className='grid grid-cols-2 border-black border-b '>
                    <span className='font-semibold'>Parc de tomate à kikwit</span>
                    <span className='font-semibold'>Budget réalisation : 
                        <span>2500$</span>
                    </span>
                </div>
                <p className='border-black border-b '>
                    Découvrez notre fier parc de culture de tomates niché à Sonabata, s'étendant sur 4 hectares de terre fertile. Avec une capacité de production impressionnante de 20 tonnes par an, notre projet promet de fournir des tomates savoureuses et de qualité supérieure. Grâce à des méthodes agricoles innovantes et durables, nous cultivons avec passion pour répondre à la demande croissante de produits frais et locaux. Soutenez notre initiative sur la plateforme de crowdfunding agricole et participez à la croissance d'une agriculture responsable et florissante
                </p>

                <div className='flex'>
                    <p className='font-semibold'>
                         totale réçue :
                        <span>2500$</span>
                    </p>
                    <p className='font-semibold'>
                        temps de recolte :
                        <span> 3 mois </span>
                    </p>
                    <p className='font-semibold'>
                        Réalisation du projet : 
                        <span>Déjà 3 récoltes </span>
                    </p>
                </div>
            </figcaption>
        </figure>
    </SwiperSlide>
    <SwiperSlide>
    <figure className='flex flex-col group relative shadow-lg runded cursor-pointer'>
            <img src={tomate} alt="parctomate" />
            <figcaption className='flex flex-col p-6'>
                <div className='grid grid-cols-2 border-black border-b '>
                    <span className='font-semibold'>Parc de tomate </span>
                    <span className='font-semibold'>Budget réalisation : 
                        <span>2500$</span>
                    </span>
                </div>
                <p className='border-black border-b '>
                    Découvrez notre fier parc de culture de tomates niché à Sonabata, s'étendant sur 4 hectares de terre fertile. Avec une capacité de production impressionnante de 20 tonnes par an, notre projet promet de fournir des tomates savoureuses et de qualité supérieure. Grâce à des méthodes agricoles innovantes et durables, nous cultivons avec passion pour répondre à la demande croissante de produits frais et locaux. Soutenez notre initiative sur la plateforme de crowdfunding agricole et participez à la croissance d'une agriculture responsable et florissante
                </p>

                <div className='flex'>
                    <p className='font-semibold'>
                         totale réçue :
                        <span>2500$</span>
                    </p>
                    <p className='font-semibold'>
                        temps de recolte :
                        <span> 3 mois </span>
                    </p>
                    <p className='font-semibold'>
                        Réalisation du projet : 
                        <span>Déjà 3 récoltes</span>
                    </p>
                </div>
            </figcaption>
        </figure>
    </SwiperSlide>
    <SwiperSlide>
    <figure className='flex flex-col group relative shadow-lg runded cursor-pointer'>
            <img src={tomate} alt="parctomate" />
            <figcaption className='flex flex-col p-6'>
                <div className='grid grid-cols-2 border-black border-b '>
                    <span className='font-semibold'>Parc de tomate </span>
                    <span className='font-semibold'>Budget réalisation : 
                        <span>2500$</span>
                    </span>
                </div>
                <p className='border-black border-b '>
                    Découvrez notre fier parc de culture de tomates niché à Sonabata, s'étendant sur 4 hectares de terre fertile. Avec une capacité de production impressionnante de 20 tonnes par an, notre projet promet de fournir des tomates savoureuses et de qualité supérieure. Grâce à des méthodes agricoles innovantes et durables, nous cultivons avec passion pour répondre à la demande croissante de produits frais et locaux. Soutenez notre initiative sur la plateforme de crowdfunding agricole et participez à la croissance d'une agriculture responsable et florissante
                </p>

                <div className='flex'>
                    <p className='font-semibold'>
                         totale réçue :
                        <span>2500$</span>
                    </p>
                    <p className='font-semibold'>
                        temps de recolte :
                        <span> 3 mois </span>
                    </p>
                    <p className='font-semibold'>
                        Réalisation du projet : 
                        <span>Déjà 3 récoltes </span>
                    </p>
                </div>
            </figcaption>
        </figure>
    </SwiperSlide>
   </Swiper>
  
   </div>
  )
}
