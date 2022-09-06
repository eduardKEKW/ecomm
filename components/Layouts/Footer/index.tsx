// import { faFacebookSquare, faTwitterSquare, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "components/helpers/LinkCustom";
import { SNavigationContent, SFooter, SItem, SNavigation, SSocial } from "components/styled/Footer";
import { FOOTER_LINKS } from "helpers/local";
import React from "react";

const Footer = () => {

    return (
        <SFooter>
            <SNavigation>
                <SNavigationContent>
                    <div> <span>info</span> </div>

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
                </SNavigationContent>
            </SNavigation>
            
            {/* <SSocial>
                <i><FontAwesomeIcon icon={faFacebookSquare}/></i>
                <i><FontAwesomeIcon icon={faTwitterSquare}/></i>
                <i><FontAwesomeIcon icon={faYoutube}/></i>
            </SSocial> */}
        </SFooter>
    )
}

export default Footer;