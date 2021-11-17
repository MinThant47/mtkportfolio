import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion/dist/es/index";

export default function useScroll(thres = 0.05) {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: thres });

  if (view) {
    controls.start("visible");
  } else {
    controls.start("hidden");
  }

  return [element, controls];
}
