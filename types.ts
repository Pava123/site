export interface ServiceCard {
  id: string;
  title: string;
  badge: string;
  priceText: string;
  durationText: string;
  description: string;
  bgGradient: string;
  imageUrl?: string;
  category: "practice" | "course_diploma" | "exams_tests" | "consulting";
}

export interface SpecialtyCard {
  id: string;
  title: string;
  iconName: string;
}

export interface VideoReview {
  id: string;
  studentName: string;
  universityName: string;
  specialty: string;
  videoPoster: string;
  videoDuration: string;
  reviewText: string;
}

export interface OrderFormInputs {
  name: string;
  phone: string;
  telegram?: string;
  specialty?: string;
  workType?: string;
  hasDiscount?: boolean;
}
