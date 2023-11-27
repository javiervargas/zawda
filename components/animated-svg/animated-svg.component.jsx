import { useEffect,useRef } from "react";
import Vivus from "vivus";
import styles from './animated-svg.module.scss'
const AnimatedSvg = () => {
    const svgRef = useRef(null);
    const vivusRef = useRef(null);

    function handleAnimationCompletion() {
        console.log("Animation completed!");
        setTimeout(() => {
            if (vivusRef.current) {
                vivusRef.current.reset().play(1);  // Play the animation at normal speed
            }
        }, 1000);
    }
    
    // useEffect(() => {
    //     if (svgRef.current) {
    //         const vivusInstance = new Vivus(svgRef.current, {
    //             type: 'async',
    //             duration: 300,
    //             onComplete: () => {
    //                 // Fill the SVG paths after the animation completes
    //                 const paths = svgRef.current.querySelectorAll('path');
    //                 paths.forEach(path => {
    //                     path.setAttribute('fill', 'red');  // Change this to your desired fill color
    //                 });
    
    //                 // Reset and play the animation after a delay
    //                 setTimeout(() => {
    //                     paths.forEach(path => {
    //                         path.setAttribute('fill', 'transparent');
    //                     });
    //                     vivusInstance.reset().play();
    //                 }, 2200);  // Assuming the animation takes 2 seconds, we give an additional 200ms before restarting.
    //             }
    //         });
    //     }
    // }, []);
    
    useEffect(() => {
        if (svgRef.current) {
            const vivusInstance = new Vivus(svgRef.current, {
                type: 'async',
                duration: 300,
            });
    
            const loopInterval = setInterval(() => {
                vivusInstance.reset().play();
            }, 5200);  // Assuming the animation takes 2 seconds, we give an additional 200ms before restarting.
    
            return () => clearInterval(loopInterval);  // Cleanup on component unmount
        }
    }, []);
    
    // useEffect(() => {
    //     if (svgRef.current) {
    //         const vivusInstance = new Vivus(svgRef.current, {
    //             type: 'async',
    //             duration: 300
    //         });
    
    //         const loopAnimation = () => {
    //             // Play the animation in reverse (rewind)
    //             vivusInstance.play(-1);
    
    //             // After the rewind completes, play the animation forward
    //             setTimeout(() => {
    //                 vivusInstance.play(1);
    //             }, 4200);  // Assuming the animation takes 2 seconds to rewind
    //         };
    
    //         // Start the initial animation
    //         loopAnimation();
    
    //         // Set an interval to loop the animation
    //         const loopInterval = setInterval(loopAnimation, 5400);  // 2 seconds rewind + 2 seconds forward + 400ms delay
    
    //         return () => clearInterval(loopInterval);  // Cleanup on component unmount
    //     }
    // }, []);
    
    
    // useEffect(() => {
    //     if (svgRef.current) {
    //         new Vivus(svgRef.current, {
    //             duration: 300,
    //             start: 'autostart',
    //             type: 'async',
    //             onComplete:loopAnimation
    //         });
    //     }
    // }, []);
    return (
        <div className={styles.svgHolder}>
       <svg ref={svgRef}  x="0px" y="0px"
	 viewBox="0 0 704.29 512.77" >
       <g>
	<g>
		
			<rect x="398.01" y="206.41" transform="matrix(0.3867 -0.9222 0.9222 0.3867 123.6794 674.2077)" class="st0" width="341.42" height="75.42"/>
		<polygon class="st0" points="359.1,301.63 359.14,301.53 222.05,244.05 192.89,313.61 260.52,341.96 223.96,429.17 293.51,458.33 
			359.2,301.67 		"/>
		
			<rect x="462.04" y="41.84" transform="matrix(0.3867 -0.9222 0.9222 0.3867 229.9692 525.4659)" class="st0" width="96" height="96"/>
		<path class="st0" d="M453.9,149.19L453.9,149.19l-65.89-27.62l-56.77,135.4l65.88,27.62l-66.47,158.53l69.55,29.16l123.25-293.95
			L453.9,149.19z M436.64,240.42l-32.06-13.44l13.44-32.06l32.06,13.44L436.64,240.42z"/>
		<path class="st0" d="M88.02,300.46l-56.77,135.4l135.4,56.77l56.77-135.4L88.02,300.46z M136.64,419.3l-32.06-13.44l13.44-32.06
			l32.06,13.44L136.64,419.3z"/>
	</g>
</g>
       </svg>
        {/* <svg ref={svgRef}  x="0px" y="0px"
	 viewBox="0 0 704.29 512.77" style="enable-background:new 0 0 704.29 512.77;" xml:space="preserve">

<g>
	<g>
		
			<rect x="398.01" y="206.41" transform="matrix(0.3867 -0.9222 0.9222 0.3867 123.6794 674.2077)" class="st0" width="341.42" height="75.42"/>
		<polygon class="st0" points="359.1,301.63 359.14,301.53 222.05,244.05 192.89,313.61 260.52,341.96 223.96,429.17 293.51,458.33 
			359.2,301.67 		"/>
		
			<rect x="462.04" y="41.84" transform="matrix(0.3867 -0.9222 0.9222 0.3867 229.9692 525.4659)" class="st0" width="96" height="96"/>
		<path class="st0" d="M453.9,149.19L453.9,149.19l-65.89-27.62l-56.77,135.4l65.88,27.62l-66.47,158.53l69.55,29.16l123.25-293.95
			L453.9,149.19z M436.64,240.42l-32.06-13.44l13.44-32.06l32.06,13.44L436.64,240.42z"/>
		<path class="st0" d="M88.02,300.46l-56.77,135.4l135.4,56.77l56.77-135.4L88.02,300.46z M136.64,419.3l-32.06-13.44l13.44-32.06
			l32.06,13.44L136.64,419.3z"/>
	</g>
</g>
</svg> */}
</div>
    )
}
export default AnimatedSvg;