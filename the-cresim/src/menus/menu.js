import { useQuestion } from "../../src/services/question/use-question.js";
import { theCresimsLogo, theCresimsLogoby } from "./logo.js";
import { clearBash } from "../utils/comuns.js";
import { setPersonagem, getPersonagem, getTodosPersonagens, deletarPersonagem, mostrarPersonagens, getPersonagemdead, atualizarPersonagens, validarEnergiaEHigiene, verificarCheat } from "../../src/services/crud/personagem.js";
import { menuHabilidades } from "./menuHabilidades.js";

export const startMenu = async () => {

  let mensagemAtencao = ``;
  let startMenu = true;

  const menucriarPersonagem = "\x1b[36m⭐ Criar Personagem\x1b[0m";
  const menuescolherPersonagem = "\x1b[32m👤 Escolher Personagem\x1b[0m";
  const menulistarPersonagens = "\x1b[33m📋 Listar Personagens\x1b[0m";
  const menudeletarPersonagem = "\x1b[34m🗑️  Deletar Personagem\x1b[0m";
  const menuvisitarCemiterio = "\x1b[35m🌟 Visitar Cemitério dos Personagens\x1b[0m";
  const menufinalizarJogo = "\x1b[31m❌ Finalizar jogo\x1b[0m";

  while (startMenu == true) {

    clearBash()

    const input = await useQuestion(`

        Bem Vindo

        ${await theCresimsLogo()}
        ${await theCresimsLogoby()}
                                                                                          
        Escolha uma das opções: ${mensagemAtencao}

        1. ${menucriarPersonagem}

        2. ${menuescolherPersonagem}

        3. ${menulistarPersonagens}

        4. ${menudeletarPersonagem}

        5. ${menuvisitarCemiterio}

        X. ${menufinalizarJogo}

        Sua escolha: `
    );

    switch (input.toUpperCase()) {

      case "1":

        const nome =  await useQuestion("Nome do personagem?");
        const aspiracao = await menuHabilidades("Aspiração do personagem:");

        return setPersonagem(nome, null);

      case "2":
       
        clearBash()

        mostrarPersonagens().forEach(mensagem => console.log(mensagem));
        
        const escolha = await useQuestion('SUA ESCOLHA:');

        return getPersonagem(escolha);

      case "3":

        clearBash()
         
        getTodosPersonagens().forEach(mensagem => console.log(mensagem));

        await useQuestion(`
          Pressione ENTER para continuar...`);

        break;

      case "4":

        clearBash()

        getTodosPersonagens().forEach(mensagem => console.log(mensagem));

        const escolhaDelete =  await useQuestion(`Escolha o id do personagem que deseja deletar: `);
        
        if (escolhaDelete.toUpperCase() != "X")
          deletarPersonagem(escolhaDelete);

        break;

      case "5":

        clearBash()
        
        getTodosPersonagens(false).forEach(mensagem => console.log(mensagem));
        
        const escolhaPersonagemMorto = await useQuestion('SUA ESCOLHA:');

        return getPersonagemdead(escolhaPersonagemMorto);

      case "X":

        console.log("\nFoi Ótimo ter você aqui!! \nAte a proxima!!");

        return "exit";

      default:

        clearBash();

        mensagemAtencao = `Escolha uma opção válida`;

    }
  }
};
