import styles from './App.css';
import Promo from "./components/Promo/Promo.jsx";
import Header from './components/header/Header.jsx';
import Hero from './components/hero/Hero.jsx';
import Hero1 from './components/hero/Hero.jsx';

import Botao from './components/botao/Botao.jsx';

import Topic from './components/topic/Topic.jsx';


import foto1 from './assets/Hero.png'
import foto from './assets/fotojblgrande.png'
import foto2 from './assets/fotoCardRacao.png';

import CardCarrossel from './components/cardCarrossel/CardCarrossel.jsx';
import CardProdutoCarrossel from './components/cardProdutoCarrossel/CardProdutoCarrossel.jsx';
import CardProdutoCarrossel2 from './components/cardProdutoCarrossel2/CardProdutoCarrossel2.jsx';
import CardProdutoInlineCarrossel from './components/cardProdutoInlineCarrossel/CardProdutoInlineCarrossel.jsx';
import CardSelectorCarrossel from './components/cardSelectCarrossel/CardSelectCarrossel.jsx';

import CardServices from './components/cardServices/CardServices.jsx';
import CardServiceCarrossel from './components/cardServiceCarrossel/CardServiceCarrossel.jsx';


import FotoPs5 from './components/fotops5/FotoPs5.jsx';

function App() {
  return (
    <>
      <Promo />
      <Header />
      <Hero hero={foto1}/>
      <Topic titulo="Today's" titulo2="Flash Sales"/>
      <CardProdutoCarrossel/>
      <br />
      <Botao conteudo="View All Products"/>
      <br />
      <Topic titulo="Categories" titulo2="Browse By Category"/>
       <CardCarrossel/>
      <Topic titulo="This Month" titulo2="Best Se  lling Products"/>
      <CardProdutoCarrossel2/>
      <br />
      <Hero1 hero={foto}/>
      <Topic titulo="Our Products" titulo2="Explore Our Products"/>
      <CardProdutoInlineCarrossel/>
      <CardSelectorCarrossel/>
      <Botao conteudo="View All Products"/>
      <Topic titulo="Featured" titulo2="New Arrival"/>
      <FotoPs5/>
      <CardServiceCarrossel/>
    </>
  );
}

export default App;
