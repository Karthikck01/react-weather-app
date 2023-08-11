import { motion } from "framer-motion";

const Button = (props: any) => {
  return (
    <motion.button
      transition={{ duration: 0.1 }}
      whileTap={{ scale: [1, 0.9, 1] }}
      type={props.type}
      onClick={props.whenClick}
      className={props.className}
    >
      {props.name}
    </motion.button>
  );
};

export default Button;
