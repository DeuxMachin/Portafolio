export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  details: string[];
  expanded: boolean;
  skills: string[];
}

export interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
  details: string[];
  expanded: boolean;
}

export const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "App mobile developer",
    company: "Universidad Catolica De Temuco.",
    period: "2024",
    description: "Desarrollo de apliacion Android con React Native para analizar imagenes.",
    details: [
      "mplementó funcionalidades interactivas para la selección de puntos de interés en imágenes, con cálculo automático de distancias en píxeles.",
      "Implementación de una interfaz de usuario intuitiva y atractiva.",
      "Diseñó e integró algoritmos de calibración basados en datos reales para transformar unidades de píxeles a micrómetros.",
      "Optimización del rendimiento de la aplicación para dispositivos móviles.",
      "Colaboración con un equipo de desarrollo ágil para cumplir con los plazos del proyecto.",
      "Realización de pruebas y depuración de la aplicación para garantizar su funcionalidad.",
      
    ],
    expanded: false,
    skills: ["React Native", "Android", "UI/UX Design", "Agile Development", "Image Processing"],
  },
  
];

export const educationData: EducationItem[] = [
  {
    id: 1,
    degree: "Ingeniero Civil En Informatica",
    institution: "Univiersidad Catolica De Temuco",
    period: "2021 - 2025",
    description: "Ingeniería Civil en Informática es una carrera que combina la ingeniería y la informática para formar profesionales capaces de diseñar, desarrollar y gestionar sistemas informáticos complejos.",
    details: [
      "",
    ],
    expanded: false,
  },
  {
    id: 2,
    degree: "Licenciado En Ciencias De La Ingeniera",
    institution: "Universidad Catolica De Temuco",
    period: "2021 - 2025",
    description: "Ciencias de la Ingeniería es una carrera que se enfoca en la aplicación de principios científicos y matemáticos para resolver problemas complejos en diversas áreas de la ingeniería.",
    details: [
      "  ",
    ],
    expanded: false,
  },
 

];