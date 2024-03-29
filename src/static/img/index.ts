/**
 * Export all images as modules so that webpack can deal with them appropriately
 * and in one file so that we have a centralized reference to all the images.
 * This means we only have to change one path and not all files that are using
 * that image if we change the src of the image.
 */

/* Sponsor assets (logos, branding, etc) */
export { default as WaterlooEngLogoImg } from "./sponsors/waterloo-eng.png";
export { default as SponsorLogoImg } from "./sponsors/sponsor.png";
export {default as devfolioLogoImg} from "./sponsors/Devfolio_Logo-Colored@2x.png";
export {default as maticLogoImg} from "./sponsors/Matic_Logo-Blue@2x.png";
export {default as portisLogoImg} from "./sponsors/Portis_Logo-Colored_Black@2x.png";
export {default as tezosLogoImg} from "./sponsors/Tezos_Logo-Colored@2x.png";
export {default as echoarLogoImg} from "./sponsors/echoAR - Logo 2020 - Dark.png";
export {default as glimpseLogoImg} from "./sponsors/glimpse_logo_w_text.png";
export {default as wolframLogoImg} from "./sponsors/wolfram.png";
export {default as interviewLogoImg} from "./sponsors/cake_logo_blue_gray.svg";
export {default as sashidoLogoImg} from "./sponsors/sashido-logo-for sites.png";
export {default as balsamiqLogoImg} from "./sponsors/balsamiq-logo-screen.png";
export {default as replItLogoImg} from "./sponsors/repl_it.png";
export { default as DSCMaitLogo } from "./logos/dsc_mait.png";
export { default as DSCUmitLogo } from "./logos/DSC_UMIT.png";
export {default as codeFlowLogo} from "./logos/codeflow_logo.jpg";
export {default as giveMyCertificateLogo} from "./logos/give_my_certificate.png";


export { default as DSCVSSUTLogo } from "./logos/DSC_VSSUT.png";
export { default as DSCIGDTUWLogo } from "./logos/DSC_IGDTUW.png";

export {default as gfgLogoImg} from "./logos/gfg.png";
export {default as cbLogoImg} from "./logos/cb_grey.png";

/* Logos */
export { default as LogoDarkImg } from "./logos/primary-dark.svg";
export { default as LogoLightImg } from "./logos/primary-light.svg";
export { default as LogoAltDarkImg } from "./logos/alternative-dark.svg";
export { default as LogoAltLightImg } from "./logos/alternative-light.svg";
export { default as LogoIconDarkImg } from "./logos/icon-dark.svg"; // just the gear
export { default as LogoIconLightImg } from "./logos/icon-light.svg"; // just the gear

/* Social icons */
export { default as SocialLinkedInImg } from "./icons/linkedin-icon.svg";
export { default as SocialLinkedInImgDark } from "./icons/linkedin-dark.svg";
export { default as SocialEmailImg } from "./icons/mail.svg";
export { default as SocialInstaImg } from "./icons/camera.svg";
export { default as SocialInstaImgDark } from "./icons/camera-dark.svg";
export { default as SocialTwitterImg } from "./icons/bird.svg";
export { default as SocialTwitterImgDark } from "./icons/bird-dark.svg";

/* Functional icons */
export { default as PlayIconImg } from "./icons/play-icon.svg";
export { default as ChevronIconImg } from "./icons/chevron-icon.svg";
export { default as CloseIconImg } from "./icons/close-icon.svg";

/* Illustrations */
export { default as Cloud1IllustrationImg } from "./illustrations/cloud1.png";
export { default as Cloud2IllustrationImg } from "./illustrations/cloud2.png";
export { default as Cloud3IllustrationImg } from "./illustrations/cloud3.png";
export {
  default as EngineeringIllustrationImg
} from "./illustrations/engineering.png";
export { default as SponsorIllustrationImg } from "./illustrations/sponsor_illustration.png";
export {
  default as RealGooseIllustrationImg
} from "./illustrations/real goose.png";
export {
  default as Robogoose1IllustrationImg
} from "./illustrations/Robogoose 1.png";
export {
  default as Robogoose2IllustrationImg
} from "./illustrations/Robogoose 2.png";
export {
  default as Robogoose3IllustrationImg
} from "./illustrations/Robogoose 3.png";
export {
  default as Robogoose4IllustrationImg
} from "./illustrations/robogoose4.png";
export {
  default as GooseMeetsGooseIllustrationImg
} from "./illustrations/goose meets goose.png";
export {
  default as LightbulbBalloonIllustrationImg
} from "./illustrations/lightbulb balloon.png";
export {
  default as LightbulbBalloonCloudsIllustrationImg
} from "./illustrations/lightbulb-balloon-2.png";
export {
  default as BackgroundHeroImg
} from "./hero/illustration-background.png";
export { default as Middle1HeroImg } from "./hero/illustration-middle-1.png";
export { default as Middle3HeroImg } from "./hero/illustration-middle-3.png";
export {
  default as ForegroundHeroImg
} from "./hero/illustration-foreground.png";

export {default as HeroBg} from "./hero/light-bg.gif";
/* Headshots (leaders, htn team, etc) */
export { default as AlexHackerHeadshotImg } from "./headshots/alex-hacker.jpg";
export {
  default as BrunoHackerHeadshotImg
} from "./headshots/bruno-hacker.jpg";
export {
  default as JackyHackerHeadshotImg
} from "./headshots/jacky-hacker.jpg";
export {
  default as KevinHackerHeadshotImg
} from "./headshots/kevin-hacker.jpg";
export {
  default as MichelleHackerHeadshotImg
} from "./headshots/michelle-hacker.jpg";
export { default as TrudeauHeadshotImg } from "./headshots/justin_trudeau.jpg";
export { default as KoryHeadshotImg } from "./headshots/kory_jeffrey.jpg";
export { default as AlexisHeadshotImg } from "./headshots/alexis_ohanian.jpg";
export {
  default as KimberHeadshotImg
} from "./headshots/kimber_schlegelmilch.jpg";
export { default as MichalHeadshotImg } from "./headshots/michal.jpg";
export { default as OrganizerHeadshotImg } from "./headshots/organizer.png";

/* Photos */
export {
  default as RecapVidButtonBackgroundImg
} from "./photos/recap-video-button.png";
export { default as GearBackgroundImg } from "./photos/gear.svg";

/* Activities */
export { default as ActivityGradient } from "./photos/activity.jpg";
export { default as ActivityImg1 } from "./photos/activity1.png";
export { default as ActivityImg2 } from "./photos/activity2.png";
export { default as ActivityImg3 } from "./photos/activity3.png";
export { default as ActivityImg4 } from "./photos/activity4.png";

/* Hackers */
export { default as HackerGradient } from "./photos/hackers.jpg";
export { default as HackerImg1 } from "./photos/hackers1.png";
export { default as HackerImg2 } from "./photos/hackers2.png";
export { default as HackerImg3 } from "./photos/hackers3.png";
export { default as HackerImg4 } from "./photos/hackers4.png";

/* Hardware */
export { default as HardwareGradient } from "./photos/hardware.jpg";
export { default as HardwareImg1 } from "./photos/hardware1.png";
export { default as HardwareImg2 } from "./photos/hardware2.png";
export { default as HardwareImg3 } from "./photos/hardware3.png";
export { default as HardwareImg4 } from "./photos/hardware4.png";

/* Speaker */
export { default as SpeakerGradient } from "./photos/speaker.jpg";
export { default as SpeakerImg1 } from "./photos/speaker1.png";
export { default as SpeakerImg2 } from "./photos/speaker2.png";
export { default as SpeakerImg3 } from "./photos/speaker3.png";
export { default as SpeakerImg4 } from "./photos/speaker4.png";

/* Judges */
export { default as UshaRengarejuImg } from "./leaders/usha_rengareju.jpeg";
export { default as HarithaNairImg } from "./leaders/haritha_nair.jpeg";
export { default as ShivayLambaImg } from "./leaders/shivay_lamba.jpeg";
export {default as AqibAhmedImg} from "./leaders/aqib_ahmed.jpeg";
export {default as KamalVaidImg} from "./leaders/kamal_vaid.jpeg";
export {default as AlonGrinshpoonImg} from "./leaders/alon_grinshpoon.png";

/* mentor */
export {default as AyonRoyImg} from "./leaders/ayon_roy.jpeg";
export {default as ArshGoyalImg} from "./leaders/arsh_goyal.jpeg";
export {default as ShreyaPrasadImg} from "./leaders/shreya_prasad.jpeg";
export {default as AdityaOberoiImg} from "./leaders/aditya_oberoi.jpeg";
export {default as HarshitSinghImg} from "./leaders/harshit_singh.jpeg";
export {default as AmbikaImg} from "./leaders/ambika.jpeg";
export {default as HarshBardhanMishraImg} from "./leaders/harsh_bardhan_mishra.jpeg";
export {default as HarshSinghImg} from "./leaders/harsh_singh.jpeg";
export {default as SahilRahmanImg} from "./leaders/sahil_rahman.jpeg";
export {default as ParulAggarwalImg} from "./leaders/parul_aggarwal.jpeg";

/* Themes */
export {default as GoodHealthAndWellBeingImg} from "./photos/good_health.png";
export {default as ClimateActionImg} from "./photos/climate_action.png";
export {default as DecentWorkImg} from "./photos/decent_work.png";
export {default as IndustryImg} from "./photos/industry.png";
export {default as QualityEducationImg} from "./photos/quality_education.png";
export {default as ReducedInequalitiesImg} from "./photos/reduced_inequalities.png";
export {default as SustainableCitiesImg} from "./photos/sustainable_cities.png";
export {default as OpenInnovationImg} from "./photos/open_innovation.jpeg";
export {default as ExploreMoreImg} from "./photos/Explore_more_goals.jpeg";




/* Logos */
export {default as HackTheSolution} from "./logos/main_logo_sm.png";
export {default as DSCLogo} from "./logos/dsc_white.png";


/* Organizers */
export {default as DeekshaMadanImg} from "./photos/DeekshaMadan.jpeg";
export {default as AshishPapanaiImg} from "./photos/AshishPapanai.jpg";
export {default as DeepikaRanaImg} from "./photos/DeepikaRana.png";
export {default as HarshitaChadhaImg} from "./photos/HarshitaChadha.jpg";
export {default as SakshamAroraImg} from "./photos/SakshamArora.jpg";


