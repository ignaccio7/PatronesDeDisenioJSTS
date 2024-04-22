// export interface Welcome {
//   title:             string;
//   description:       string;
//   types_of_patterns: string[];
//   patterns:          WelcomePattern[];
// }

export interface IPattern {
  name:     string;
  patterns: Pattern[];
}

export interface Pattern {
  name:        string;
  description: string;
  image:       string;
  docs:        Docs;
}

export interface Docs {
  js: string[];
  ts: string[];
}
