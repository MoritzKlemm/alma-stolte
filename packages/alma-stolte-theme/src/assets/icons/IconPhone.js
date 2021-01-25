import React from 'react';
import { connect, styled, css } from 'frontity';

const CelloBackground = () => {
    return(
        <svg width="20px" height="20px" viewBox="0 0 23 22" version="1.1">
            <title>phone-call</title>
            <defs>
                <filter id="filter-1">
                    <feColorMatrix in="SourceGraphic" type="matrix" values="0 0 0 0 0.349020 0 0 0 0 0.333333 0 0 0 0 0.333333 0 0 0 1.000000 0"></feColorMatrix>
                </filter>
            </defs>
            <g id="Home" stroke="none" stroke-width="2" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                <g id="Main" transform="translate(-577.000000, -6291.000000)">
                    <g id="Form" transform="translate(388.000000, 5562.000000)">
                        <g id="phone-call" transform="translate(190.000000, 726.000000)" filter="url(#filter-1)">
                            <g transform="translate(0.000000, 4.885714)">
                                <path d="M12.6092337,3.57959849 C14.5564338,3.92844526 16.0789164,5.32645196 16.4588238,7.11445199 M12.6092337,0 C16.6825369,0.415514638 19.8995051,3.36575276 20.3571429,7.105503 M19.3825631,14.246802 L19.3825631,16.9315008 C19.3847908,17.4354592 19.1555328,17.916927 18.7511113,18.2576212 C18.3466898,18.5983153 17.8045858,18.7666609 17.2579792,18.7213001 C14.2590353,18.4220821 11.3783386,17.4810986 8.84735579,15.9739583 C6.49260356,14.5999865 4.49618473,12.7667918 2.99987718,10.6045605 C1.35281598,8.26994995 0.327816278,5.61191066 0.0079172889,2.8457808 C-0.0413250981,2.34541766 0.140725231,1.84908851 0.509597603,1.47803506 C0.878469975,1.1069816 1.40019633,0.895372747 1.94733103,0.894811636 L4.87107033,0.894811636 C5.84941593,0.886057873 6.68330224,1.54456765 6.82022987,2.43412697 C6.9436341,3.29329008 7.1724912,4.13687654 7.50243571,4.94879491 C7.77018689,5.6028547 7.5989338,6.34019045 7.06387481,6.83703311 L5.82615851,7.97355563 C7.21352687,10.2139778 9.233732,12.0690141 11.6736371,13.3429534 L12.9113534,12.2064308 C13.452434,11.7151175 14.2554207,11.5578658 14.9677167,11.803726 C15.8519268,12.1066948 16.7706245,12.3168409 17.7062859,12.4301557 C18.6862869,12.5571065 19.4071128,13.3382932 19.3825631,14.246802 L19.3825631,14.246802 Z" id="Shape" stroke="#000000" stroke-width="1.9"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default connect(CelloBackground);


