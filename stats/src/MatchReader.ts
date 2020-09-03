import { CsvFileReader } from "./CsvFileReader";
import { MatchResults } from "./MatchResults";
import { dateStringToDate } from "./utils";
import { MatchData } from "./MatchData";

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[4]),
      parseInt(row[4]),
      row[5] as MatchResults,
      row[6],
    ];
  }
}
