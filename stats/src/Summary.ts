import { MatchData } from "./MatchData";
import { WinsAnalyzer } from "./analyzers/WinsAnalyzer";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winAnalysisHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalyzer(team), new HtmlReport());
  }
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
