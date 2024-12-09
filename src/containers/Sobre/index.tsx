import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => {
  return (
    <section>
      <Titulo fontSize={16}>Sobre mim</Titulo>
      <Paragrafo tipo="principal">
        Este projeto utiliza a API do GitHub e foi criado como uma forma de
        explorar algo diferente do meu habitual, mesmo já tendo um portfólio com
        trabalhos semelhantes. Com a API do GitHub, consegui exibir minha foto e
        algumas informações pessoais, em um projeto que, embora simples, me
        deixou bastante satisfeita. Fiquei especialmente contente com o
        resultado da implementação de troca de tema e outros detalhes. É sempre
        gratificante se desafiar e aprender algo novo!
      </Paragrafo>
      <GithubSecao>
        <img src="https://github-readme-stats.vercel.app/api?username=leonardokako&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=leonardokako&layout=compact&langs_count=7&theme=dracula" />
      </GithubSecao>
    </section>
  )
}

export default Sobre
