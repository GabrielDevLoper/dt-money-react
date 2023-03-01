import { createContext, ReactNode, useEffect, useState } from "react";

interface Transaction {
    id: number,
    description: string,
    type: "income" | "outcome",
    category: string,
    price: number,
    createdAt: string
}

interface TransactionContextType {
    transactions: Transaction[];
}

export const TransactionsContext = createContext<TransactionContextType>({} as TransactionContextType);


interface TransactionProviderProps {
    children?: ReactNode;
}

export function TransactionsProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    async function loadingTransactions() {
        const response = await fetch("http://localhost:3000/transactions")
        const data = await response.json();

        setTransactions(data);
    }

    useEffect(() => {
        loadingTransactions();
    }, []);


    return (
        <TransactionsContext.Provider value={{ transactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}