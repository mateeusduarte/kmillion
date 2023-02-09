import messages from '@/common/constants/messages';
import sessions from '@/common/constants/sessions';
import NumberCircle from './components/NumberCircle';
import { NumbersSessionContainer, NumbersContainer } from './styles';

export default function NumbersSession() {
  return (
    <NumbersSessionContainer id={sessions.numbers}>
      <>
        <NumbersContainer>
          <NumberCircle
            title={messages.discountNumberTitle}
            description={
              <>
                de reais aplicados em <mark>descontos</mark>
              </>
            }
            tilt="left"
          />
          <NumberCircle
            title={messages.shoppingCartsTitle}
            description={
              <>
                <mark>sacolas</mark> de compras <mark>processadas</mark>
              </>
            }
            tilt="left"
          />
          <NumberCircle
            title={messages.couponsDistributedTitle}
            description={
              <>
                <mark>cupons</mark> processados
              </>
            }
            tilt="left"
          />
        </NumbersContainer>
        <NumbersContainer>
          <NumberCircle
            title={messages.engagementTitle}
            description={
              <>
                crescimento no <mark>engajamento de clientes</mark>
              </>
            }
            tilt="right"
          />
          <NumberCircle
            title={messages.pdvsTitle}
            description={
              <>
                <mark>PDV&apos;s</mark> com motor instalado
              </>
            }
            tilt="right"
          />
          <NumberCircle
            title={messages.transactionsTitle}
            description={
              <>
                <mark>transações</mark> processadas
              </>
            }
            tilt="right"
          />
        </NumbersContainer>
        <NumbersContainer style={{ justifyContent: 'center' }}>
          <NumberCircle
            title={messages.clientsTitle}
            description={
              <>
                <mark>clientes</mark> atendidos
              </>
            }
            tilt="left"
          />
          <NumberCircle
            title={messages.salesChannelsTitle}
            description={
              <>
                <mark>canais de vendas</mark> diferentes
              </>
            }
            tilt="right"
          />
        </NumbersContainer>
      </>
    </NumbersSessionContainer>
  );
}
