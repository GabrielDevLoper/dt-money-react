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

interface CreateTransactionInputs {
    description: string,
    type: "income" | "outcome",
    category: string,
    price: number,
}

interface TransactionContextType {
    transactions: Transaction[];
    fetchTransactions: (query?: string) => Promise<void>;
    createTransaction: (data: CreateTransactionInputs) => Promise<void>
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

    async function createTransaction(data: CreateTransactionInputs) {

        const { category, description, price, type } = data;

        const response = await api.post("/transactions", {
            description,
            category,
            price,
            type,
            createdAt: new Date()
        });

        setTransactions(state => [response.data, ...state]);
    }

    useEffect(() => {
        fetchTransactions();
    }, []);


    return (
        <TransactionsContext.Provider value={{ transactions, fetchTransactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}