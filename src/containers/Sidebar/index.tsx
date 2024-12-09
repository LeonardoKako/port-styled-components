import { Avatar } from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => {
  // eslint-disable-next-line prettier/prettier
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Titulo fontSize={18}>Leonardo Fleith</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          leonardokako
        </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
          Engenheiro Front-end
        </Descricao>
        <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
