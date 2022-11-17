import {
  Interval,
  AggregatedCategoryScoresResponse,
  TicketScoresResponse,
  OverallScoreResponse,
} from "protoFiles/proto/score_pb";

export interface ScoresProtocolClient {
  getAggregatedCategoryScoresForPeriod(
    request: Interval,
    metadata: null
  ): Promise<AggregatedCategoryScoresResponse>;
  getTicketScoresForPeriod(
    request: Interval,
    metadata: null
  ): Promise<TicketScoresResponse>;
  getOverallScoreForPeriod(
    request: Interval,
    metadata: null
  ): Promise<OverallScoreResponse>;
}
