import {motion} from "framer-motion"

export default function BadRequest(props:any) {
  return (
    <motion.div
    initial={{y:-200,opacity:0}}
    animate={{y:0, opacity:1}}
    className="container my-1 glass-box"
    >
    <div className="d-flex justify-content-center align-items-center display-3 p-5">
        {props.message}
    </div>
    </motion.div>
  )
}
