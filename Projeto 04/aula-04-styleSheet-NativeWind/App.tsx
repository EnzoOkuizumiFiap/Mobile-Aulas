// ============================================================
// App.tsx — Ponto de entrada do aplicativo
// ============================================================
// Este arquivo é o primeiro a rodar quando o app abre.
// Ele decide qual tela (screen) mostrar na tela principal.
// ============================================================

import React from 'react';

// ScrollView permite rolar a tela quando o conteúdo é grande
// SafeAreaView evita que o conteúdo fique atrás do notch/câmera
import { ScrollView } from 'react-native';

// Importamos cada seção como um componente separado
// Assim cada arquivo fica focado em UMA coisa só
import { CartaoPerfil } from './src/components/CartaoPerfil';
import { BarraNavegacao } from './src/components/BarraNavegacao';
import { CartaoProduto } from './src/components/CartaoProduto';
import { BotaoAcao } from './src/components/BotaoAcao';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    // SafeAreaView: respeita o espaço do notch e barra de status
    <SafeAreaProvider>
      <SafeAreaView>

        {/* ScrollView: deixa a tela ser rolável */}
        <ScrollView>

          {/* ── SEÇÃO 1: Barra de Navegação ─────────────────────
            Demonstra: flexDirection row, justifyContent space-between
        */}
          <BarraNavegacao />

          {/* ── SEÇÃO 2: Cartão de Perfil ───────────────────────
            Demonstra: borderRadius, sombra, flex row, gap
        */}
          <CartaoPerfil />

          {/* ── SEÇÃO 3: Cartão de Produto ──────────────────────
            Demonstra: position absolute (badge), width 100%
        */}
          <CartaoProduto />

          {/* ── SEÇÃO 4: Botão de Ação ──────────────────────────
            Demonstra: alignItems center, borderRadius, cores
        */}
          <BotaoAcao />

        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
