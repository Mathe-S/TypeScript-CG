import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const reader = new MatchReader("football.csv");
const summary = Summary.winAnalysisHtmlReport("Man United");
reader.read();
summary.buildAndReport(reader.data);
