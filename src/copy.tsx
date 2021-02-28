import React from "react";
import { Link, Text } from "@hackthenorth/north";
import {
  // Stories section
  KoryHeadshotImg,
  KimberHeadshotImg,
  AlexisHeadshotImg,
  AlexHackerHeadshotImg,
  BrunoHackerHeadshotImg,
  JackyHackerHeadshotImg,
  KevinHackerHeadshotImg,
  MichelleHackerHeadshotImg,
  // Sponsors & Partners
  TechyonLogoImg,
  SponsorLogoImg,
  SponsorIllustrationImg,
  
  // About section imgs
  TrudeauHeadshotImg,
  RecapVidButtonBackgroundImg,
  PlayIconImg,
  EngineeringIllustrationImg,
  CloseIconImg,
  ActivityGradient,
  ActivityImg1,
  ActivityImg2,
  ActivityImg3,
  ActivityImg4,
  HackerGradient,
  HackerImg1,
  HackerImg2,
  HackerImg3,
  HackerImg4,
  HardwareGradient,
  HardwareImg1,
  HardwareImg2,
  HardwareImg3,
  HardwareImg4,
  SpeakerGradient,
  SpeakerImg1,
  SpeakerImg2,
  SpeakerImg3,
  SpeakerImg4,
  WaterlooEngLogoImg,
  // Leaders section
  CatHeadshotImg,
  ChamathHeadshotImg,
  ConnieHeadshotImg,
  DylanHeadshotImg,
  EthanWildingHeadshotImg,
  JeffHeadshotImg,
  JenniferHeadshotImg,
  TiffaniHeadshotImg,
  TracyHeadshotImg,
  VinodHeadshotImg,
  LightbulbBalloonCloudsIllustrationImg,
  // Navbar
  LogoIconLightImg,
  LogoIconDarkImg,
  SocialFacebookImg,
  SocialFacebookImgDark,
  SocialInstaImg,
  SocialInstaImgDark,
  SocialTwitterImg,
  SocialTwitterImgDark,
  SocialEmailImg,
  Robogoose4IllustrationImg,
  MichalHeadshotImg,
  OrganizerHeadshotImg,
  GoodHealthAndWellBeingImg,
  ClimateActionImg,
  DecentWorkImg,
  IndustryImg,
  QualityEducationImg,
  ReducedInequalitiesImg,
  SustainableCitiesImg,
  HackTheSolution,
  DSCLogo,
} from "static/img";

interface Sponsor {
  name: string;
  tier: "bronze" | "silver" | "gold" | "startup" | "partner";
  imgSrc: string;
  link: string;
  feature?: {
    text: string;
    link: string;
    linkLabel: string;
  };
}

const sponsors: Sponsor[] = [
  {
    name: "Hack the North",
    tier: "silver",
    imgSrc: SponsorLogoImg,
    link: "https://hackthenorth.com"
  },

  {
    name: "Hack the North",
    tier: "silver",
    imgSrc: SponsorLogoImg,
    link: "https://hackthenorth.com"
  },
  {
    name: "Hack the North",
    tier: "silver",
    imgSrc: SponsorLogoImg,
    link: "https://hackthenorth.com"
  },
  {
    name: "Hack the North",
    tier: "silver",
    imgSrc: SponsorLogoImg,
    link: "https://hackthenorth.com"
  },
  {
    name: "Hack the North",
    tier: "silver",
    imgSrc: SponsorLogoImg,
    link: "https://hackthenorth.com"
  },
  {
    name: "Hack the North",
    tier: "silver",
    imgSrc: SponsorLogoImg,
    link: "https://hackthenorth.com"
  },
  {
    name: "Hack the North",
    tier: "silver",
    imgSrc: SponsorLogoImg,
    link: "https://hackthenorth.com"
  },
  {
    name: "Hack the North",
    tier: "silver",
    imgSrc: SponsorLogoImg,
    link: "https://hackthenorth.com"
  },
  {
    name: "Hack the North",
    tier: "silver",
    imgSrc: SponsorLogoImg,
    link: "https://hackthenorth.com"
  },
  {
    name: "Hack the North",
    tier: "silver",
    imgSrc: SponsorLogoImg,
    link: "https://hackthenorth.com",
    feature: {
      text:
        "Hack the North is Canada's biggest hackathon, happening on September 13-15, 2019 at the University of Waterloo.",
      link: "https://hackthenorth.com",
      linkLabel: "Hack the North"
    }
  },
  {
    name: "Hack the North",
    tier: "silver",
    imgSrc: SponsorLogoImg,
    link: "https://hackthenorth.com"
  },
  {
    name: "Hack the North",
    tier: "silver",
    imgSrc: SponsorLogoImg,
    link: "https://hackthenorth.com",
    feature: {
      text:
        "Hack the North is Canada's biggest hackathon, happening on September 13-15, 2019 at the University of Waterloo.",
      link: "https://hackthenorth.com",
      linkLabel: "Hack the North"
    }
  },
  {
    name: "Hack the North",
    tier: "silver",
    imgSrc: SponsorLogoImg,
    link: "https://hackthenorth.com",
    feature: {
      text:
        "Hack the North is Canada's biggest hackathon, happening on September 13-15, 2019 at the University of Waterloo.",
      link: "https://hackthenorth.com",
      linkLabel: "Hack the North"
    }
  },
  {
    name: "Hack the North",
    tier: "silver",
    imgSrc: SponsorLogoImg,
    link: "https://hackthenorth.com"
  },
  // {
  //   name: "Hack the North",
  //   tier: "gold",
  //   imgSrc: SponsorLogoImg,
  //   link: "https://hackthenorth.com",
  //   feature: {
  //     text:
  //       "Hack the North is Canada's biggest hackathon, happening on September 13-15, 2019 at the University of Waterloo.",
  //     link: "https://hackthenorth.com",
  //     linkLabel: "Hack the North"
  //   }
  // },
  // {
  //   name: "Hack the North",
  //   tier: "gold",
  //   imgSrc: SponsorLogoImg,
  //   link: "https://hackthenorth.com",
  //   feature: {
  //     text:
  //       "Hack the North is Canada's biggest hackathon, happening on September 13-15, 2019 at the University of Waterloo.",
  //     link: "https://hackthenorth.com",
  //     linkLabel: "Hack the North"
  //   }
  // },
  {
    name: "Techyon",
    tier: "partner",
    imgSrc: TechyonLogoImg,
    link: "https://techyon.org/"
  }
];

// Taken from https://github.com/Daplie/knuth-shuffle
const shuffle = <T extends {}>(array: T[]) => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

const team = [
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Open-sourced with 💛 by Michal Jez, Frontend",
    img: MichalHeadshotImg,
    alt: "A headshot of Michal Jez"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  },
  {
    text: "Made with 💛 by students in Waterloo 🇨🇦",
    img: OrganizerHeadshotImg,
    alt: "Hack the North logo"
  }
];

export default {
  nav: {
    logo: {
      light: LogoIconLightImg,
      dark: LogoIconDarkImg
    },
    sections: ["About", "Hackathon", "Sponsors", "FAQ", "DSC MAIT"],
    socialLinks: [
      {
        name: "linked in",
        icons: {
          light: SocialFacebookImg,
          dark: SocialFacebookImgDark
        },
        link: "https://www.facebook.com/dscmait"
      },
      {
        name: "twitter",
        icons: {
          light: SocialTwitterImg,
          dark: SocialTwitterImgDark
        },
        link: "https://twitter.com/dscmait"
      },
      {
        name: "instagram",
        icons: {
          light: SocialInstaImg,
          dark: SocialInstaImgDark
        },
        link: "https://www.instagram.com/dscmait"
      }
    ],
    // sponsorButton: {
    //   text: "Interested in sponsoring?"
    // }
  },
  hero: {
    firstLine: "",
    secondLine: "Hack The Solution.",
    keyWords: ["Innovate", "Design", "Built", "Challenge", "Learn"],
    subtitle: "Virtual Hackathon  ·  March 27 - 28, 2021  ·  DSC MAIT",
    devfolioText: "Apply With Devfolio",
    devfolioLink: "#",
    emailNotif: " has been added to our mailing list.",
    emailPlaceholder: "Enter your email address for updates",
    emailDupe: "This email is already on the mailing list!",
    emailError: "Error! Please try again."
  },
  discordSection: {
    heading: "Join Our Discord Server",
    desc: (
      <>
        <Text variant="sectionText">
          Don’t miss a single tinkle. Join our official discord server to stay up top of the latest announcements and sessions, participate in fun games and challenges,  and stay connected to fellow hackers.
        </Text>
      </>
    ),
    cta: {
      link: "#",
      label: "Go To Discord"
    },
  },
  sponsorsSection: {
    heading: "Sponsor a special weekend",
    desc: (
      <>
        <Text variant="sectionText">
          Our sponsors help us unite emerging developers, designers, and builders. They make it possible for hackers to build something they're proud of. Stay tuned as we confirm more sponsors for the event.
        </Text>
        <Text variant="sectionText" as="p">
          Interested in sponsoring? Email us at{" "}
          <Link href="mailto:hackthesolution@gmail.com">
            hackthesolution@gmail.com
          </Link>
        </Text>
      </>
    ),
    cta: {
      link: "mailto:hackthesolution@gmail.com",
      label: "Become a sponsor"
    },
    illustration: SponsorIllustrationImg,
    sponsors
  },
  about: {
    title: "Hack The Solution",
    sentence1:
      "Hack The Solution is a student-run virtual event consisting of a 36-hour hackathon with webinars and workshops by GDEs and professional experts and fun challenges.",
    sentence2:
      "It will bring student developers to compete and develop creative solutions to real-world problems based on United Nations’ Sustainable goals. The hackathon is designed to solve local community problems, spark innovation, attract and educate new talent in accordance with the 2021 Solution Challenge.",
    gears: [
      {
        name: "speakers",
        body: "Hackathon",
        images: [
          { id: "speaker1", url: SpeakerImg1 },
          { id: "speaker2", url: SpeakerImg2 },
          { id: "speaker3", url: SpeakerImg3 },
          { id: "speaker4", url: SpeakerImg4 }
        ],
        delay: 2000,
        gradient: { id: "speakerGradient", url: SpeakerGradient }
      },
      {
        name: "activities",
        body: "Workshops",
        images: [
          { id: "activity1", url: ActivityImg1 },
          { id: "activity2", url: ActivityImg2 },
          { id: "activity3", url: ActivityImg3 },
          { id: "activity4", url: ActivityImg4 }
        ],
        delay: 4000,
        gradient: { id: "activityGradient", url: ActivityGradient }
      },
      {
        name: "hackers",
        body: "Mentorship",
        images: [
          { id: "hacker1", url: HackerImg1 },
          { id: "hacker2", url: HackerImg2 },
          { id: "hacker3", url: HackerImg3 },
          { id: "hacker4", url: HackerImg4 }
        ],
        delay: 6000,
        gradient: { id: "hackerGradient", url: HackerGradient }
      },
      {
        name: "hardware",
        body: "Fun + prizes worth $5000+",
        images: [
          { id: "hardware1", url: HardwareImg1 },
          { id: "hardware2", url: HardwareImg2 },
          { id: "hardware3", url: HardwareImg3 },
          { id: "hardware4", url: HardwareImg4 }
        ],
        delay: 8000,
        gradient: { id: "hardwareGradient", url: HardwareGradient }
      }
    ],
    videoButton: {
      icon: PlayIconImg,
      text: "Watch #HackTheSolution video",
      background: RecapVidButtonBackgroundImg
    },
    engineering: {
      heading: "Hack The Solution | Google Solution challenge",
      illustration: HackTheSolution,
      text:
        "Held in association with the 2021 Google Solution challenge Hack the Solution is the first student-run hackathon by this chapter of DSC. We believe that remarkable developers, designers, and innovators can help us solve challenges to end poverty, ensure prosperity, and protect the planet. The diversity and talent of the participating developers will contribute greatly to the success of our event. We want to establish a tech ecosystem and provide a platform for students to present their ideas of the future."
    },
    video: {
      url:
        "https://www.youtube-nocookie.com/embed/P3VhS7jvXN8?autoplay=1&rel=0&amp;showinfo=0",
      closeIcon: CloseIconImg
    }
  },
  storiesSection: {
    heading: "All the themes you need to create something incredible.",
    desc:
      "The themes for Hack The Solution have been derived from United Nations 17 sustainable goals. They recognize that ending poverty and other deprivations must go hand-in-hand with strategies that improve health and education, reduce inequality, and spur economic growth – all while tackling climate change and working to preserve our oceans and forests.",
    stories: [
      {
        person: "Good Wealth And Well Being",
        desc: "",
        img: GoodHealthAndWellBeingImg,
        quote:
          "When I look around this room, I see quick learners, creative thinkers, and natural risk takers who are not only the leaders of tomorrow, but the leaders of today. You have the power to enact positive change right here right now."
      },
      {
        person: "Kory Jeffrey",
        desc: "",
        img: QualityEducationImg,
        quote:
          "Hack the North is North America’s premier hackathon. It brings together the best minds from around the world and takes care of all the logistics so that they can focus on learning and creating. Can’t wait to see what they do next year."
      },
      {
        person: "Kimber Schlegelmilch",
        desc: "Lyft",
        img: SustainableCitiesImg,
        quote:
          "Hack the North is one of the best hackathons I've experienced — the organizers are incredible, the projects produced at the end of the weekend are really impressive, and the energy of students and mentors remains insanely high throughout the event."
      },
      {
        person: "Alexis Ohanian",
        desc: "Co-founder of Reddit",
        img: DecentWorkImg,
        quote:
          "There is an undeniable reputation throughout tech of the kind of engineering talent that comes out of the University of Waterloo. The students here are probably going to be the business leaders of this century."
      },
      {
        person: "Alex",
        desc: "Hack the North 2017 Finalist",
        img: IndustryImg,
        link: "https://devpost.com/software/doppel-gallery",
        quote:
          "I collaborated with different people and had the chance to talk to many interesting people. I got a lot of perspective on the beginning to end of a software development project. My team was able to go from an idea to a working app that we could present to people. It was a really unique experience."
      },
      {
        person: "Bruno",
        desc: "Hack the North 2018 First-time Hacker",
        img: ReducedInequalitiesImg,
        link: "https://devpost.com/software/instaface",
        quote:
          "Hack the North was both my first international event and hackathon. I was quite nervous about leaving Brazil and going to the event but once there, everything was better than I could have ever imagined. I met so many cool and interesting people from all over the globe, made a lot of new friends and built something very cool on very little sleep with my team, overall an amazing experience!"
      },
      {
        person: "Jacky",
        desc: "Hack the North 2018 Experienced Hacker",
        img: JackyHackerHeadshotImg,
        link: "https://devpost.com/software/tappit-crypto-payments-over-nfc",
        quote:
          "Hack the North was – and still is – one of the best 36 hours I’ve ever had. Everything from the caffeine and stress-relief dogs to the amazing speakers, mentors, and organizers. It was amazing when you really needed to get a bite or take a break to walk around and see everyone’s amazing projects. Hack the North was a lot of ‘firsts’ and I hope it will be the same for many more in the future."
      },
      {
        person: "Kevin",
        desc: "Hack the North 2014 Finalist",
        img: KevinHackerHeadshotImg,
        link: "https://hackthenorth.devpost.com/submissions/27029-open-pokemon",
        quote:
          "Hack the North was a weekend where I could learn and start a passion for building great products. The experience was transformative and led me to where I am today. What really stood out to me was this sense of camaraderie between different hackers. I walked away from that weekend with so much more knowledge, and I made a lot of close, new friends."
      },
      {
        person: "Michelle",
        desc: "Hack the North 2015/2016 Finalist",
        img: MichelleHackerHeadshotImg,
        link: "https://devpost.com/software/modernized-weasley-clock-yotu43",
        quote:
          "Hack the North was my first (and second) hackathon, and the experience is still unforgettable! Everything Hack the North provided – inspiring speakers, mentors, workshops, food, coffee and free swag – contributed to an awesome supportive environment that made it really fun to hack away for those 36 hours."
      }
    ]
  },
  faq: {
    title: "Frequently asked questions",
    body: [
      {
        question: "Who can participate?",
        answer:
          "This event is targeted at university or college students, but any student is welcome to participate!"
      },
      {
        question: "How does the application process work?",
        answer:
          "To apply to participate in hack the solution, you need only go over to devfolio and register. We also recommend that you join our discord server to stay on top of all the latest announcements and fun mini-events."
      },
      {
        question: "Can we apply as a team?",
        answer:
          "Sure! The hackathon accepts teams with a minimum of 2 members. The maximum number of team members that you can have is 4."
      },
      {
        question: "How do I get to Hack the North?",
        answer:
          "We will be providing several buses from schools within driving distance of the University of Waterloo, as well as from nearby airports. For students who need to fly to Hack the North, we subsidize as much of your plane ticket as possible."
      },
      {
        question: "What if I don't have a team or an idea?",
        answer:
          "Not to worry, most people don’t! We’ll have team formation and ideation events geared towards helping you find people to work with. You can join our Discord Group to find potential teammates."
      },
      {
        question: "I don't want to hack, can I still get involved?",
        answer:
          "If you're looking to be a volunteer or mentor (i.e. someone with technical skills who'd be willing to help out participants during the weekend), you should reach out to us at hackthsolution@gmail.com. If your company is interested in becoming a sponsor, check out the sponsorship section above."
      },
      {
        question: "When will applications close?",
        answer:
          "The application portal will be closed on March 26th at 11:59 pm IST. We evaluate applications on a rolling basis."
      },
      {
        question:
          "How much does it cost?",
        answer:
          "Zero. Zip. Zilch. Nada. Nothing. Admission to HackTheSolution is completely free, thanks to our sponsors!"
      },
      {
        question: "What do I get after attending Hack The Solution?",
        answer:
          "Pretty much everything from socializing with fellow hacker community in the discord server to mentoring from Google Developer Experts. And yeah we’ll have prizes for winning teams worth $5000, and many other company sponsored prizes of $650 cash price. And prizes for all participants worth $210 up for grabs"
      },
      {
        question: "How does judging work?",
        answer:
          "A panel of talented professionals in tech will evaluate hacks based on creativity, technical difficulty, design, and usefulness. The top 3 overall projects will get to demo what they have built in front of the judges during our closing ceremonies."
      },
      {
        question: "404: Question Not Found",
        answer: (
          <>
            If your question is not listed here, please feel free to reach out
            to us at{" "}
            <Link href="mailto:hackthesolution@gmail.com ">
              hackthesolution@gmail.com
            </Link>{" "}.
          </>
        )
      }
    ]
  },
  footer: {
    img: DSCLogo,
    cta: "#hackthesolution • What will you create to be put in?",
    links: [
      {
        text: "About Hack the Solution",
        hyperlink: "#about",
        newTab: false
      },
      {
        text: "Code of Conduct",
        hyperlink: "what will you create to be put in",
        newTab: true
      }
    ],
    socials: [
      {
        name: "Email",
        img: SocialEmailImg,
        link: "mailto:hackthesolution@gmail.com "
      },
      {
        name: "Facebook",
        img: SocialFacebookImg,
        link: "https://www.facebook.com/hackthenorth"
      },
      {
        name: "Twitter",
        img: SocialTwitterImg,
        link: "https://twitter.com/hackthenorth"
      },
      {
        name: "Instagram",
        img: SocialInstaImg,
        link: "https://www.instagram.com/hackthenorth/"
      }
    ],
    team: shuffle(team),
    defaultOrganizerText: "Made with 💛"
  },
  leaders: {
    title: "Be inspired by industry leaders",
    desc: (
      <Text className="desc" variant="sectionText">
        Tech leaders come to Hack the North to be judges, to speak, and to be on
        the ground innovating with hackers. Stay tuned for updates on this
        year's speakers and judges.
      </Text>
    ),
    img: LightbulbBalloonCloudsIllustrationImg,
    leaders: [
      {
        name: "Cat Noone",
        title: "Founder, Iris",
        img: CatHeadshotImg
      },
      {
        name: "Chamath Palihapitiya",
        title: "CEO and Founder, Social Capital",
        img: ChamathHeadshotImg
      },
      {
        name: "Connie Yang",
        title: "Design Director, Coinbase",
        img: ConnieHeadshotImg
      },
      {
        name: "Dylan Field",
        title: "CEO and Co-founder, Figma",
        img: DylanHeadshotImg
      },
      {
        name: "Ethan Wilding",
        title: "Co-founder, Ledger Labs",
        img: EthanWildingHeadshotImg
      },
      {
        name: "Jeff Coleman",
        title: "Co-founder, Ledger Labs",
        img: JeffHeadshotImg
      },
      {
        name: "Jennifer Dewalt",
        title: "Founder, Zube",
        img: JenniferHeadshotImg
      },
      {
        name: "Tiffani Bell",
        title: "Founder, The Human Utility",
        img: TiffaniHeadshotImg
      },
      {
        name: "Tracy Chou",
        title: "Founding Advisor, Project Include",
        img: TracyHeadshotImg
      },
      {
        name: "Vinod Khosla",
        title: "Co-founder,  Sun Microsystems",
        img: VinodHeadshotImg
      }
    ]
  }
};
