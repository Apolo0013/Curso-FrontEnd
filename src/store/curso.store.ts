import { create } from "zustand";

type Author = {
    name: string,
    srcAvatar: string,
    about: string
}

export type Course = {
    id: string
    title: string
    author: Author,
    description: string,
    summary: string
    price: number
    thumbnailUrl: string
    learningOutcomes: string[]
    targetAudience: string[]
    prerequisites: string[]
    completionBenefits: string[]
}
const Course: Course[] = [
  {
    id: "course-frontend-101",
    title: "Frontend Fundamentals",
    author: {
      name: "Lucas Andrade",
      srcAvatar: "https://picsum.photos/seed/author1/200",
      about: "Frontend developer focused on modern web standards."
    },
    summary: "Learn the core fundamentals of frontend development.",
    description:
      "This course covers the complete foundation of frontend development, including HTML, CSS, and JavaScript. The goal is to build a strong base for modern frontend frameworks.",
    price: 149.9,
    thumbnailUrl: "https://picsum.photos/seed/course1/600/400",
    learningOutcomes: [
      "Understand how the web works",
      "Write semantic HTML",
      "Use modern CSS layouts",
      "Add interactivity with JavaScript"
    ],
    targetAudience: [
      "Beginners in web development",
      "Designers transitioning to code"
    ],
    prerequisites: [
      "Basic computer knowledge"
    ],
    completionBenefits: [
      "Build responsive websites",
      "Strong frontend foundation"
    ]
  },
  {
    id: "course-css-advanced",
    title: "Advanced CSS Layouts",
    author: {
      name: "Marina Souza",
      srcAvatar: "https://picsum.photos/seed/author2/200",
      about: "CSS specialist with experience in large-scale design systems."
    },
    summary: "Master modern CSS techniques for complex layouts.",
    description:
      "Dive deep into Flexbox, Grid, responsive design, and advanced layout strategies used in professional projects.",
    price: 199.9,
    thumbnailUrl: "https://picsum.photos/seed/course2/600/400",
    learningOutcomes: [
      "Build complex responsive layouts",
      "Master CSS Grid and Flexbox",
      "Create scalable design systems"
    ],
    targetAudience: [
      "Frontend developers",
      "UI designers"
    ],
    prerequisites: [
      "Basic CSS knowledge"
    ],
    completionBenefits: [
      "Write maintainable CSS",
      "Handle complex UI layouts"
    ]
  },
  {
    id: "course-js-core",
    title: "JavaScript Core Concepts",
    author: {
      name: "Rafael Costa",
      srcAvatar: "https://picsum.photos/seed/author3/200",
      about: "JavaScript engineer focused on performance and clean code."
    },
    summary: "Understand JavaScript deeply, beyond frameworks.",
    description:
      "This course explains JavaScript fundamentals such as scope, closures, async programming, and memory management.",
    price: 179.9,
    thumbnailUrl: "https://picsum.photos/seed/course3/600/400",
    learningOutcomes: [
      "Understand closures and scope",
      "Work with async code",
      "Write predictable JavaScript"
    ],
    targetAudience: [
      "Frontend developers",
      "Backend developers"
    ],
    prerequisites: [
      "Basic JavaScript syntax"
    ],
    completionBenefits: [
      "Stronger JavaScript foundation",
      "Better debugging skills"
    ]
  },
  {
    id: "course-react-201",
    title: "React in Practice",
    author: {
      name: "Fernanda Lima",
      srcAvatar: "https://picsum.photos/seed/author4/200",
      about: "React developer building scalable frontend applications."
    },
    summary: "Build real-world applications with React.",
    description:
      "Learn how to structure React applications, manage state effectively, and apply best practices for scalability.",
    price: 279.9,
    thumbnailUrl: "https://picsum.photos/seed/course4/600/400",
    learningOutcomes: [
      "Use React hooks effectively",
      "Manage global state",
      "Build scalable React apps"
    ],
    targetAudience: [
      "Frontend developers with React basics"
    ],
    prerequisites: [
      "Basic React knowledge",
      "JavaScript intermediate level"
    ],
    completionBenefits: [
      "Production-ready React skills",
      "Scalable project structure"
    ]
  },
  {
    id: "course-fullstack-301",
    title: "Fullstack Web Development",
    author: {
      name: "Bruno Martins",
      srcAvatar: "https://picsum.photos/seed/author5/200",
      about: "Fullstack developer working with React and Node.js."
    },
    summary: "Build complete web applications from frontend to backend.",
    description:
      "This course covers backend APIs, authentication, databases, and frontend integration to build complete systems.",
    price: 399.9,
    thumbnailUrl: "https://picsum.photos/seed/course5/600/400",
    learningOutcomes: [
      "Build REST APIs",
      "Integrate frontend and backend",
      "Handle authentication flows"
    ],
    targetAudience: [
      "Frontend developers going fullstack",
      "Backend developers learning frontend"
    ],
    prerequisites: [
      "JavaScript intermediate level",
      "Basic web development knowledge"
    ],
    completionBenefits: [
      "End-to-end application skills",
      "Deploy fullstack projects"
    ]
  }
]


type CursoStore = {
    Course: Course[]
}

export const useCourseStore = create<CursoStore>(() => ({
    Course: Course
}))