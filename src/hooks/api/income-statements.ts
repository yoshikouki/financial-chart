import { useEffect, useState } from "react";

export const useIncomeStatements = (symbol: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [incomeStatementData, setIncomeStatementData] = useState<any[]>([]);

  useEffect(() => {
    void (async () => {
      const res = await fetch(
        `${window.location.origin}/api/income-statements/${symbol}`
      );
      const json = await res.json();
      setIncomeStatementData(json);
      setIsLoaded(true);
    })();
  }, [symbol]);
  return { incomeStatementData, isLoaded };
};
