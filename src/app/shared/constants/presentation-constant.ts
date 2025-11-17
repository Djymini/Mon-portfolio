import { SkillItem } from "../../features/experiences/models/skill-item.model";
import { SocialItem } from "../models/social-item.model";

export const PRES_TITLE: string = "Je suis Mawele Mbizi Biniakounou"
export const PRES_MAIN: string =
  'Actuellement en formation Concepteur Développeur d\’Applications, je recherche un stage non rémunéré du 23 mars au 5 juin 2025. Développeur web passionné, j\’aime concevoir des applications web et relever de nouveaux défis techniques. Curieux, motivé et doté d\’une grande capacité d\’apprentissage, je m\’adapte facilement à différents environnements de travail et à tout type d\’équipe.';


export const SOCIAL_ITEMS: SocialItem[] = [
    {
      icon: 'pi-github',
      url: 'https://github.com/Djymini',
    },
    {
      icon: 'pi-link',
      url: 'https://loutrepixel.itch.io/',
    },
  ];

  export const SKILL_ITEM_DEV_WEB: SkillItem[] = [
    {
      color: '#fdc2c2ff',
      skillName: 'Java',
      skillExpertise: '2 ans experiences',
      skillknowledge: ['Orienté objet', 'Design Pattern'],
      skillIcon: 'assets/images/logos/Java_Logo.png',
    },
    {
      color: '#fbc2fdff',
      skillName: 'Angular',
      skillExpertise: '1 an experience',
      skillknowledge: ['Serivces', 'Developpement par composant'],
      skillIcon: 'assets/images/logos/Angular_gradient_logo.png',
    },
  ];

  export const SKILL_ITEM_DEV_MOBILE: SkillItem[] = [
    {
      color: '#fdc2c2ff',
      skillName: 'java',
      skillExpertise: 'Maitrise (2 ans experiences)',
      skillknowledge: ['POO', 'Design Pattern', 'Test'],
      skillIcon: 'assets/images/logos/Java_Logo.png',
    }
  ];
