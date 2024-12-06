import msc from './../../assets/msc.jpg';
import bsc from './../../assets/bsc.jpg';
import bsc_nursing from './../../assets/bsc-nursing.jpg';

const Nursingcourses = [
    {
      name: "M.Sc. Nursing",
      eligibility: "The candidate should be a Registered Nurse and Registered Midwife or equivalent with any State Nursing Registration Council.",
      description: "The M.Sc. Nursing program is designed to provide advanced education and training for registered nurses. This course focuses on various specialties in nursing to enhance clinical skills and knowledge.",
      details: [
        { qualification: "B.Sc. Nursing / B.Sc. Hons. Nursing / Post Basic B.Sc. Nursing in an institution recognized by Indian Nursing Council." },
        { percentage: "General – 55%, SC / ST – 50% of total marks of the qualifying examination." },
        { certificates: "10th, 12th, B.Sc. Nursing / B.Sc. Hons. Nursing / Post Basic B.Sc. Nursing Marks Card, Conduct Certificate, Degree certificate, Registration certificate and 1 yr experience certificate after B.Sc (N)." },
        { workExperience: "Min. 1yr after Basic B. Sc. Nursing, Min. 1yr prior or after Post B.Sc. Nursing." },
        { mediumOfInstruction: "English" },
      ],
      image: msc
    },
    {
      name: "B.Sc. Nursing (Basic)",
      eligibility: "The candidate should have completed 10+2 (PUC / PDC) or its equivalent as recognized by RGHUS with science subjects (PCB) with English.",
      description: "The B.Sc. Nursing (Basic) program prepares students to become competent and compassionate nurses. The curriculum includes theoretical and practical training in nursing and healthcare.",
      details: [
        { ageLimit: "17yrs on or before 31st December of the year of admission." },
        { percentage: "General – 45%, SC / ST – 40% of total marks in science subjects of the qualifying examination." },
        { certificates: "10th, 12th Marks Card, Conduct Certificate, Transfer certificate & Migration certificate." },
        { mediumOfInstruction: "English" },
      ],
      image: bsc
    },
    {
      name: "B.Sc. Nursing (Post Certificate)",
      eligibility: "The candidate should have completed General Nursing & Midwifery.",
      description: "The B.Sc. Nursing (Post Certificate) program offers registered nurses an opportunity to advance their education and enhance their skills. This course focuses on nursing management and advanced clinical practice.",
      details: [
        { ageLimit: "48 years." },
        { percentage: "Pass class in GNM." },
        { certificates: "10th, 10+2, GNM marks cards, Diploma certificate, Registration certificate, Transfer certificate & Migration certificate." },
        { mediumOfInstruction: "English" },
      ],
      image: bsc_nursing
    },
    {
      name: "Diploma in General Nursing & Midwifery Programme (GNM)",
      eligibility: "The candidate should have completed 10+2 (PUC/PDC) or its equivalent.",
      description: "The Diploma in General Nursing & Midwifery (GNM) program provides foundational nursing education and prepares students to become entry-level nursing professionals. The curriculum covers essential nursing concepts and skills.",
      details: [
        { percentage: "40% in 10+2." },
        { certificates: "10th, 10+2, Transfer certificate & Migration certificate." },
        { mediumOfInstruction: "English" },
      ],
      image: bsc
    }
  ];
  
  export default   Nursingcourses   ;
  