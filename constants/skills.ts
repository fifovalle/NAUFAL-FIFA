import {
  SiC,
  SiGit,
  SiPhp,
  SiDart,
  SiExpo,
  SiJira,
  SiRedux,
  SiMysql,
  SiRedis,
  SiSentry,
  SiOpenid,
  SiPrisma,
  SiDocker,
  SiVercel,
  SiNestjs,
  SiVitest,
  SiMongodb,
  SiRailway,
  SiLaravel,
  SiSwagger,
  SiPostman,
  SiExpress,
  SiArduino,
  SiFlutter,
  SiFirebase,
  SiCplusplus,
  SiEspressif,
  SiJavascript,
  SiTypescript,
  SiPostgresql,
  SiGooglecloud,
  SiGithubactions,
  SiScrumalliance,
  SiGoogleauthenticator,
} from "react-icons/si";
import {
  RiCss3Fill,
  RiHtml5Fill,
  RiNextjsFill,
  RiNodejsFill,
  RiReactjsFill,
  RiSupabaseFill,
  RiTailwindCssFill,
  RiLockPasswordFill,
} from "react-icons/ri";

import { SkillsProps } from "@/interfaces/skills-props";

// ========== LANGUAGES ==========
export const languages: SkillsProps[] = [
  { icon: SiC, name: "C" },
  { icon: SiPhp, name: "PHP" },
  { icon: SiCplusplus, name: "C++" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiDart, name: "Dart" },
];

// ========== FRONTEND / MOBILE SKILLS ==========
export const frontendSkills: SkillsProps[] = [
  { icon: RiCss3Fill, name: "CSS" },
  { icon: RiHtml5Fill, name: "HTML" },
  { icon: RiReactjsFill, name: "React" },
  { icon: RiNextjsFill, name: "Next.js" },
  { icon: SiRedux, name: "Redux / Redux Toolkit" },
  { icon: RiReactjsFill, name: "React Native" },
  { icon: SiFlutter, name: "Flutter" },
  { icon: SiExpo, name: "Expo" },
  { icon: RiTailwindCssFill, name: "Tailwind CSS" },
];

// ========== BACKEND SKILLS ==========
export const backendSkills: SkillsProps[] = [
  { icon: SiNestjs, name: "Nest.js" },
  { icon: SiLaravel, name: "Laravel" },
  { icon: RiNodejsFill, name: "Node.js" },
  { icon: SiExpress, name: "Express.js" },
  { icon: SiPrisma, name: "Prisma ORM" },
  { icon: RiLockPasswordFill, name: "JWT Auth" },
  { icon: SiOpenid, name: "OAuth 2.0 (Google, GitHub, Facebook & Discord)" },
  { icon: SiGoogleauthenticator, name: "2FA (TOTP)" },
  { icon: RiLockPasswordFill, name: "AES-256-GCM Encryption" },
  { icon: SiSwagger, name: "Swagger / OpenAPI" },
];

// ========== DATABASE & CACHE ==========
export const databases: SkillsProps[] = [
  { icon: SiMysql, name: "MySQL" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiRedis, name: "Redis" },
  { icon: SiFirebase, name: "Firebase" },
  { icon: SiGooglecloud, name: "Firestore / Realtime DB" },
  { icon: RiSupabaseFill, name: "Supabase" },
  { icon: SiPostgresql, name: "PostgreSQL" },
];

// ========== TOOLS & DEVOPS ==========
export const tools: SkillsProps[] = [
  { icon: SiGit, name: "Git" },
  { icon: SiVercel, name: "Vercel" },
  { icon: SiRailway, name: "Railway" },
  { icon: SiDocker, name: "Docker" },
  { icon: SiDocker, name: "Docker Compose" },
  { icon: SiPostman, name: "Postman" },
  { icon: SiGithubactions, name: "GitHub Actions / CI-CD" },
  { icon: SiJira, name: "Jira" },
  { icon: SiScrumalliance, name: "Agile / Scrum" },
  { icon: SiSentry, name: "Sentry" },
];

// ========== TESTING ==========
export const testing: SkillsProps[] = [
  { icon: SiVitest, name: "Vitest" },
  { icon: SiVitest, name: "Unit Testing" },
  { icon: SiVitest, name: "E2E Testing" },
];

// ========== IOT ==========
export const iot: SkillsProps[] = [
  { icon: SiArduino, name: "Arduino" },
  { icon: SiEspressif, name: "ESP32 / ESP8266" },
];
