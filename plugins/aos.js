import AOS from "aos";
import "aos/dist/aos.css";
export default ({ app }) => {
  app.AOS = new AOS.init({     
    once: true,
    disable: 'phone',
    duration: 600,
    easing: 'ease-out-sine', }); // or any other options you need
};