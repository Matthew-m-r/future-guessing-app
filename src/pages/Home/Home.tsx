import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import Header from '../../components/Header/Header';
import Card, { type CardData } from '../../components/Card/Card';

const SAMPLE_CARDS: CardData[] = [
  { id: '1', name: 'El Oráculo', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBF_dh4-Jmss2Wclbtq7Do5gVg9McscHF6TWOh4E9hAhAmyzfzL9ofgftWo8J7Bv8SLsYipZixkW9QfQp4fKTX6BazZ6LxuQuHgxfq8RPvAVS89tnL-Q9lQTVMcc_r4DVOlrpXJ1s7_ThCeJv6LhVwaBrW-ERwK3ZiZWUDPZMzt-NKQrQnjZatYDqa9mi68-M0kb6VD6XfPPQDgdK_w1HQHVRHsDbNIWjJX5jPVj-MKOIjIkP4g8DMLyORPFBvKa6yYB6o-jMZuto' },
  { id: '2', name: 'La Red', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzbnwjFSMB6nD98iCDcgkhtTmZlJCN_HW7CyZAH_jS1tdAgJQaC372fY6JAHuUAPMkQBiMHuNN1bwrL_swhnA4Abp3hCksht0XPn6yDdH--fT5ph1yfn71zechummigcuWDzkWZezRiz-QUqA7mz1iLjkyw-0pVt407Q-4vQZaJz8I8sKQvv-a2ss7gLzV6k7x7dKlY1mEwDL1jf9I9GTVCVZPYDA_kUBwV3YFZgDCXmUJxc8RvLUKkcTpg5uXRooeZ5N06pAAKpM' },
  { id: '3', name: 'El Nodo', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARPabTpSjxTxpjglMnwnAHo9M8UdvsXh0xGJsNPpt-Sitik60pi-CIjDftzgCrYKKXl1PicLXI5khJItPxiV3t1urbJOmAXbjlrfnP8mqNR18T9UgDkMt-lSbgZyrfiFWTS_jHxbzm88Yd4REAVY3oLP8J-pDFc3jnHv6nKCuFTtvIFAsqcLZNPgZxeTumnjp3vH5GjlUhCja48ZPYnyqnRzmyJ9p_iOP5dmg-HALSHfYGLlLyimZ1TU8ORbnrTn1ex5-_moD_SeI' },
  { id: '4', name: 'Caos', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXoJssWV9VJ943uvLv3pWesShU_1Dh-oTL4Ac8nW99pIeM1XaWR7nBkqafIErYictXvI51CpLvGVRARM5NIOi2HWtJol1gW4PpIOfMlntlCj0G0ZQoo9wP4xEegAHotmhRqvkqzIdlbLlhHJ7OzhuSUfdOOZD7-EsJh4TEMYL2glMglWu9P8_6cXAQenJ7SjHzTQPbc_guwMpbGT48TyxDLI2eDEK8Zb7rB3ph0rygomu9Qw6Pvutob9B4MCdkOdST8KQ7CLyiGek' },
  { id: '5', name: 'Visión', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSYsmzeCCRERVOTzru2Bb3TsNqLASB1QBJURRa8q8i1QgcOp8FFx43oyUn445hkIx6g8ozfC5aWUBzj2D51Ed_qx4jHWh0YT17ABg6dS7xxuDmadugyxescSGVN8Y2LVryHm4IP9A2bBGVnRU8qKcniVz7hDFJ_0iP5IPKecE_P8rNv-RIrkRJT3lJX0-Me0CJy2sD6XZp9y1vTMwUgIhcZB60QGQgUHITWLAPBX9QJ4m57rAlPlnkpyAzQA1O-vyzDfMDIPWsKYQ' },
  { id: '6', name: 'Espejo', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB8kmq52Ki88yG1TBQmklncOCFxH4OpL06XSonB132Ir5KLGjaH-P4p2HsG_2tV9YQq67Yeoo1ZYzANmMzq9xIWXyjfPBQQUa6E6J-7ocP5n7mkGJfTXSajX1ABRM8XfIjL3QcvarWtLjtPkGTT2GgjMqA5VzeTLeEk2tP92ufL1t4jQ5FTJ6QblQbicsmr1lNEL4JwL1abobU-9ZQK4j7BqUbqS3v72kf2HD4hd_2JMHRfUkiZZ1mQxl5hQfAB19ezuOCidAipgrI' },
  { id: '7', name: 'Humo', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmQtUAIQPBgCOXfwfTM45PAahmUWpESDnoPAm4dj7uRJi4YyznUnrd1KhUFGGlUOxyqXJLv7AMSoI4rNQRhGJ9EflLrPMsegI2s9jGxwzrLm9_2O-x-j_eUBkyCeSpjFF7L_dlYSqUPfbkyfGmAxTeNesoPNGvm740C8pRA_JHg4424kRQFsrjr8pqx2296HuHfrK-SKkeR2EY8lFg6WBRnHcx3byjuoZPfNhcZFa3tdUszmBxI9r449JGucH8FfPCBNz-HwOMjS4' },
  { id: '8', name: 'Horizonte', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDj3ev96eEAcTdzN0WNL4AqykkR4y8jmB6H-5pRRjEqFUrasrnGAvOGQCGEzWOOqsFq-vXxRSecVyrxKH3c43H-FU-jLAVE4Bdyrmzcow8QRGNqqCo8I_5J05P6Cv1W5lfKVabnXZnT3YgUPpUyKQiD9HZRibdiUsAkLz-yf8EhBjxFxWf8dvaxO42Y_mKDqLcKKqEODFo4L5wV0ST09IP88J5xZWuqTVZOGY_JgeoTBHbBW7PfWQAyhPzHKCm376z2McqX0R0G7js' },
  { id: '9', name: 'Vacío', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUz-9ZduZIbWn4d6LcXLwgZm8o5igCROLujgtYVHRvjZpO7XmwDWT5qiStJzV1cXafnoGT4IFcdoM5S8D8tdr4EjkxNqlbdOQO-6AE7HAqcHJWldduAFypcphWoP9RNQW1vUIQLU7AmJRfdKKW-OWRH-u-wzgK8_jGZ2_dP8bIZyB3X5vtbuJ30u9ETSSH1-8eo_blN8eF9CZRSWsnaVIA16jeMidVkpFgeVUOxRC1nw_K5KcAhv0u5f3jFmf-Oax1So8qgdcSnzE' },
];

const Home: React.FC = () => {
  const [selectedCards, setSelectedCards] = useState<CardData[]>([]);
  const targetCount = 7;

  const toggleCard = (card: CardData) => {
    if (selectedCards.find(c => c.id === card.id)) {
      setSelectedCards(selectedCards.filter(c => c.id !== card.id));
    } else if (selectedCards.length < targetCount) {
      setSelectedCards([...selectedCards, card]);
    }
  };

  const isComplete = selectedCards.length === targetCount;

  return (
    <Layout>
      <Header
        currentStep={2}
        totalSteps={3}
        title="ELIGE TUS 7 HILOS DEFINITIVOS"
        subtitle="La configuración final de tu destino"
      />

      <main className="flex-1 flex flex-col p-4 w-full max-w-md mx-auto relative pb-32">
        {/* Floating Counter & Progress */}
        <div className="bg-card-dim/50 border border-white/10 backdrop-blur-lg rounded-2xl p-4 mb-6 sticky top-36 z-40 shadow-xl">
          <div className="flex justify-between items-end mb-2">
            <span className="text-white text-sm font-medium uppercase tracking-widest text-white/80">Cartas Seleccionadas</span>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-primary">{selectedCards.length}</span>
              <span className="text-sm text-white/40">/</span>
              <span className="text-lg text-white/40">{targetCount}</span>
            </div>
          </div>
          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary/60 to-primary shadow-[0_0_10px_rgba(13,204,242,0.5)] transition-all duration-500"
              style={{ width: `${(selectedCards.length / targetCount) * 100}%` }}
            />
          </div>
        </div>

        {/* Selected Slots */}
        <div className="mb-8">
          <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-3 pl-1">Tu Configuración</h3>
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2 snap-x">
            {Array.from({ length: targetCount }).map((_, i) => {
              const card = selectedCards[i];
              return card ? (
                <div
                  key={card.id}
                  className="shrink-0 w-16 h-24 rounded-lg bg-cover bg-center border border-mystic-gold shadow-gold-glow relative overflow-hidden"
                  style={{ backgroundImage: `url(${card.image})` }}
                >
                  <div className="absolute inset-0 bg-mystic-gold/10"></div>
                </div>
              ) : (
                <div
                  key={i}
                  className={`shrink-0 w-16 h-24 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center ${i === selectedCards.length ? 'animate-pulse-slow' : ''}`}
                >
                  <span className="material-symbols-outlined text-white/20 text-xl">
                    {i === selectedCards.length ? 'lock_open' : 'lock'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Card Pool Grid */}
        <div>
          <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-3 pl-1">
            Cartas Reveladas ({SAMPLE_CARDS.length})
          </h3>
          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {SAMPLE_CARDS.map(card => (
              <Card
                key={card.id}
                card={card}
                isSelected={!!selectedCards.find(c => c.id === card.id)}
                onSelect={toggleCard}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Footer / Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background-dark via-background-dark/90 to-transparent z-50">
        <div className="w-full max-w-md mx-auto">
          {!isComplete ? (
            <button
              className="w-full h-14 rounded-xl bg-card-dim border border-white/10 text-white/40 font-bold uppercase tracking-widest text-sm flex items-center justify-center gap-3 cursor-not-allowed transition-all duration-300"
              disabled
            >
              <span className="material-symbols-outlined text-lg">lock</span>
              Faltan {targetCount - selectedCards.length} cartas
            </button>
          ) : (
            <button className="w-full h-14 rounded-xl bg-primary shadow-[0_0_20px_rgba(13,204,242,0.4)] text-background-dark font-bold uppercase tracking-widest text-lg flex items-center justify-center gap-2 hover:bg-primary/90 transition-all transform hover:scale-[1.02]">
              <span className="material-symbols-outlined">auto_awesome</span>
              Confirmar Destino
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
