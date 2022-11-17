import { ScoresProtocol } from "../../../src/services/ScoresProtocol";
import { MockScoresClient } from "../../mocks/clientMocks";

describe("ScoresProtocol", () => {
  it("gets agg category scores", () => {
    const client = new MockScoresClient();
    const protocol = new ScoresProtocol(1668639254, 1668639254, client);
    expect(client.isCalled).toBe(false);
    protocol.getAggregatedCategoryScoresForPeriod();
    expect(client.isCalled).toBe(true);
  });

  it("gets ticket scores", () => {
    const client = new MockScoresClient();
    const protocol = new ScoresProtocol(1668639254, 1668639254, client);
    expect(client.isCalled).toBe(false);
    protocol.getTicketScoresForPeriod();
    expect(client.isCalled).toBe(true);
  });

  it("gets overall score", () => {
    const client = new MockScoresClient();
    const protocol = new ScoresProtocol(1668639254, 1668639254, client);
    expect(client.isCalled).toBe(false);
    protocol.getOverallScoreForPeriod();
    expect(client.isCalled).toBe(true);
  });
});
