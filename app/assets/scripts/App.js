import $ from 'jquery';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Menu from './modules/Menu';
import Sliders from './modules/Slider';
import Interactions from './modules/Interactions';


new RevealOnScroll($(".secondpage"), "85%");
new RevealOnScroll($(".thirdpage"), "85%");
const stickyHeader = new StickyHeader();
const menu = new Menu();
const sliders = new Sliders();
const interactions = new Interactions();