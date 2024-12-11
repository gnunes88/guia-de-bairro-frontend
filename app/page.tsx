'use client';

import { Header } from '@/components/neighborhood/Header';
import { Navigation } from '@/components/neighborhood/Navigation';
import { Navbar } from '@/components/layout/navbar';
import { NearbyNeighborhoods } from '@/components/neighborhood/nearby';
import { Breadcrumb } from '@/components/ui/breadcrumb';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="relative">
        <Breadcrumb />
        <Header />
      </div>
      <Navigation />
      <div className="container mx-auto px-4">
        <section id="sobre" className="py-16">
          <h2 className="text-3xl font-bold mb-6">
            Moema: O encontro da zona sul de São Paulo
          </h2>
          <p className="text-gray-600 mb-8">
            Moema é um daqueles bairros de São Paulo que parecem ter de tudo um
            pouco. Localizado na zona sul, é famoso por sua mistura única de ruas
            tranquilas, muitas árvores, uma vida cultural agitada e uma incrível
            variedade de restaurantes e lojas. Se você já caminhou por suas ruas,
            é fácil entender por que Moema é tão querido pelos paulistanos.
          </p>
          <div className="w-full h-[400px] relative rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14625.904600408721!2d-46.667287!3d-23.601739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a0c6c43fed3%3A0x2b9c7c6e01c7c6e!2sMoema%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1sen!2sbr!4v1680000000000!5m2!1sen!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        <section id="historia" className="py-16">
          <h2 className="text-3xl font-bold mb-6">
            Um pouco da história de Moema
          </h2>
          <p className="text-gray-600">
            A história de Moema começou com chácaras e fazendas. Em meados do
            século XX, os imigrantes italianos e alemães ajudaram a dar vida à
            região, que até então era um pouco afastada do centro da cidade. O
            bairro foi inicialmente chamado de "Indianópolis", e até hoje suas
            ruas mantêm nomes que homenageiam as culturas indígenas, como
            Nhambiquaras e Maracatins.
          </p>
          <p className="text-gray-600 mt-4">
            Moema só ganhou o nome atual em 1987, inspirado na personagem indígena
            do poema "I-Juca Pirama", de Gonçalves Dias. A mudança refletiu o
            crescimento e o desenvolvimento do bairro, que começou a se consolidar
            como uma área residencial e valorizada. Hoje, Moema é sinônimo de
            conforto, tranquilidade e praticidade para quem mora ou visita.
          </p>
        </section>

        <section id="lazer" className="py-16">
          <h2 className="text-3xl font-bold mb-6">Lazer</h2>
          <p className="text-gray-600">
            Moema é um prato cheio para o lazer. O Parque Ibirapuera, a poucos
            passos do bairro, oferece grandes áreas verdes para atividades ao ar
            livre, com trilhas para caminhadas, espaços para piqueniques e pistas
            de bicicleta. Dentro do parque, o visitante encontra também museus
            como o Museu de Arte Moderna (MAM) e o Museu Afro Brasil, que
            apresentam exposições para todos os gostos.
          </p>
          <p className="text-gray-600 mt-4">
            As feiras de rua também fazem parte do cotidiano do bairro. A Feira de
            Moema, que acontece aos domingos, é conhecida pelos pastéis frescos,
            frutas e artesanatos locais. É uma excelente opção para quem quer
            encontrar os amigos, fazer compras ou apenas experimentar um pouco do
            clima do bairro.
          </p>
        </section>

        <section id="gastronomia" className="py-16">
          <h2 className="text-3xl font-bold mb-6">Gastronomia</h2>
          <p className="text-gray-600">
            A diversidade gastronômica de Moema é um dos seus grandes atrativos. O
            bairro oferece desde restaurantes sofisticados até locais mais simples
            e tradicionais, garantindo opções para todos os gostos. Restaurantes
            como o Josephine e o La Grassa são referências de qualidade, servindo
            pratos da cozinha mediterrânea e italiana em ambientes acolhedores.
          </p>
          <p className="text-gray-600 mt-4">
            Se a preferência é por comida japonesa, há opções renomadas como o
            Kinoshita e o Sassá Sushi, que são elogiados pelo frescor e qualidade
            de seus sushis. Para quem busca um café da manhã completo, a Padaria
            Bienal e a Padoca Real oferecem pães artesanais e brunch aos finais
            de semana. Já os amantes de sorvetes podem contar com as gelaterias
            Bacio di Latte e Stuppendo.
          </p>
          <p className="text-gray-600 mt-4">
            Para uma noite descontraída, Moema tem vários bares e cafés que são
            pontos de encontro para relaxar e aproveitar a noite. Muitos
            estabelecimentos ao redor do bairro são conhecidos por criar um
            ambiente acolhedor, onde os clientes podem desfrutar de momentos
            agradáveis com amigos e familiares.
          </p>
        </section>

        <section id="acessibilidade" className="py-16">
          <h2 className="text-3xl font-bold mb-6">
            Acessibilidade e mobilidade
          </h2>
          <p className="text-gray-600">
            Moema é um bairro com fácil acesso ao restante de São Paulo, graças à
            Linha 5-Lilás do metrô, com as estações Moema e Eucaliptos. Essa
            linha conecta o bairro a outras áreas estratégicas, como a Vila
            Mariana e a Avenida Paulista, facilitando o dia a dia de quem precisa
            se deslocar pela cidade.
          </p>
          <p className="text-gray-600 mt-4">
            A mobilidade é outro ponto forte: Moema conta com várias linhas de
            ônibus que circulam pela Avenida Ibirapuera e principais vias,
            facilitando o acesso a diferentes regiões. E para quem prefere andar
            de bicicleta, o bairro possui ciclovias que promovem uma opção de
            transporte sustentável, ideal para curtas distâncias.
          </p>
        </section>

        <section id="seguranca" className="py-16">
          <h2 className="text-3xl font-bold mb-6">
            Segurança e qualidade de vida
          </h2>
          <p className="text-gray-600">
            Moema é um dos bairros mais seguros de São Paulo, com monitoramento
            frequente e um bom sistema de vigilância em áreas públicas e
            residenciais. Esse aspecto é valorizado pelos moradores, que encontram
            aqui um espaço onde é possível viver com mais tranquilidade.
          </p>
          <p className="text-gray-600 mt-4">
            A infraestrutura de saúde também é bem desenvolvida. O bairro conta
            com hospitais como o Hospital Alvorada e o Hospital São Luiz, que são
            referências na cidade. Essa proximidade com serviços médicos é um
            benefício importante para os moradores, que têm fácil acesso a
            clínicas e hospitais de qualidade.
          </p>
        </section>

        <section id="infraestrutura" className="py-16">
          <h2 className="text-3xl font-bold mb-6">Infraestrutura</h2>
          <p className="text-gray-600">
            Moema é um bairro completo, que reúne charme, qualidade de vida e
            tudo o que se precisa para viver bem. Seja para quem já mora em São
            Paulo ou para quem deseja conhecer um dos bairros mais agradáveis da
            cidade, Moema é uma escolha certeira. Com uma ótima infraestrutura,
            áreas verdes, opções de lazer e uma rica cena gastronômica, é um
            lugar que oferece o melhor de São Paulo em um só bairro.
          </p>
          <p className="text-gray-600 mt-4">
            Além disso, Moema se destaca pela qualidade de suas escolas, que
            atendem desde a educação infantil até o ensino médio, oferecendo
            ensino de excelência. Com colégios tradicionais e bilíngues, o bairro
            é uma referência em educação, sendo uma escolha ideal para famílias
            que buscam investir no futuro dos filhos.
          </p>
        </section>

        <section id="bairros-proximos" className="py-16">
          <h2 className="text-3xl font-bold mb-6">Bairros próximos</h2>
          <p className="text-gray-600 mb-8">
            Explore também os bairros vizinhos a Moema e descubra ainda mais
            opções de lazer, cultura e serviços. Cada região ao redor oferece sua
            própria identidade e charme, com atrações que complementam o que Moema
            já tem de melhor.
          </p>
          <NearbyNeighborhoods />
        </section>
      </div>
    </main>
  );
}