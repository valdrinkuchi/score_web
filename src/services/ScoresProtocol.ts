import { ScoresProtocolClient } from "./ScoresProtocolClient";
import { ScoresClient } from "../../protoFiles/proto/ScoreServiceClientPb";
import { Interval } from "../../protoFiles/proto/score_pb";

export class ScoresProtocol {
  private HOST = "http://localhost:8080/"; // the address where envoy proxy is running
  private client: ScoresProtocolClient;
  private interval: Interval;

  constructor(
    startDate: number,
    endDate: number,
    client?: ScoresProtocolClient
  ) {
    if (client == null) {
      this.client = new ScoresClient(`${this.HOST}`);
    } else {
      this.client = client;
    }
    this.interval = new Interval();
    this.interval.setStartDate(startDate);
    this.interval.setEndDate(endDate);
  }
  getAggregatedCategoryScoresForPeriod() {
    return (async () => {
      const response = await this.client.getAggregatedCategoryScoresForPeriod(
        this.interval,
        null
      );
      return response;
    })();
  }

  getTicketScoresForPeriod() {
    return (async () => {
      const response = await this.client.getTicketScoresForPeriod(
        this.interval,
        null
      );
      return response;
    })();
  }

  getOverallScoreForPeriod() {
    return (async () => {
      const response = await this.client.getOverallScoreForPeriod(
        this.interval,
        null
      );
      return response;
    })();
  }
}
