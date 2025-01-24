export interface Destination {
    name: string;
    overview: string;
    thingsToDo: string[];
    bestSeason: string;
    famousLocalFood: string[];
    localCurrency: string;
    bestPlacesToVisit: string[];
    imageUrl: string;
    link: string;
    details: {
      nativeLanguage: string;
      visaRequired: string[];
      visaNotRequired: string[];
    };
  }
  