/*
 * External dependencies
 */

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
/* import 'bootstrap/dist/js/bootstrap.bundle.min'; */
/* import 'animate.css'; */
library.add([faCheck, faLocationDot]);

dom.watch();
/*
 * Internal dependencies
 */
import './styles/style.scss'; /* 
import form from './components/form';
import mobileMenu from './components/mobileMenu';
import curentNavActive from './components/curentNavActive'; */
/* 
document.addEventListener('DOMContentLoaded', () => {
    form();
    curentNavActive();
    mobileMenu();
});
 */
