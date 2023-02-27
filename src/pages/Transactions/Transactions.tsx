import { Header } from "../../components/Header/Header";
import { Summary } from "../../components/Summary/Summary";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>
                                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
                            </td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>

                        <tr>
                            <td width="50%">Faculdade</td>
                            <td>
                                <PriceHighlight variant="outcome">- R$ 1.000,00</PriceHighlight>
                            </td>
                            <td>Educação</td>
                            <td>13/04/2022</td>
                        </tr>

                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>R$ 12.000,00</td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>

                        <tr>
                            <td width="50%">Desenvolvimento de site</td>
                            <td>R$ 12.000,00</td>
                            <td>Venda</td>
                            <td>13/04/2022</td>
                        </tr>

                    </tbody>
                </TransactionsTable>
            </TransactionsContainer>

        </div>
    );
}