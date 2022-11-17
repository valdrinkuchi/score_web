export type TableDataType =
  | AggCategoryScore[]
  | TicketScore[]
  | OverallScore
  | string;

type AggCategoryScore = {
  categoryName: string;
  ratingCount: number;
  dates: DateScores[];
  score: number;
};

type TicketScore = {
  id: number;
  categoryScoresList: CategoryScore[];
};

type CategoryScore = {
  categoryName: string;
  score: number;
};

type DateScores = {
  date: string;
  score: number;
};

type OverallScore = number;
