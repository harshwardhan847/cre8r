import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";

type TeamMember = {
  name: string;
  avatar: string;
};

const teamMembers: TeamMember[] = [
  // { name: "Gaurav Sharma", avatar: "/team/gaurav_sharma.png" },
  // { name: "Priya Kumar", avatar: "/team/priya_kumar.png" },
  // { name: "Riddhi Mehta", avatar: "/team/riddhi_mehta.png" },
  { name: "Sangeeta Kushwaha", avatar: "/team/sangeeta_kushwaha.png" },
  { name: "Shyam Panicker", avatar: "/team/shyam_panicker.png" },
  { name: "Maahi Jumnani", avatar: "/team/maahi_jumnani.png" },
  { name: "Vitika Singh", avatar: "/team/vitika_singh.png" },
  { name: "Rahul Mehta", avatar: "/team/rahul_mehta.png" },
  { name: "Akshita Bangar", avatar: "/team/akshita_bangar.png" },
  { name: "Jainam Mehta", avatar: "/team/jainam_mehta.png" },
  { name: "Prateek Pal", avatar: "/team/prateek_pal.png" },
  { name: "Dipisha Bose", avatar: "/team/dipisha_bose.png" },
  { name: "Harmita Desai", avatar: "/team/harmita_desai.png" },
  { name: "Niharika Mittal", avatar: "/team/niharika_mittal.png" },
  { name: "Simran Sharma", avatar: "/team/simran_sharma.png" },
  { name: "Aditya Mathur", avatar: "/team/aditya_mathur.png" },
  { name: "Tanish Gadodia", avatar: "/team/tanish_gadodia.png" },
  { name: "Aarsh", avatar: "/team/aarsh.png" },
  { name: "Aditya Chaudhary", avatar: "/team/aditya_chaudhary.png" },
  { name: "Sonam Jattain", avatar: "/team/sonam_jattain.png" },
];

const Team = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const intervalId = window.setInterval(() => {
      carouselApi.scrollNext();
    }, 2200);

    return () => {
      window.clearInterval(intervalId);
    };
  }, [carouselApi]);

  return (
    <motion.section
      className="w-full py-16 md:py-24"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-360">
        <motion.a
          href="#"
          className="inline-flex items-center gap-2 rounded-full bg-white px-2 py-1 text-xs font-medium text-[#3a3a3a] shadow-sm ring-1 ring-black/8"
          whileHover={{ y: -1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <span className="rounded-full bg-[#d8f2d6] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.04em] text-[#2f7b37]">
            We're Hiring
          </span>
          <span>Careers</span>
          <ArrowRight size={14} className="text-[#666]" />
        </motion.a>

        <motion.div
          className="mt-6 max-w-280"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.06 }}
        >
          <h2 className="text-[2rem] leading-[1.08] tracking-[-0.02em] font-light text-[#9f9f9f] md:text-[3.05rem]">
            <span className="font-medium text-[#171717]">Meet our team.</span>{" "}
            Join us as we build sustainable audience relationships and scale
            meaningful influencer campaigns.
          </h2>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.12 }}
        >
          <Carousel
            setApi={setCarouselApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent>
              {teamMembers.map((member) => (
                <CarouselItem
                  key={member.name}
                  className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                >
                  <motion.div
                    className="flex flex-col items-center"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  >
                    <div className="w-24 overflow-hidden rounded-xl bg-[#ff6200] ring-2 ring-black/10 md:w-28">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        loading="lazy"
                        className="aspect-3/4 w-full object-cover object-top scale-[1.03]"
                      />
                    </div>
                    <span className="mt-3 text-center text-[0.94rem] leading-snug font-medium text-[#2a2a2a]">
                      {member.name}
                    </span>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Team;
