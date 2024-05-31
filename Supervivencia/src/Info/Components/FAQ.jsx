import React from 'react';

import {Accordion,AccordionItem,AccordionItemHeading,
    AccordionItemButton,AccordionItemPanel,} from 'react-accessible-accordion';

import '../Info.css'

function FAQ(){
    
    return (
        <>
        <div id='FaqDiv' className='position-relative'>
            <h1 className='text-center my-4'>Preguntas Frecuentes</h1>
            <p id="FaqIntro" className='w-100 fontControlFaq'>
                Bienvenido a How2Survive, en esta página podrás encontrar información relacionada con la supervivencia, concretamente en cinco secciones cada una ambientada en un Bioma: Montaña, Bosque, Desierto,
                Costa y Jungla. En cada uno podrás encontrar información general de la supervivencia en ese bioma así como un minijuego al final para poner a prueba tus conocimientos. En caso de dudas en el
                minijuego... ¡No olvides pulsar el botón de SOS!
            </p>
                <Accordion allowZeroExpanded>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                ¿Que significa SOS?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className='fontControlFaq'>
                            Usamos el botón de SOS para obtener ayuda relacionada con los minijuegos, lo llamamos así para mantener la esencia del contexto de la supervivencia, SOS
                            es una señal de socorro internacional utilizada para indicar que alguien está en una situación de emergencia y necesita ayuda inmediata.
                            Adoptada oficialmente en 1906, la señal SOS es simple de recordar y transmitir en código Morse, representada como tres puntos, tres rayas y tres puntos.
                            La simplicidad y universalidad de SOS la han convertido en un estándar global para emergencias.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                ¿Es posible acceder a la información de más biomas?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className='fontControlFaq'>
                                Por ahora solo contemplamos los biomas ya dispuestos en las secciones. Sin embargo iremos actualizando progresivamente la 
                                página lo que puede significar la inclusión de algún bioma nuevo.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                ¿Pregunta 3?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className='fontControlFaq'>
                                Respuesta 3
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                ¿Pregunta 4?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className='fontControlFaq'>
                                Respuesta 4
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
        </div>
        </>
    );
}

export default FAQ;