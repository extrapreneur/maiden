//import aos from './aos'
import AOS from 'aos';
import '../css/aos.css';
import '../css/bootstrap.min.css';
import '../css/custom.css';
import '../css/font-awesome.css';


AOS.init();

const docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

console.log('bonk')