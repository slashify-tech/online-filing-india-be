export interface ServiceCard {
    icon: string;
    title: string;
    content: string;
    slug: string;
    serviceContentId?: string; // MongoDB ObjectId reference
}

export interface HeroSection {
    heading: string;
    subtext: string;
    primaryCTAs: string[];
}

export interface WhyChooseSection {
    bestFor: string[];
    notSuitableFor: string[];
}

export interface Benefit {
    benefit: string;
    whyItMatters: string;
}

export interface Package {
    name: string;
    tagline?: string;
    includes: string[];
    cta?: string;
}

export interface TimelineStep {
    days: string;
    activity: string;
}

export interface ProcessStep {
    step: string;
}

export interface DocumentCategory {
    category: string;
    documents: string[];
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface ServiceContent {
    heroSection: HeroSection;
    whyChoose: WhyChooseSection;
    basicRequirements: string[];
    keyBenefits: Benefit[];
    whatYouWillGet: string[];
    smartSupport: {
        features: string[];
    };
    feesCalculator?: {
        inputs: string[];
        outputs: string[];
    };
    packages: Package[];
    packageComparison?: {
        features: string[];
        basic: boolean[];
        launch: boolean[];
        premium: boolean[];
    };
    timeline: {
        steps: TimelineStep[];
        totalTime: string;
    };
    stepByStepProcess: ProcessStep[];
    documentsRequired: DocumentCategory[];
    postIncorporationRoadmap?: {
        timeline: string;
        filing: string;
    }[];
    smartAddOns?: string[];
    commonMistakes: {
        mistakes: string[];
        howWeAvoid: string;
    };
    whyWeAreBetter: {
        feature: string;
        others: boolean;
        onlineFilingIndia: boolean;
    }[];
    testimonials?: string[];
    faqs: FAQ[];
    finalCTA: {
        heading?: string;
        ctas: string[];
    };
}

export interface SubService {
    slug: string;
    title: string;
    ServiceCard: ServiceCard[];
}

export interface SubServiceDocument extends SubService {
    _id?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ServiceContentDocument extends ServiceContent {
    _id?: string;
    slug: string; // References the ServiceCard slug
    createdAt?: Date;
    updatedAt?: Date;
}
