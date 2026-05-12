import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

type TeamMember = {
  name: string;
  avatar: string;
};

const memberNames = [
  "Abdelrahman Mostafa",
  "Ahmed Elsakaan",
  "Alexandre Araujo",
  "Alexandre Campos",
  "Ana Brandt",
  "Ana Ribeiro",
  "Ana Rita Silva",
  "Andre Barroso",
  "Andre Costa",
  "Andre Grilo",
  "Andre Justo",
  "Andre Martins",
  "Andre Monforte",
  "Andres Angulo",
  "Arjun Krisna",
  "Artem Avdacev",
  "Awni Shamah",
  "Barbara Ancede",
  "Beatriz Fernandes",
  "Beau Minder",
  "Bernardo Domingues",
  "Brandon Ruetsch",
  "Brian Moore",
  "Bruno Santos",
  "Buster Bylis",
  "Cameron Stradeski",
  "Camila Murcia",
  "Catarina Araujo",
  "Cody Richless",
  "Connor Priest",
  "Cristina Rosello",
  "Daniela Nobre",
  "Daniel Timperio",
  "David Roche",
  "Debora Oliveira",
  "Diana Pias",
  "Diogo Moreira",
  "Diogo Parrinha",
  "Diogo Santos",
  "Diogo Silva",
  "Eduardo Nunes",
  "Elad Flishko",
  "Evan Rawbon",
  "Francisco Fraga",
  "Francisco Silva",
  "Garen Ballard",
  "Goncalo Azenha",
  "Goncalo Cabrita",
  "Gracinda Santos",
  "Guilherme Passo",
  "Guillermo Blanco",
  "Heni Yangui",
  "Hileo Andersson",
  "Hiram Garcia",
  "Jackeline Castaneda",
  "Jake Bennett",
  "James Luong",
  "James Quinlan",
  "Jesse Chaney",
  "Joana Bastos",
  "Joao Bibiano",
  "Joao Eira",
  "Joao Pena",
  "Joao Silva",
  "Joaquim Viegas",
  "Jordan Ballerine",
  "Jose Marques",
  "Kevin Sandoval",
  "Laura Santos",
  "Lauren Smalley",
  "Liliana Fonte",
  "Luis Sosa",
  "Mahmoud Ashraf",
  "Mariana Matos",
  "Max Pradella",
  "Medha Muppala",
  "Meghan Kerrigan",
  "Meredith Fabo",
  "Michael Macken",
  "Miguel Botelho",
  "Miguel Cabrera",
  "Miguel Cruz",
  "Miguel Joaquim",
  "Miguel Lamas",
  "Molly Maahs",
  "Nelson Oliveira",
  "Nuno Placido",
  "Pablo Marza",
  "Patricia Nogueira",
  "Pavol Poljak",
  "Pedro Roda",
  "Rafael Andrade",
  "Rafael Ferreira",
  "Rafael Gil",
  "Ricardo Ferreira",
  "Ricardo Ferreira",
  "Rodrigo Ehresmann",
  "Roy Shin",
  "Rustam Sharshenov",
  "Samuel Oliveira",
  "Sergio Rocha",
  "Sofia Ferreira",
  "Thiago Azevedo",
  "Tiago Freitas",
  "Valerie Burns",
  "Vitor Cordeiro",
  "Waleed Murad",
  "Youssef Walid",
];

const teamMembers: TeamMember[] = memberNames.map((name, index) => ({
  name,
  avatar: `https://i.pravatar.cc/64?img=${(index % 70) + 1}`,
}));

const DESKTOP_COLUMN_COUNT = 6;

const Team = () => {
  const columns: TeamMember[][] = Array.from(
    { length: DESKTOP_COLUMN_COUNT },
    () => [],
  );

  teamMembers.forEach((member, index) => {
    columns[index % DESKTOP_COLUMN_COUNT].push(member);
  });

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
            17 Opens
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
            <span className="font-medium text-[#171717]">Join the team.</span>{" "}
            We free sales teams from low-value tasks so they can focus on
            closing deals.
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-7">
          {columns.map((column, columnIndex) => (
            <motion.ul
              key={`team-column-${columnIndex}`}
              className="space-y-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0.12 + columnIndex * 0.05,
              }}
            >
              {column.map((member) => (
                <motion.li
                  key={`${columnIndex}-${member.name}`}
                  className="flex items-center gap-2"
                  whileHover={{ x: 1 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  <img
                    src={member.avatar}
                    alt={member.name}
                    loading="lazy"
                    className="h-5 w-5 shrink-0 rounded-full object-cover ring-1 ring-black/8"
                  />
                  <span className="text-[0.92rem] leading-none font-normal text-[#2a2a2a]">
                    {member.name}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Team;
