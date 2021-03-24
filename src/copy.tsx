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
  DSCMaitLogo,
  DSCUmitLogo,
  DSCIGDTUWLogo,
  DSCVSSUTLogo,
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
  LightbulbBalloonCloudsIllustrationImg,
  // Navbar
  LogoIconLightImg,
  LogoIconDarkImg,
  SocialLinkedInImg,
  SocialLinkedInImgDark,
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
  OpenInnovationImg,
ExploreMoreImg,
devfolioLogoImg,
maticLogoImg,
portisLogoImg,
tezosLogoImg,
echoarLogoImg,
glimpseLogoImg,
wolframLogoImg,
interviewLogoImg,
sashidoLogoImg,
balsamiqLogoImg,
replItLogoImg,
DeekshaMadanImg,
AshishPapanaiImg,
DeepikaRanaImg,
HarshitaChadhaImg,
SakshamAroraImg,
cbLogoImg,
gfgLogoImg,
UshaRengarejuImg,
HarithaNairImg,
AyonRoyImg,
KamalVaidImg,
ShivayLambaImg,
AqibAhmedImg,
ArshGoyalImg,
ShreyaPrasadImg,
AdityaOberoiImg,
HarshSinghImg,
AmbikaImg,
HarshBardhanMishraImg,
HarshitSinghImg,
SahilRahmanImg,
ParulAggarwalImg,
AlonGrinshpoonImg
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
    name: "DevFolio",
    tier: "silver",
    imgSrc: devfolioLogoImg,
    link: "https://devfolio.co"
  },

  {
    name: "Matic",
    tier: "bronze",
    imgSrc: maticLogoImg,
    link: "https://matic.network/"
  },
  {
    name: "Portis",
    tier: "bronze",
    imgSrc: portisLogoImg,
    link: "https://www.portis.io/"
  },
  {
    name: "Tezos",
    tier: "bronze",
    imgSrc: tezosLogoImg,
    link: "https://tezos.com/"
  },
  {
    name: "Echo AR",
    tier: "bronze",
    imgSrc: echoarLogoImg,
    link: "https://console.echoar.xyz/#/auth/register-hackathon?code=HackTheSolution"
  },
  {
    name: "Glimpse",
    tier: "bronze",
    imgSrc: glimpseLogoImg,
    link: "http://www.joinglimpse.com/"
  },
  {
    name: "WolFram",
    tier: "bronze",
    imgSrc: wolframLogoImg,
    link: "https://www.wolfram.com/wolfram-one/"
  },
  {
    name: "Interview Cake",
    tier: "bronze",
    imgSrc: interviewLogoImg,
    link: "https://interviewcake.com/"
  },
  {
    name: "SashiDo",
    tier: "bronze",
    imgSrc: sashidoLogoImg,
    link: "https://www.sashido.io/en/"
  },
  {
    name: "Balsamiq",
    tier: "bronze",
    imgSrc: balsamiqLogoImg,
    link: "https://balsamiq.com/",
    // feature: {
    //   text:
    //     "Hack the North is Canada's biggest hackathon, happening on September 13-15, 2019 at the University of Waterloo.",
    //   link: "https://hackthenorth.com",
    //   linkLabel: "Hack the North"
    // }
  },
  {
    name: "Repl.it",
    tier: "bronze",
    imgSrc: replItLogoImg,
    link: "https://repl.it/"
  },
  {
    name: "Geegs For Geeks",
    tier: "bronze",
    imgSrc: gfgLogoImg,
    link: "https://www.geeksforgeeks.org/"
  },
  {
    name: "Coding Blocks",
    tier: "bronze",
    imgSrc: cbLogoImg,
    link: "https://codingblocks.com/"
  },
  // {
  //   name: "Hack the North",
  //   tier: "bronze",
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
  //   tier: "bronze",
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
  //   tier: "silver",
  //   imgSrc: SponsorLogoImg,
  //   link: "https://hackthenorth.com"
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
    name: "DSC Mait",
    tier: "partner",
    imgSrc: DSCMaitLogo,
    link: "https://dscmait.xyz/"
  },
  {
    name: "DSC Umit",
    tier: "partner",
    imgSrc: DSCUmitLogo,
    link: "#"
  },
  {
    name: "DSC VSSUT",
    tier: "partner",
    imgSrc: DSCVSSUTLogo,
    link: "#"
  },
  {
    name: "DSC IGDTUW",
    tier: "partner",
    imgSrc: DSCIGDTUWLogo,
    link: "#"
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
    text: "Made with 🤯 by Deepika Rana, Lead Organiser",
    img: DeepikaRanaImg,
    alt: "Hack the Solution logo"
  },
  {
    text: "Made with 🍟 by Harshita Chadha, Co-organiser, Operations",
    img: HarshitaChadhaImg,
    alt: "Hack the Solution logo"
  },
  {
    text: "Made with ☕️ by Deeksha Madan, Co-organiser, Management",
    img: DeekshaMadanImg,
    alt: "Hack the Solution logo"
  },
  {
    text: "Made with 💫 by Ashish Papanai, Co-organiser, Marketing",
    img: AshishPapanaiImg,
    alt: "Hack the Solution logo"
  },
  {
    text: "Made with 🎮 by Saksham Arora, Co-organiser, Logistics",
    img: SakshamAroraImg,
    alt: "Hack the Solution logo"
  },
  
];

export default {
  nav: {
    logo: {
      light: LogoIconLightImg,
      dark: LogoIconDarkImg
    },
    sections: ["About", "Hackathon", "Sponsors", "FAQ", "DSC"],
    socialLinks: [
      {
        name: "linked in",
        icons: {
          light: SocialLinkedInImg,
          dark: SocialLinkedInImgDark
        },
        link: "https://www.linkedin.com/company/developer-students-club-mait/mycompany"
      },
      {
        name: "twitter",
        icons: {
          light: SocialTwitterImg,
          dark: SocialTwitterImgDark
        },
        link: "https://twitter.com/dsc_mait"
      },
      {
        name: "instagram",
        icons: {
          light: SocialInstaImg,
          dark: SocialInstaImgDark
        },
        link: "https://www.instagram.com/dsc_mait/"
      }
    ],
    // sponsorButton: {
    //   text: "Interested in sponsoring?"
    // }
  },
  hero: {
    firstLine: "",
    secondLine: "Hack The Solution.",
    keyWords: ["Innovate", "Design", "Build", "Challenge", "Learn"],
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
      link: "https://discord.gg/dXMVXUcdRG",
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
      "Hack The Solution is a student-run virtual event consisting of a 36-hour hackathon with mentorship from experts and fun challenges.",
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
          { id: "activity4", url: ActivityImg1 }
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
          { id: "hardware4", url: HardwareImg2 }
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
      url:"https://www.youtube-nocookie.com/embed/-p6sllZ7do8?autoplay=1&rel=0&amp;showinfo=0",
      closeIcon: CloseIconImg
    }
  },
  storiesSection: {
    heading: "All the themes you need to create something incredible.",
    desc:
      "The themes for Hack The Solution have been derived from United Nations 17 sustainable goals. They recognize that ending poverty and other deprivations must go hand-in-hand with strategies that improve health and education, reduce inequality, and spur economic growth – all while tackling climate change and working to preserve our oceans and forests.",
    stories: [
      {
        person: "Good Health And Well Being",
        desc: "",
        img: GoodHealthAndWellBeingImg,
        quote:
          "Good health and personal well-being are at the center of a healthy lifestyle. Under this theme, hackers will develop solutions to raise community awareness about the importance of good health, healthy lifestyles, as well as peoples’ rights to quality health care services -especially for the most vulnerable, such as women and children. "
      },
      {
        person: "Quality Education",
        desc: "",
        img: QualityEducationImg,
        quote:
          "Education is one of the most essential components of a person’s life. Not only does it help people rise above their economic struggles but it helps them learn cool concepts that they can use to further their goals and aspirations. Some of the challenges that can be tackled under this theme include accessibility of quality education, alternative learning platforms, EdTech applications and many more."
      },
      {
        person: "Sustainable Cities",
        desc: "",
        img: SustainableCitiesImg,
        quote:
          "Develop a vision for your building, street, and neighbourhood, and act on that vision. Are there enough jobs? Can your children walk to school safely? Can you walk with your family at night? How far is the nearest public transport? What’s the air quality like? What are your shared public spaces like? The better the conditions you create in your community, the greater the effect on quality of life."
      },
      {
        person: "Decent Work And Economic Growth",
        desc: "",
        img: DecentWorkImg,
        quote:
          "Providing youth with the best opportunity to transition to a decent job calls for investing in education and training of the highest possible quality, providing youth with skills that match labour market demands, giving them access to social protection and basic services regardless of their contract type, as well as levelling the playing field. Under this theme, hackers will work to bridge the gap between job aspirants and suitable opportunities."
      },
      {
        person: "Industry, Innovation, & Infrastructure",
        desc: "",
        img: IndustryImg,
        link: "https://devpost.com/software/doppel-gallery",
        quote:
          "Establish standards and promote regulations that ensure company projects and initiatives are sustainably managed. Collaborate with NGOs and the public sector to help promote sustainable growth within developing countries. Think about how industry impacts on your life and well-being and use social media to push for policymakers to prioritize the SDGs. These are just some of the problems that hacks made under this category will tackle."
      },
      {
        person: "Reduced Inequalities",
        desc: "",
        img: ReducedInequalitiesImg,
        link: "https://devpost.com/software/instaface",
        quote:
          "Greater efforts are needed to eradicate extreme poverty and hunger, and invest more in health, education, social protection, and decent jobs - especially for young people, migrants and refugees and other vulnerable communities. Within countries, it is important to empower and promote inclusive social and economic growth. We can ensure equal opportunity and reduce inequalities of income if we eliminate discriminatory laws, policies, and practices. Under this theme, we encourage you to build prgressive hacks that bring transformative change to reduce inequalities."
      },
      {
        person: "Climate Action",
        desc: "",
        img: ClimateActionImg,
        link: "https://devpost.com/software/tappit-crypto-payments-over-nfc",
        quote:
          "Weatherizing homes and powering them with renewable energy, investing in energy-efficient appliances, reducing water waste, eating the food you buy and making less of it meat, buying better bulbs, pulling the plugs, driving a full-efficient vehicle, rethinking planes, trains and automobiles, and shrinking your carbon profile, these are some of the pledges on which hacks under this theme can be based."
      },
      {
        person: "Open Innovation",
        desc: "",
        img: OpenInnovationImg,
        link: "https://hackthenorth.devpost.com/submissions/27029-open-pokemon",
        quote:
          "Conforming to standards is hard, we understand. Thus we have a special category for all you wild innovators out there. Under Open innovation, you get to submit your very own original hacks, theme no bar."
      },
      {
        person: "Explore More themes",
        desc: "",
        img: ExploreMoreImg,
        link: "https://devpost.com/software/modernized-weasley-clock-yotu43",
        quote:
          (<span>Take sustainable goals, make them 17. In 2015, the united nations came up with 17 holistic goals that help you grow alongside your planet and community. <a target="_blank" href="https://sdgs.un.org/goals">Click here</a> to explore and adopt a few more and make the world a better, more inclusive place!"</span>)
      },
      

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
    cta: "#hackthesolution | What will you create to be put in?",
    links: [
      {
        text: "About Hack the Solution",
        hyperlink: "#about",
        newTab: false
      },
      {
        text: "Code of Conduct",
        hyperlink: "https://devfolio.co/code-of-conduct",
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
        name: "Linked In",
        img: SocialLinkedInImg,
        link: "https://www.linkedin.com/company/developer-students-club-mait/mycompany"
      },
      {
        name: "Twitter",
        img: SocialTwitterImg,
        link: "https://twitter.com/dsc_mait"
      },
      {
        name: "Instagram",
        img: SocialInstaImg,
        link: "https://www.instagram.com/dsc_mait/"
      }
    ],
    team: shuffle(team),
    defaultOrganizerText: "Made with 💛 using hackthenorth.com"
  },
  leaders: {
    title: "Judges",
    
    img: LightbulbBalloonCloudsIllustrationImg,
    leaders: [
      {
        name: "Usha Rengareju",
        title: "Principal Data Scientist | 2x Kaggle Grandmaster",
        img: UshaRengarejuImg
      },
      {
        name: "Haritha Nair",
        title: "Software Engineer at Microsoft",
        img: HarithaNairImg
      },
      {
        name: "Shivay Lamba",
        title: "Lead Engineer @ DarkHorse | GSoC Mentor | GCI Mentor",
        img: ShivayLambaImg

      },
      {
        name: "Aqib Ahmed",
        title: "Tech Speaker | Sr Software Engineer at Colt Technologies",
        img: AqibAhmedImg
      },
      {
        name: "Kamal Vaid",
        title: "Technology Lead at Infosys | GDE For Google Assistant",
        img: KamalVaidImg
      },
      {
        name: "Alon Grinshpoon",
        title: "Founder & CEO at echoAR (Techstars '19)",
        img: AlonGrinshpoonImg
      },
     
    ]
  },
  mentors: {
    title: "Mentors",
    
    leaders: [
      {
        name: "Ayon Roy",
        title: "Speaker/Mentor/Judge @ 120+ AI, ML, Data Science Events",
        img: AyonRoyImg
      },
      {
        name: "Arsh Goyal",
        title: "SDE Intern at Samsung | SWE Intern ISRO",
        img: ArshGoyalImg
      },
      {
        name: "Shreya Prasad",
        title: "SWE Intern @Bank of New York Mellon | GSoC’21, GCI’19 Mentor @CircuitVerse",
        img: ShreyaPrasadImg
        
      },
      {
        name: "Aditya Oberoi",
        title: "Imagine Cup 2021 National Winner | MLH Coach | Gold Microsoft Learn Student Ambassador",
        img: AdityaOberoiImg
      },
      {
        name: "Harshit Sibgh",
        title: "SDE@Amazon India | AWS Ranchi | Judge@ NASASpaceApp Pune, DelhiHacks, HackTheMountain",
        img: HarshitSinghImg
      },
      
      {
        name: "Ambika",
        title: "Product Intern @Adobe | Former SDE Intern @LinkedIn",
        img: AmbikaImg
      },
      {
        name: "Harsh Bardhan Mishra",
        title: "Intern @ Red Hat | Developer Outreach @ DeepSource",
        img: HarshBardhanMishraImg
      },
      {
        name: "Harsh Singh",
        title: "Ex-DSC BVP Lead | Student Mentor at Google Code-in ",
        img: HarshSinghImg
      },

      {
        name: "Sahil Rahman",
        title: "Open Source Project Mentor at DevScript Winter of Code S01 & Script Winter of Code (SWoC 2021) ",
        img: SahilRahmanImg
      },
      {
        name: "Parul Aggarwal",
        title: "Application Developer @ThoughtWorks | Google #GHCI19, WTM APAC Scholar'18",
        img: ParulAggarwalImg
      },
      
      
     
    ]
  }
};
