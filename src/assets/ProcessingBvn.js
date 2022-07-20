import { TbLoader } from "react-icons/tb";
import { motion } from "framer-motion";

function Processing() {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            delay: 0.5,
          },
        }}
        className="flex items-center justify-center fixed top-0 right-0 bottom-0 left-0 bg-overlay backdrop-blur-xs z-50"
        // onClick={() => {
        //         closeDetails(false)
        //     }}
      >
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.5,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              delay: 0.5,
            },
          }}
          className="w-128 bg-white rounded-xl absolute border-green p-6 text-center"
        >
          <div>
            <h1 className="font-bold text-neutral text-3xl">Processing BVN</h1>
          </div>
          <div className="font-semibold text-base text-neutral my-8">
            <p>
              Please wait while we process your BVN. This will take few seconds.
            </p>
          </div>
          <div className="flex justify-center">
            <button className="rounded-full w-28 h-12 text-neutral flex justify-around items-center">
              <TbLoader /> Processing
            </button>
          </div>
        </motion.div>
        {/* <NoBvn /> */}
      </motion.div>
    </>
  );
}

function NoBvn() {
  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        }}
        exit={{
          opacity: 0,
          transition: {
            delay: 0.5,
          },
        }}
        className="w-128 bg-white rounded-xl absolute border-green p-6 text-center"
      >
        <div>
          <h1 className="font-bold text-neutral text-3xl">No BVN Found</h1>
        </div>
        <div className="font-semibold text-base text-neutral my-8">
          <p>Please add your BVN to continue this action</p>
        </div>
        <div className="input mb-3">
          <input required type="tel" placeholder="enter BVN" className="box" />
        </div>
        <div className="flex justify-center">
          <button className="rounded-full bg-green w-full h-12 text-dashbg flex justify-around items-center">
            Continue
          </button>
        </div>
      </motion.div>
    </>
  );
}
export default Processing;
