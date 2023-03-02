import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

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
    fetchTransactions: (query?: string) => Promise<void>
}

export const TransactionsContext = createContext<TransactionContextType>({} as TransactionContextType);


interface TransactionProviderProps {
    children?: ReactNode;
}

export function TransactionsProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    async function fetchTransactions(query?: string) {
        const { data } = await api.get("/transactions", {
            params: {
                q: query
            }
        });

        setTransactions(data);
    }

    useEffect(() => {
        fetchTransactions();
    }, []);


    return (
        <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}