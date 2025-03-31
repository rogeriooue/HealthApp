# HealthApp

Aplicativo React Native para cálculo de IMC.

## Descrição

HealthApp é um aplicativo desenvolvido em **React Native** para calcular o Índice de Massa Corporal (IMC). Ele permite que os usuários insiram sua altura e peso, calculem seu IMC e compartilhem os resultados.

---

## Funcionalidades

- **Cálculo do IMC**: Insira altura e peso para calcular o IMC.
- **Histórico de IMCs**: Visualize os resultados anteriores em uma lista.
- **Compartilhamento**: Compartilhe o resultado do IMC com outras pessoas.
- **Validação de Dados**: Verifica se os valores de altura e peso estão dentro de limites aceitáveis.

---

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

src/ ├── components/ │ ├── Form/ │ │ ├── index.js # Componente principal do formulário │ │ ├── style.js # Estilos do formulário │ │ ├── Resultimc/ │ │ │ ├── index.js # Componente para exibir o resultado do IMC │ │ │ ├── style.js # Estilos do resultado do IMC │ ├── Title/ │ ├── index.js # Componente para exibir o título do app │ ├── style.js # Estilos do título

---

## Componentes

### 1. **Form**

- Localização: `src/components/Form/`.
- Função: Permite ao usuário inserir altura e peso, calcular o IMC e exibir os resultados.
- Principais Estados:
  - `height`: Altura do usuário.
  - `weight`: Peso do usuário.
  - `imcList`: Histórico de IMCs calculados.
- Validações:
  - Altura deve estar entre 0 e 3 metros.
  - Peso deve estar entre 0 e 400 kg.

### 2. **Resultimc**

- Localização: `src/components/Form/Resultimc/`.
- Função: Exibe o resultado do IMC e permite compartilhá-lo.
- Propriedades:
  - `messageResultimc`: Mensagem exibida junto ao resultado.
  - `resultimc`: Valor do IMC calculado.

### 3. **Title**

- Localização: `src/components/Title/`.
- Função: Exibe o título do aplicativo.

---

## Estilos

Os estilos são definidos utilizando o `StyleSheet` do React Native e estão organizados em arquivos separados para cada componente.

---

## Dependências

As principais dependências do projeto são:

- **React**: Biblioteca para construção de interfaces.
- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- **Expo**: Plataforma para desenvolvimento e execução de aplicativos React Native.

## Como Executar o Projeto

### Instalar as dependências

npm install

### Iniciar o aplicativo

npm start
