export interface LeaseAnalysis {
  id: string;
  createdAt: string;
  filename?: string;
  summary: string;
  financialTerms: FinancialTerm[];
  redFlags: RedFlag[];
  unclearClauses: UnclearClause[];
  questionsToAsk: string[];
  negotiationSuggestions: string[];
}

export interface FinancialTerm {
  label: string;
  value: string;
  note?: string;
}

export interface RedFlag {
  title: string;
  description: string;
  severity: "high" | "medium" | "low";
}

export interface UnclearClause {
  title: string;
  description: string;
}
