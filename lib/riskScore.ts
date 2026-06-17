import { RedFlag, UnclearClause } from "./types";

export interface RiskScore {
  score: number;
  level: "Low" | "Medium" | "High";
}

const SEVERITY_PENALTY: Record<RedFlag["severity"], number> = {
  high: 18,
  medium: 9,
  low: 4,
};

const UNCLEAR_CLAUSE_PENALTY = 5;

export function computeRiskScore(redFlags: RedFlag[], unclearClauses: UnclearClause[]): RiskScore {
  const penalty =
    redFlags.reduce((sum, flag) => sum + SEVERITY_PENALTY[flag.severity], 0) +
    unclearClauses.length * UNCLEAR_CLAUSE_PENALTY;

  const score = Math.max(0, 100 - penalty);
  const level: RiskScore["level"] = score >= 80 ? "Low" : score >= 55 ? "Medium" : "High";

  return { score, level };
}
