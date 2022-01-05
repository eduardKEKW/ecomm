import { faFacebookSquare, faTwitterSquare, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "components/helpers/LinkCustom";
import { SFooter, SItem, SNavigation, SSocial } from "components/styled/Footer";
import { FOOTER_LINKS } from "helpers/local";
import React from "react";

const Footer = () => {

    return (
        <SFooter>
            <SNavigation>
                {
                    FOOTER_LINKS.map(row => {
                        return (
                            <SItem key={row[0].name}>
                                {
                                    row.map(({ name, href }, index) => 
                                        <li key={index}> 
                                            <Link href={href}> 
                                                <>{name}</> 
                                            </Link>
                                        </li>
                                    )           
                                }
                            </SItem>
                        )
                    })
                }
            </SNavigation>
            
            <SSocial>
                <i><FontAwesomeIcon icon={faFacebookSquare}/></i>
                <i><FontAwesomeIcon icon={faTwitterSquare}/></i>
                <i><FontAwesomeIcon icon={faYoutube}/></i>
            </SSocial>
        </SFooter>
    )
}

export default Footer;