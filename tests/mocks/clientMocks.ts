import { ScoresProtocolClient } from "@/services/ScoresProtocolClient";
import {
  Interval,
  AggregatedCategoryScoresResponse,
  TicketScoresResponse,
  OverallScoreResponse,
} from "../../protoFiles/proto/score_pb";

export class MockScoresClient implements ScoresProtocolClient {
  public isCalled = false;
  getAggregatedCategoryScoresForPeriod(
    _request: Interval,
    _metadata: null
  ): Promise<AggregatedCategoryScoresResponse> {
    this.isCalled = true;
    const res = new AggregatedCategoryScoresResponse();
    res.setDataList([]);
    return new Promise<AggregatedCategoryScoresResponse>((resolve) => {
      resolve(res);
    });
  }
  getTicketScoresForPeriod(
    _request: Interval,
    _metadata: null
  ): Promise<TicketScoresResponse> {
    this.isCalled = true;
    const res = new TicketScoresResponse();
    res.setTicketScoresList([]);
    return new Promise<TicketScoresResponse>((resolve) => {
      resolve(res);
    });
  }
  getOverallScoreForPeriod(
    _request: Interval,
    _metadata: null
  ): Promise<OverallScoreResponse> {
    this.isCalled = true;
    const res = new OverallScoreResponse();
    res.setScore(36.5);
    return new Promise<OverallScoreResponse>((resolve) => {
      resolve(res);
    });
  }
}
