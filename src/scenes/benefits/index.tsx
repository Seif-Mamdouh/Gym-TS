import { SelectedPage, BenefitType } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from "@/assets/Seif.png";

import Lottie from "react-lottie";
import coach from "@/lottie/coach-cencept-animation.json";
import benchPress from "@/lottie/benchPress.json";
import gymCouple from "@/lottie/gymOld.json";
import legPress from "@/lottie/girlLegPress.json";

const BenchPress = {
  loop: true,
  autoplay: true,
  animationData: benchPress,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const GymCouple = {
  loop: true,
  autoplay: true,
  animationData: gymCouple,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const LegPress = {
  loop: true,
  autoplay: true,
  animationData: legPress,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const benefits: Array<BenefitType> = [
  {
    icon: <Lottie options={LegPress} height={45} width={45} />,
    title: "Personalized Guidance",
    description:
      "Get tailored workout plans, nutrition advice, and expert support for effective fitness goals.",
  },
  {
    icon: <Lottie options={BenchPress} height={45} width={45} />,
    title: "College Lifestyle Integration",
    description:
      "Seamlessly fit workouts into your busy college schedule, customized for your commitments.",
  },
  {
    icon: <Lottie options={GymCouple} height={45} width={45} />,
    title: "Personalized Guidance",
    description:
      "Join a supportive fitness community, celebrating successes and staying accountable.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>Ignite Your College Fitness Revolution.</HText>
          <p className="my-5 text-sm">
            Embrace a fitness revolution designed exclusively for college
            students, as we break away from the average gym experience and
            unleash a tailored consulting service that catapults you towards
            your fittest self like never before.
          </p>
        </motion.div>

        {/* BENEFITS */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="max-w-xs rounded-2xl drop-shadow-2xl"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div>
              <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    Unleash Your Fittest Self with Tailored Consulting for
                    Unprecedented{" "}
                    <span className="text-secondary-500"> Results! </span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Our revolutionary consulting service breaks free from the
                confines of average gym experiences, propelling you towards
                unparalleled results. With tailored workout plans, expert
                nutrition advice, and unwavering support, we empower you to
                embrace your full potential and unlock the best version of
                yourself. Our approach seamlessly integrates into your busy
                college schedule, ensuring that fitness becomes an integral part
                of your life without sacrificing your academic or social
                commitments.
              </p>
              <p className="mb-5">
                Join a vibrant community of fellow college students, find
                motivation, and celebrate successes together. It's time to
                shatter limits, redefine what it means to be fit, and embark on
                an extraordinary fitness journey that leaves an indelible mark
                on your college years. Unleash your fittest self and conquer
                your goals with our transformative tailored consulting for
                unprecedented results!
              </p>
            </motion.div>

            {/* Button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
