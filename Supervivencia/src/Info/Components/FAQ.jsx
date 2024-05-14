import React from 'react';

import {Accordion,AccordionItem,AccordionItemHeading,
    AccordionItemButton,AccordionItemPanel,} from 'react-accessible-accordion';

import '../Info.css'

function FAQ(){
    
    return (
        <>
        <div id='FaqDiv'>
            <h1>Preguntas Frecuentes</h1>
                <Accordion allowZeroExpanded>
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                ¿Sobrevivir en ciudad?
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                Efectivamente, hemos ideado una sección de supervivencia
                                orientada a la ciudad dado un supuesto caso postapocalíptico
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
                            <p>
                                Por ahora solo contemplamos los biomas dispuestos: bosque,desierto
                                montaña,costa y ciudad. Sin embargo iremos actualizando progresivamente la 
                                página lo que puede significar la inclusión de algún bioma nuevo.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
        </div>
        </>
    );
}

export default FAQ;