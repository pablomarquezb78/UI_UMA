import react from 'react';

import upScroll from '../assets/Start/Logos/up_scroll.png'

import { Link } from "react-router-dom";
import {Accordion,AccordionItem,AccordionItemHeading,
    AccordionItemButton,AccordionItemPanel,} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import '../CSS/Grid.css';
import '../CSS/Start.css';
import cross from '../assets/Start/Logos/X.png'
// El contenido de los acordeones probablemente pueda ser compactado usando bucles y obteniendo la informacion
// De un JSON

//Si estoy en inicio y pulso inicio otra vez debe haber un reload
const showContact = () => {
    const contactInfo = document.getElementById('contactInfo');

    contactInfo.classList.remove('hide')
    contactInfo.classList.add('show')
};

const hideContact = () => {
    const contactInfo = document.getElementById('contactInfo');

    contactInfo.classList.add('hide')
    contactInfo.classList.remove('show')
};

function GridInfo({scrollToStart}) {

   return(
    <>
    <section id="sectionGrid" className="vw-100 vh-100">

        <button id="upButton" onClick={scrollToStart}>
            <img src={upScroll}></img>
        </button>

        <div className='gridInfoSection'>
        
            <div id="leftCard" className="gridCard">
                <h1>Preguntas Frecuentes</h1>
                <Accordion>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What harsh truths do you prefer to ignore?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Exercitation in fugiat est ut ad ea cupidatat ut in
                                cupidatat occaecat ut occaecat consequat est minim minim
                                esse tempor laborum consequat esse adipisicing eu
                                reprehenderit enim.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Is free will real or just an illusion?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                In ad velit in ex nostrud dolore cupidatat consectetur
                                ea in ut nostrud velit in irure cillum tempor laboris
                                sed adipisicing eu esse duis nulla non.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What harsh truths do you prefer to ignore?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Exercitation in fugiat est ut ad ea cupidatat ut in
                                cupidatat occaecat ut occaecat consequat est minim minim
                                esse tempor laborum consequat esse adipisicing eu
                                reprehenderit enim.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Is free will real or just an illusion?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                In ad velit in ex nostrud dolore cupidatat consectetur
                                ea in ut nostrud velit in irure cillum tempor laboris
                                sed adipisicing eu esse duis nulla non.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What harsh truths do you prefer to ignore?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Exercitation in fugiat est ut ad ea cupidatat ut in
                                cupidatat occaecat ut occaecat consequat est minim minim
                                esse tempor laborum consequat esse adipisicing eu
                                reprehenderit enim.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                Is free will real or just an illusion?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                In ad velit in ex nostrud dolore cupidatat consectetur
                                ea in ut nostrud velit in irure cillum tempor laboris
                                sed adipisicing eu esse duis nulla non.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                What harsh truths do you prefer to ignore?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Exercitation in fugiat est ut ad ea cupidatat ut in
                                cupidatat occaecat ut occaecat consequat est minim minim
                                esse tempor laborum consequat esse adipisicing eu
                                reprehenderit enim.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>

            <div id="rightCard" className="gridCard">
                <h1>Sobre Nosotros</h1>
                <p>
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </p>
            </div>

        </div>

        <button id='showContactButton' onClick={showContact} className='animatedSpanNavBar'>Informacion de Contacto</button>

        <div id='contactInfo'>
            <button onClick={hideContact} id='hideContactButton'>
                <img src={cross}></img>
            </button>
            <p>Correo: prueba@gmail.com</p>
            <p>Numero de contacto: 659123456</p>
            <p>Redes Sociales:</p>
            <p>Red1</p>
            <p>Red2</p>
        </div>

    </section>

    </>
    )
}

export default GridInfo;