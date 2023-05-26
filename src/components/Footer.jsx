import React from 'react'
import '../assets/css/footer.css'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="column wider">
                <h4>Columna 1</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque porro unde soluta adipisci labore quo magni, officiis perferendis exercitationem doloribus?</p>
            </div>
            <div className="column">
                <h4>Columna 2</h4>
                <p>columna 2 </p>
                <p>columna 2 </p>
                <p>columna 2 </p>
                <p>columna 2 </p>
            </div>
            <div className="column">
                <h4>Columna 3</h4>
                <p>columna 2 </p>
                <p>columna 2 </p>
                <p>columna 2 </p>
                <p>columna 2 </p>
            </div>
            <div className="column wider">
                <h4>Columna 4</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis corporis,</p>
                <div className='svg-footer'>
                    <a>
                        <svg className='svg-icon' width="45" height="45" viewBox="0 0 86 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M85.75 6.35662V78.6434C85.75 80.2961 85.0877 81.8812 83.9087 83.0498C82.7297 84.2185 81.1306 84.875 79.4632 84.875H6.53676C4.86941 84.875 3.27035 84.2185 2.09135 83.0498C0.912354 81.8812 0.25 80.2961 0.25 78.6434L0.25 6.35662C0.25 4.70389 0.912354 3.11885 2.09135 1.9502C3.27035 0.781544 4.86941 0.125 6.53676 0.125L79.4632 0.125C81.1306 0.125 82.7297 0.781544 83.9087 1.9502C85.0877 3.11885 85.75 4.70389 85.75 6.35662V6.35662ZM25.3971 32.5294H12.8235V72.4118H25.3971V32.5294ZM26.5287 18.8199C26.5353 17.8771 26.3545 16.9423 25.9967 16.0688C25.6388 15.1953 25.1109 14.4003 24.4431 13.729C23.7752 13.0578 22.9805 12.5235 22.1043 12.1567C21.2282 11.7899 20.2877 11.5977 19.3366 11.5912H19.1103C17.1762 11.5912 15.3213 12.3528 13.9536 13.7084C12.586 15.064 11.8176 16.9027 11.8176 18.8199C11.8176 20.737 12.586 22.5757 13.9536 23.9313C15.3213 25.2869 17.1762 26.0485 19.1103 26.0485V26.0485C20.0614 26.0717 21.0079 25.9089 21.8955 25.5694C22.7832 25.2299 23.5947 24.7204 24.2836 24.0699C24.9725 23.4195 25.5254 22.6408 25.9106 21.7785C26.2958 20.9161 26.5058 19.987 26.5287 19.0442V18.8199ZM73.1765 48.1832C73.1765 36.1936 65.4815 31.5324 57.8368 31.5324C55.3337 31.4081 52.8416 31.9366 50.6089 33.065C48.3762 34.1934 46.481 35.8824 45.1124 37.9634H44.7603V32.5294H32.9412V72.4118H45.5147V51.1993C45.333 49.0268 46.0233 46.871 47.4359 45.2001C48.8485 43.5292 50.8691 42.4783 53.0588 42.2757H53.5366C57.535 42.2757 60.5024 44.7683 60.5024 51.0498V72.4118H73.0759L73.1765 48.1832Z" fill="#F2F2F2" />
                        </svg>
                    </a>
                    <a>
                        <svg className='svg-icon' width="45" height="45" viewBox="0 0 86 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M85.75 6.35662V78.6434C85.75 80.2961 85.0877 81.8812 83.9087 83.0498C82.7297 84.2185 81.1306 84.875 79.4632 84.875H6.53676C4.86941 84.875 3.27035 84.2185 2.09135 83.0498C0.912354 81.8812 0.25 80.2961 0.25 78.6434L0.25 6.35662C0.25 4.70389 0.912354 3.11885 2.09135 1.9502C3.27035 0.781544 4.86941 0.125 6.53676 0.125L79.4632 0.125C81.1306 0.125 82.7297 0.781544 83.9087 1.9502C85.0877 3.11885 85.75 4.70389 85.75 6.35662V6.35662ZM25.3971 32.5294H12.8235V72.4118H25.3971V32.5294ZM26.5287 18.8199C26.5353 17.8771 26.3545 16.9423 25.9967 16.0688C25.6388 15.1953 25.1109 14.4003 24.4431 13.729C23.7752 13.0578 22.9805 12.5235 22.1043 12.1567C21.2282 11.7899 20.2877 11.5977 19.3366 11.5912H19.1103C17.1762 11.5912 15.3213 12.3528 13.9536 13.7084C12.586 15.064 11.8176 16.9027 11.8176 18.8199C11.8176 20.737 12.586 22.5757 13.9536 23.9313C15.3213 25.2869 17.1762 26.0485 19.1103 26.0485V26.0485C20.0614 26.0717 21.0079 25.9089 21.8955 25.5694C22.7832 25.2299 23.5947 24.7204 24.2836 24.0699C24.9725 23.4195 25.5254 22.6408 25.9106 21.7785C26.2958 20.9161 26.5058 19.987 26.5287 19.0442V18.8199ZM73.1765 48.1832C73.1765 36.1936 65.4815 31.5324 57.8368 31.5324C55.3337 31.4081 52.8416 31.9366 50.6089 33.065C48.3762 34.1934 46.481 35.8824 45.1124 37.9634H44.7603V32.5294H32.9412V72.4118H45.5147V51.1993C45.333 49.0268 46.0233 46.871 47.4359 45.2001C48.8485 43.5292 50.8691 42.4783 53.0588 42.2757H53.5366C57.535 42.2757 60.5024 44.7683 60.5024 51.0498V72.4118H73.0759L73.1765 48.1832Z" fill="#F2F2F2" />
                        </svg>
                    </a>

                    <a>
                        <svg className='svg-icon' width="45" height="45" viewBox="0 0 86 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M85.75 6.35662V78.6434C85.75 80.2961 85.0877 81.8812 83.9087 83.0498C82.7297 84.2185 81.1306 84.875 79.4632 84.875H6.53676C4.86941 84.875 3.27035 84.2185 2.09135 83.0498C0.912354 81.8812 0.25 80.2961 0.25 78.6434L0.25 6.35662C0.25 4.70389 0.912354 3.11885 2.09135 1.9502C3.27035 0.781544 4.86941 0.125 6.53676 0.125L79.4632 0.125C81.1306 0.125 82.7297 0.781544 83.9087 1.9502C85.0877 3.11885 85.75 4.70389 85.75 6.35662V6.35662ZM25.3971 32.5294H12.8235V72.4118H25.3971V32.5294ZM26.5287 18.8199C26.5353 17.8771 26.3545 16.9423 25.9967 16.0688C25.6388 15.1953 25.1109 14.4003 24.4431 13.729C23.7752 13.0578 22.9805 12.5235 22.1043 12.1567C21.2282 11.7899 20.2877 11.5977 19.3366 11.5912H19.1103C17.1762 11.5912 15.3213 12.3528 13.9536 13.7084C12.586 15.064 11.8176 16.9027 11.8176 18.8199C11.8176 20.737 12.586 22.5757 13.9536 23.9313C15.3213 25.2869 17.1762 26.0485 19.1103 26.0485V26.0485C20.0614 26.0717 21.0079 25.9089 21.8955 25.5694C22.7832 25.2299 23.5947 24.7204 24.2836 24.0699C24.9725 23.4195 25.5254 22.6408 25.9106 21.7785C26.2958 20.9161 26.5058 19.987 26.5287 19.0442V18.8199ZM73.1765 48.1832C73.1765 36.1936 65.4815 31.5324 57.8368 31.5324C55.3337 31.4081 52.8416 31.9366 50.6089 33.065C48.3762 34.1934 46.481 35.8824 45.1124 37.9634H44.7603V32.5294H32.9412V72.4118H45.5147V51.1993C45.333 49.0268 46.0233 46.871 47.4359 45.2001C48.8485 43.5292 50.8691 42.4783 53.0588 42.2757H53.5366C57.535 42.2757 60.5024 44.7683 60.5024 51.0498V72.4118H73.0759L73.1765 48.1832Z" fill="#F2F2F2" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
{/* <footer className="footer">
<div classNameName='section-footer container'>
    <div classNameName='content-footer-1'>
        <h3 classNameName='h3-footer'> Lorem ipsum dolor.</h3>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    </div>
    <div classNameName='content-footer-2'>
        <h3 classNameName='h3-footer'> Lorem ipsum .</h3>
        <h4> Lorem ipsum dolor.</h4>
        <h4> Lorem ipsum dolor.</h4>
        <h4> Lorem ipsum dolor.</h4>
        <h4> Lorem ipsum dolor.</h4>
    </div>
    <div classNameName='content-footer-2'>
        <h3 classNameName='h3-footer'> Lorem ipsum .</h3>
        <h4> Lorem ipsum dolor.</h4>
        <h4> Lorem ipsum dolor.</h4>
        <h4> Lorem ipsum dolor.</h4>
        <h4> Lorem ipsum dolor.</h4>
    </div>
    <div classNameName='content-footer-1'>
        <h3 classNameName='h3-footer'> Lorem ipsum dolor.</h3>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
    </div>
</div>

</footer> */}