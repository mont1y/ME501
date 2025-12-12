export interface SlideProps {
  onNext: () => void;
  onPrev: () => void;
  isLast?: boolean;
  isFirst?: boolean;
}

export enum SlideIndex {
  WELCOME = 0,
  FOUNDATIONS = 1,
  PILLARS = 2,
  DIALOGUE = 3,
  UNDERSTANDING = 4,
  CONCLUSION = 5
}