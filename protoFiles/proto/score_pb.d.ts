import * as jspb from 'google-protobuf'



export class Interval extends jspb.Message {
  getStartDate(): number;
  setStartDate(value: number): Interval;

  getEndDate(): number;
  setEndDate(value: number): Interval;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Interval.AsObject;
  static toObject(includeInstance: boolean, msg: Interval): Interval.AsObject;
  static serializeBinaryToWriter(message: Interval, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Interval;
  static deserializeBinaryFromReader(message: Interval, reader: jspb.BinaryReader): Interval;
}

export namespace Interval {
  export type AsObject = {
    startDate: number,
    endDate: number,
  }
}

export class AggregatedCategoryScoresResponse extends jspb.Message {
  getDataList(): Array<AggregatedCategoryScore>;
  setDataList(value: Array<AggregatedCategoryScore>): AggregatedCategoryScoresResponse;
  clearDataList(): AggregatedCategoryScoresResponse;
  addData(value?: AggregatedCategoryScore, index?: number): AggregatedCategoryScore;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AggregatedCategoryScoresResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AggregatedCategoryScoresResponse): AggregatedCategoryScoresResponse.AsObject;
  static serializeBinaryToWriter(message: AggregatedCategoryScoresResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AggregatedCategoryScoresResponse;
  static deserializeBinaryFromReader(message: AggregatedCategoryScoresResponse, reader: jspb.BinaryReader): AggregatedCategoryScoresResponse;
}

export namespace AggregatedCategoryScoresResponse {
  export type AsObject = {
    dataList: Array<AggregatedCategoryScore.AsObject>,
  }
}

export class AggregatedCategoryScore extends jspb.Message {
  getCategoryName(): string;
  setCategoryName(value: string): AggregatedCategoryScore;

  getRatingCount(): number;
  setRatingCount(value: number): AggregatedCategoryScore;

  getDatesList(): Array<DateScores>;
  setDatesList(value: Array<DateScores>): AggregatedCategoryScore;
  clearDatesList(): AggregatedCategoryScore;
  addDates(value?: DateScores, index?: number): DateScores;

  getScore(): number;
  setScore(value: number): AggregatedCategoryScore;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AggregatedCategoryScore.AsObject;
  static toObject(includeInstance: boolean, msg: AggregatedCategoryScore): AggregatedCategoryScore.AsObject;
  static serializeBinaryToWriter(message: AggregatedCategoryScore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AggregatedCategoryScore;
  static deserializeBinaryFromReader(message: AggregatedCategoryScore, reader: jspb.BinaryReader): AggregatedCategoryScore;
}

export namespace AggregatedCategoryScore {
  export type AsObject = {
    categoryName: string,
    ratingCount: number,
    datesList: Array<DateScores.AsObject>,
    score: number,
  }
}

export class TicketScoresResponse extends jspb.Message {
  getTicketScoresList(): Array<TicketScore>;
  setTicketScoresList(value: Array<TicketScore>): TicketScoresResponse;
  clearTicketScoresList(): TicketScoresResponse;
  addTicketScores(value?: TicketScore, index?: number): TicketScore;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketScoresResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TicketScoresResponse): TicketScoresResponse.AsObject;
  static serializeBinaryToWriter(message: TicketScoresResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketScoresResponse;
  static deserializeBinaryFromReader(message: TicketScoresResponse, reader: jspb.BinaryReader): TicketScoresResponse;
}

export namespace TicketScoresResponse {
  export type AsObject = {
    ticketScoresList: Array<TicketScore.AsObject>,
  }
}

export class TicketScore extends jspb.Message {
  getId(): number;
  setId(value: number): TicketScore;

  getCategoryScoresList(): Array<CategoryScore>;
  setCategoryScoresList(value: Array<CategoryScore>): TicketScore;
  clearCategoryScoresList(): TicketScore;
  addCategoryScores(value?: CategoryScore, index?: number): CategoryScore;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TicketScore.AsObject;
  static toObject(includeInstance: boolean, msg: TicketScore): TicketScore.AsObject;
  static serializeBinaryToWriter(message: TicketScore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TicketScore;
  static deserializeBinaryFromReader(message: TicketScore, reader: jspb.BinaryReader): TicketScore;
}

export namespace TicketScore {
  export type AsObject = {
    id: number,
    categoryScoresList: Array<CategoryScore.AsObject>,
  }
}

export class CategoryScore extends jspb.Message {
  getCategoryName(): string;
  setCategoryName(value: string): CategoryScore;

  getScore(): number;
  setScore(value: number): CategoryScore;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryScore.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryScore): CategoryScore.AsObject;
  static serializeBinaryToWriter(message: CategoryScore, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryScore;
  static deserializeBinaryFromReader(message: CategoryScore, reader: jspb.BinaryReader): CategoryScore;
}

export namespace CategoryScore {
  export type AsObject = {
    categoryName: string,
    score: number,
  }
}

export class OverallScoreResponse extends jspb.Message {
  getScore(): number;
  setScore(value: number): OverallScoreResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OverallScoreResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OverallScoreResponse): OverallScoreResponse.AsObject;
  static serializeBinaryToWriter(message: OverallScoreResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OverallScoreResponse;
  static deserializeBinaryFromReader(message: OverallScoreResponse, reader: jspb.BinaryReader): OverallScoreResponse;
}

export namespace OverallScoreResponse {
  export type AsObject = {
    score: number,
  }
}

export class DateScores extends jspb.Message {
  getDate(): string;
  setDate(value: string): DateScores;

  getScore(): number;
  setScore(value: number): DateScores;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DateScores.AsObject;
  static toObject(includeInstance: boolean, msg: DateScores): DateScores.AsObject;
  static serializeBinaryToWriter(message: DateScores, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DateScores;
  static deserializeBinaryFromReader(message: DateScores, reader: jspb.BinaryReader): DateScores;
}

export namespace DateScores {
  export type AsObject = {
    date: string,
    score: number,
  }
}

