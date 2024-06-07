const chutes = [
    ['abób', 'arro', 'azei', 'açúc'],
    ['bala', 'bana', 'bata', 'bife'],
    ['bisc', 'boli', 'bolo', 'cald'],
    ['carn', 'casq', 'cebo', 'choc'],
    ['chá'],
    ['chá de boldo'],
    ['chá de camomila'], 
    ['chá de hortelã'],
    ['chá gelado'],
    ['chá mate'],
    ['chá preto'],
    ['chá verde'],
    ['coca', 'cora', 'couv', 'crem'],
    ['doce', 'feij', 'filé', 'fran'],
    ['frut', 'gela', 'leit', 'maca'],
    ['maçã', 'molh', 'mous', 'ovo'],
    ['ovo'],
    ['ovo de codorna'],
    ['ovo de páscoa'],
    ['past', 'peit'],
    ['peti', 'pime', 'pipo', 'pudi'],
    ['pão'],
    ['pão de alho'],
    ['pão de batata'], 
    ['pão de forma'],
    ['pão de ló'], 
    ['pão de mel'], 
    ['pão de queijo'],
    ['pão australiano'],
    ['pão doce'],
    ['pão francês'],
    ['pão integral'],
    ['pão sírio'],
    ['pé de moleque'],
    ['quei', 'repo', 'Sal'], 
    ['sal grosso'],
    ['sala', 'sopa', 'sorv', 'suco'],
    ['toma', 'tort'],
    ['uva'],
    ['uva passa'],
    ['Vinh', 'Água', 'óleo']
];

const resp = [ 
    ['abacate', 'abacaxi', 'abiu', 'abobrinha'],
    ['abricó', 'abóbora', 'abóbora jacarezinho', 'acarajé'],
    ['acelga', 'acerola', 'achocolatado', 'adoçante'],
    ['agrião', 'aguardente', 'aipim', 'aipo'],
    ['alcachofra', 'alcaparra', 'alecrim', 'alface'],
    ['alfajor', 'algodão doce', 'alho', 'alho-poró'],
    ['almeirão', 'almôndega', 'alpiste', 'amaranto'],
    ['ambrosia', 'ameixa', 'amendoim', 'amido de milho'],
    ['amora', 'amêndoa', 'angu', 'araçá'],
    ['arroz', 'arroz doce', 'arroz integral', 'arroz tropeiro'],
    ['asa de frango', 'aspargo', 'atemoia', 'aveia'],
    ['avelã', 'azeite', 'azeite de dendê', 'azeitona'],
    ['azeitona preta', 'açafrão', 'açaí', 'açúcar'],
    ['açúcar mascavo', 'baba de moça', 'bacalhau', 'bacon'],
    ['bacuri', 'baguete', 'bala', 'bala de coco'],
    ['bala de goma', 'banana', 'banana split', 'banana vermelha'],
    ['banana-da-terra', 'banana-maçã', 'banana-nanica', 'banana-prata'],
    ['bananada', 'barra de cereais', 'batata', 'batata baroa'],
    ['batata frita', 'batata palha', 'batata-doce', 'batida'],
    ['baunilha', 'bauru', 'beijinho', 'beirute'],
    ['bengala doce', 'berinjela', 'bertalha', 'beterraba'],
    ['bife', 'bife à milanesa', 'bife à parmegiana', 'biscoito'],
    ['biscoito da sorte', 'bisteca', 'bobó de camarão', 'bolinho de arroz'],
    ['bolinho de bacalhau', 'bolinho de chuva', 'bolo', 'bolo de abacaxi'],
    ['bolo de aipim', 'bolo de aniversário', 'bolo de brigadeiro', 'bolo de banana'],
    ['bolo de café', 'bolo de cenoura', 'bolo de chocolate', 'bolo de coco'],
    ['bolo de fubá', 'bolo de kiwi', 'bolo de laranja', 'bolo de leite'],
    ['bolo de limão', 'bolo de maracujá', 'bolo de morango', 'bolo de sorvete'],
    ['bolo formigueiro', 'bolo mármore', 'bombom', 'brevidade'],
    ['brigadeiro', 'brioche', 'broa', 'broto de feijão'],
    ['brócolis', 'burritos', 'cabelo de anjo', 'cacau'],
    ['cachaça', 'cachorro quente', 'café', 'café com leite'],
    ['caipirinha', 'cajamanga', 'caju', 'cajuzinho'],
    ['cajá', 'calabresa', 'caldo de cana', 'caldo de carne'],
    ['caldo de galinha', 'caldo de mocotó', 'caldo verde', 'caldo-de-feijão'],
    ['camarão empanado', 'Cambucá', 'camu-camu', 'cana-de-açúcar'],
    ['canapé', 'canela', 'canelone', 'canja de galinha'],
    ['canjica', 'capelete', 'capim santo', 'cappuccino'],
    ['caqui', 'carambola', 'caramelo', 'carne'],
    ['carne de sol', 'carne moída', 'caruru', 'casadinho'],
    ['casquinha', 'casquinha de siri', 'castanha', 'caviar'],
    ['cebola', 'cebola empanada', 'cebola rocai', 'cebola roxa'],
    ['cebolinha', 'cenoura', 'cereal', 'cereja'],
    ['cerveja', 'champanhe', 'champignon', 'chantilly'],
    ['cheddar', 'cheesecake', 'cheiro verde'],
    ['chester', 'chiclete', 'chicória', 'chimarrão'],
    ['chimichurri', 'chocolate', 'chocolate amargo', 'chocolate branco'],
    ['chocolate granulado', 'chocolate quente', 'chocotone', 'chope'],
    ['chuchu', 'chucrute', 'churrasco', 'churros'],
    ['chá', 'chá de boldo', 'chá de camomila', 'chá de hortelã'],
    ['chá gelado', 'chá mate', 'chá preto', 'chá verde'],
    ['clara', 'cocada', 'cocada preta', 'coco'],
    ['coco ralado', 'coentro', 'cogumelo', 'colorau'],
    ['cominho', 'conhaque', 'contra filé', 'cookies'],
    ['coração de frango', 'coração de galinha', 'costela', 'couve'],
    ['couve-de-bruxelas', 'couve-flor', 'coxa de frango', 'coxinha'],
    ['cozido', 'cravo', 'creme de abóbora', 'creme de avelã'],
    ['creme de leite', 'creme de milho', 'crepe', 'croissant'],
    ['croquete', 'cupcake', 'cupuaçu', 'curau'],
    ['curry', 'cuscuz', 'damasco', 'dobradinha'],
    ['doce de abacaxi', 'doce de abóbora', 'doce de banana', 'doce de caju'],
    ['doce de coco', 'doce de figo', 'doce de jaca', 'doce de kiwi'],
    ['doce de leite', 'doce de mamão', 'doce de manga', 'doce de morango'],
    ['doce de pêssego', 'empada', 'empadão', 'endívia'],
    ['energético', 'erva-doce', 'ervilha', 'escargot'],
    ['escarola', 'esfirra', 'espaguete', 'espetinho'],
    ['espinafre', 'farinha', 'farofa', 'feijoada'],
    ['feijão', 'feijão azuki', 'feijão branco', 'feijão fradinho'],
    ['feijão manteiga', 'feijão preto', 'fermento', 'figo'],
    ['filé', 'filé mignon', 'flan', 'fogazza'],
    ['fondue', 'framboesa', 'frango', 'frango empanado'],
    ['frango à passarinho', 'frango à parmegiana', 'frango-xadrez', 'fruta-do-conde'],
    ['fruta-pão', 'fubá', 'funghi', 'gabiroba'],
    ['ganache', 'gelatina', 'gelatina de morango', 'geleia'],
    ['gema', 'gengibre', 'gergelim', 'glacê'],
    ['goiaba', 'goiabada', 'gorgonzola', 'granola'],
    ['graviola', 'groselha', 'grumixama', 'grão de bico'],
    ['guacamole', 'guandu', 'guaraná', 'hambúrguer'],
    ['hortelã', 'ingá', 'inhame'],
    ['iogurte', 'jabuticaba', 'jaca', 'jambo'],
    ['jamelão', 'jataí', 'jatobá', 'jenipapo'],
    ['jerimum', 'jiló', 'jujuba', 'kafta'],
    ['ketchup', 'kiwi', 'laranja', 'lasanha'],
    ['leite', 'leite condensado', 'leite de coco', 'leite de soja'],
    ['leite em pó', 'lentilha', 'lichia', 'licor'],
    ['lima', 'limonada', 'limão', 'linguiça'],
    ['linhaça', 'lombo', 'louro', 'macadâmia'],
    ['macarronada', 'macarrão', 'macarrão instantâneo', 'macarrão de arroz'],
    ['maionese', 'maisena', 'malagueta', 'mamão'],
    ['mandioca', 'mandioquinha', 'mangaba', 'mangostão'],
    ['manjar', 'manjericão', 'manteiga', 'maracujá'],
    ['margarina', 'maria mole', 'marisco', 'marmelada'],
    ['marmelo', 'marshmallow', 'maxixe', 'maçã'],
    ['maçã do amor', 'maçã verde', 'mel', 'melancia'],
    ['melão', 'menta', 'merengue'],
    ['milho', 'milkshake', 'mingau', 'mirtilo'],
    ['misto quente', 'molho agridoce', 'molho barbecue', 'molho branco'],
    ['molho de pimenta', 'molho de tomate', 'molho inglês', 'molho madeira'],
    ['molho rosé', 'molho shoyu', 'molho tártaro', 'morango'],
    ['mortadela', 'mostarda', 'mousse', 'mousse de chocolate'],
    ['mousse de limão', 'mousse de maracujá', 'mousse de morango', 'muffin'],
    ['muqueca', 'murici', 'muçarela', 'músculo'],
    ['nabo', 'nachos', 'nectarina', 'nhoque'],
    ['noz-moscada', 'nozes', 'nuggets', 'nêspera'],
    ['olho de sogra', 'omelete', 'orobô', 'orégano'],
    ['ovo', 'ovo de codorna', 'ovo de páscoa', 'palha italiana'],
    ['palmito', 'pamonha', 'panetone', 'panqueca'],
    ['papo de anjo', 'parmesão', 'pasta de amendoim', 'pastel'],
    ['pastel de Belém', 'pastilha', 'patê', 'pavê'],
    ['paçoca', 'peito de frango', 'peito de peru', 'pepino'],
    ['pepperoni', 'pequi', 'pera', 'pernil'],
    ['petit gateau', 'petit suisse', 'picanha', 'picles'],
    ['picolé', 'pimenta', 'pimenta do reino', 'pimentão'],
    ['pinha', 'pinhão', 'pipoca', 'pipoca doce'],
    ['pirulito', 'pirão', 'pistache', 'pitanga'],
    ['pitaya', 'pitomba', 'pizza', 'polenta'],
    ['polvilho', 'presunto', 'profiteroles', 'provolone'],
    ['pudim', 'pudim de pão', 'purê', 'pão'],
    ['pão australiano', 'pão de alho', 'pão de batata', 'pão de forma'],
    ['pão de ló', 'pão de mel', 'pão de queijo', 'pão doce'],
    ['pão francês', 'pão integral', 'pão sírio', 'pé de galinha'],
    ['pé de moleque', 'pêssego', 'queijadinha', 'queijo'],
    ['queijo ralado', 'quentão', 'quiabo', 'quibe'],
    ['quindim', 'quinoa', 'rabada', 'rabanada'],
    ['rabanete', 'rapadura', 'ravioli', 'ração'],
    ['refrigerante', 'repolho', 'repolho roxo', 'requeijão'],
    ['ricota', 'risoles', 'risoto', 'rocambole'],
    ['rolinho primavera', 'romã', 'rondele', 'rosbife'],
    ['rosquinha', 'rum', 'rúcula', 'sagu'],
    ['sal', 'sal grosso', 'salada', 'salada de frutas'],
    ['salame', 'salgadinho', 'salpicão', 'salsa'],
    ['salsicha', 'salsão', 'sanduíche', 'sapoti'],
    ['saquê', 'sarapatel', 'sashimi', 'sequilho'],
    ['sidra', 'siriguela', 'soja', 'sonho'],
    ['sopa', 'sopa de legumes', 'sorvete', 'sorvete napolitano'],
    ['strogonoff', 'sushi', 'suco', 'suco de abacaxi'],
    ['suco de acerola', 'suco de goiaba', 'suco de graviola', 'suco de laranja'],
    ['suco de limão', 'suco de maracujá', 'suco de maçã', 'suco de morango'],
    ['suco de pitanga', 'suco de uva', 'suflê', 'sundae'],
    ['suspiro', 'tacacá', 'taco', 'talharim'],
    ['tamarindo', 'tangerina', 'tapioca', 'temaki'],
    ['tequila', 'tiramisu', 'tofu', 'tomate'],
    ['tomate cereja', 'tomate seco', 'tomilho', 'toranja'],
    ['torrada', 'torresmo', 'torrone', 'torta'],
    ['torta de maçã', 'torta alemã', 'torta de limão', 'torta de maracujá'],
    ['torta de pêssego', 'tortilha', 'trigo', 'trufa'],
    ['tucupi', 'tâmara', 'umbu', 'urucum'],
    ['uva', 'uva passa', 'uísque', 'vagem'],
    ['vatapá', 'vinagre', 'vinagrete', 'vinho'],
    ['vinho branco', 'vitamina', 'vodca', 'waffles'],
    ['wasabi', 'yakisoba', 'água', 'água com gás'],
    ['água de coco', 'óleo']
];

let tryhardando = false;
let sair = false;
let respostasEnviadas = new Set();
let indiceAtual = 0;

function Delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function LimparPertos() {
    const respostas = document.getElementById('respostas');
    const pertos = respostas.querySelectorAll('.perto');
    pertos.forEach(perto => perto.remove());
}

function LimparDicas() {
    const respostas = document.getElementById('respostas');
    const dicas = respostas.querySelectorAll('.dica');
    dicas.forEach(dica => dica.remove());
}

function LimparAcertos() {
    const respostas = document.getElementById('respostas');
    const acertos = respostas.querySelectorAll('.acertou');
    acertos.forEach(acerto => acerto.remove());
}

function ContemAcertos() {
    const respostas = document.getElementById('respostas');
    const acertos = respostas.querySelectorAll('.acertou');
    for (let acerto of acertos) {
        const conteudo = acerto.innerHTML;
        if (conteudo.match(/Você acertou/gi)) {
            return true;
        }
    }
    return false;
}

// function LimparRespostasPendentes() {
//     const respostas = document.getElementById('respostas');
//     const respPendentes = respostas.querySelectorAll('.enviando');
//     respPendentes.forEach(respPen => respPen.remove());
// }

async function Chutar() {
    const form = document.querySelector('#formResposta');
    const input = form.querySelector('input');

    if (!input) {
        console.error("Elemento de entrada não encontrado.");
        return;
    }

    for (let subChute of chutes) {
        const respostas = document.getElementById('respostas');
        const pertos = respostas.querySelectorAll('.perto');
        const dicas = respostas.querySelectorAll('.dica');
        // const ListaRespPendentes = respostas.querySelectorAll('.enviando');

        const chute = subChute.join(' ');

        // for (let ListaRespPendente of ListaRespPendentes) {
        //     const respPendente = ListaRespPendente.textContent;

        //     if (respPendente.includes(':')) {
        //         const partes = respPendente.split(':');

        //         if (partes.length > 1) {
        //             const resp = partes[1].trim().split(' ');

        //             for (let res of resp) {
        //                 const respostas = document.getElementById('respostas');
        //                 const pertos = respostas.querySelectorAll('.perto');
        //                 const dica = respostas.querySelector('.dica');
        //                 const acertos = respostas.querySelectorAll('.acertou');

        //                 const re = res.trim();

        //                 if (respostasEnviadas.has(re)) {
        //                     console.log("Resposta já enviada:", re);
        //                     continue;
        //                 }

        //                 if (pertos.length > 0) {
        //                     console.log("Elemento '.perto' encontrado.");
        //                     ChutarPerto();
        //                     return;
        //                 }

        //                 if (dica) {
        //                     console.log("Elemento '.dica' encontrado.");
        //                     Dica();
        //                     return;
        //                 }

        //                 if (acertos.length > 0) {
        //                     const ultimoAcerto = acertos[acertos.length - 1];
        //                     const conteudo = ultimoAcerto.innerHTML;

        //                     if (conteudo.match(/Você acertou/gi)) {
        //                         LimparAcertos();
        //                         return;
        //                     }
        //                 }

        //                 if (sair) {
        //                     return;
        //                 }

        //                 input.value = re;
        //                 respostasEnviadas.add(re);

        //                 await new Promise(resolve => {
        //                     form.addEventListener('submit', () => {
        //                         resolve();
        //                     }, { once: true });
        //                     form.requestSubmit();
        //                 });

        //                 await delay(90);
        //             }
        //         }
        //     }
        // }

        if (respostasEnviadas.has(chute)) {
            console.log("Resposta já enviada:", chute);
            continue;
        }

        if (pertos.length > 0) {
            console.log("Elemento '.perto' encontrado.");
            ChutarPerto();
            return;
        }

        if (dicas.length > 0) {
            console.log("Elemento '.dica' encontrado.");
            Dica();
            return;
        }

        if (ContemAcertos()) {
            LimparPertos();
            LimparDicas();
            LimparAcertos();
            return;
        }

        if (sair) {
            return;
        }

        input.value = chute;
        respostasEnviadas.add(chute);

        console.log(chute);

        await new Promise(resolve => {
            form.addEventListener('submit', () => {
                resolve();
            }, { once: true });
            form.requestSubmit();
        });

        await Delay(180);
    }
}

async function ChutarPerto() {
    let listaPerto = [];

    const respostas = document.getElementById('respostas');
    const pertos = respostas.querySelectorAll('.perto');

    if (!pertos) {
        console.log("Elemento '.perto' não encontrado.");
        return;
    }

    if (pertos.length > 0) {
        const ultimoPerto = pertos[pertos.length - 1];
        const strong = ultimoPerto.querySelector('strong');
        listaPerto = strong.textContent.split(' ');

        console.log(listaPerto);

        const form = document.querySelector('#formResposta');
        const input = form.querySelector('input');

        if (!input) {
            console.error("Elemento de entrada não encontrado.");
            return;
        }

        if (listaPerto.length > 3) {
            for (let perto of listaPerto) {
                // const pertos = respostas.querySelectorAll('.perto');
                // const ListaRespPendentes = respostas.querySelectorAll('.enviando');

                // for (let ListaRespPendente of ListaRespPendentes) {
                //     const respPendente = ListaRespPendente.textContent;

                //     if (respPendente.includes(':')) {
                //         const partes = respPendente.split(':');
        
                //         if (partes.length > 1) {
                //             const resp = partes[1].trim().split(' ');

                //             for (let res of resp) {
                //                 const pertos = respostas.querySelectorAll('.perto');

                //                 const re = res.trim();

                //                 if (respostasEnviadas.has(re)) {
                //                     console.log("Resposta já enviada:", re);
                //                     continue;
                //                 }

                //                 if (acertos.length > 0) {
                //                     const ultimoAcerto = acertos[acertos.length - 1];
                //                     const conteudo = ultimoAcerto.innerHTML;
                    
                //                     if (conteudo.match(/Você acertou/gi)) {
                //                         LimparPertos();
                //                         LimparAcertos()
                //                         return;
                //                     }
                //                 }
                
                //                 if (ultimoPerto != pertos[pertos.length - 1]) {
                //                     console.log("Novo elemento '.perto' encontrado");
                //                     await ChutarPerto();
                //                     return;
                //                 }

                //                 if (sair) {
                //                     return;
                //                 }

                //                 input.value = re;
                //                 respostasEnviadas.add(re);

                //                 await new Promise(resolve => {
                //                     form.addEventListener('submit', () => {
                //                         resolve();
                //                     }, { once: true });
                //                     form.requestSubmit();
                //                 });

                //                 await delay(80);
                //             }
                //         }
                //     }
                // }

                if (respostasEnviadas.has(perto)) {
                    console.log("Resposta já enviada:", perto);
                    continue;
                }

                if (ContemAcertos()) {
                    LimparPertos();
                    LimparDicas();
                    LimparAcertos();
                    return;
                }

                // if (ultimoPerto != pertos[pertos.length - 1]) {
                //     console.log("Novo elemento '.perto' encontrado");
                //     ChutarPerto();
                //     return;
                // }

                if (sair) {
                    return;
                }

                input.value = perto;
                respostasEnviadas.add(perto);

                console.log(perto);

                await new Promise(resolve => {
                    form.addEventListener('submit', () => {
                        resolve();
                    }, { once: true });
                    form.requestSubmit();
                });
        
                await Delay(300);
            }
        }

        const filtraResp = resp.flat().filter(res => listaPerto.flat().some(per => res.includes(per)));

        console.log(filtraResp);

        for (let resp of filtraResp) {
            const respostas = document.getElementById('respostas');
            const pertos = respostas.querySelectorAll('.perto');
            // const ListaRespPendentes = respostas.querySelectorAll('.enviando');

            // for (let ListaRespPendente of ListaRespPendentes) {
            //     const respPendente = ListaRespPendente.textContent;

            //     if (respPendente.includes(':')) {
            //         const partes = respPendente.split(':');
    
            //         if (partes.length > 1) {
            //             const resp = partes[1].trim().split(' ');

            //             for (let res of resp) {
            //                 const respostas = document.getElementById('respostas');
            //                 const pertos = respostas.querySelectorAll('.perto');

            //                 const re = res.trim();

            //                 if (respostasEnviadas.has(re)) {
            //                     console.log("Resposta já enviada:", re);
            //                     continue;
            //                 }

            //                 if (acertos.length > 0) {
            //                     const ultimoAcerto = acertos[acertos.length - 1];
            //                     const conteudo = ultimoAcerto.innerHTML;
                
            //                     if (conteudo.match(/Você acertou/gi)) {
            //                         LimparPertos();
            //                         LimparAcertos()
            //                         return;
            //                     }
            //                 }

            //                 if (ultimoPerto != pertos[pertos.length - 1]) {
            //                     console.log("Novo elemento '.perto' encontrado");
            //                     ChutarPerto();
            //                     return;
            //                 }

            //                 if (sair) {
            //                     return;
            //                 }

            //                 input.value = re;
            //                 respostasEnviadas.add(re);

            //                 await new Promise(resolve => {
            //                     form.addEventListener('submit', () => {
            //                         resolve();
            //                     }, { once: true });
            //                     form.requestSubmit();
            //                 });

            //                 await delay(80);
            //             }
            //         }
            //     }
            // }

            if (respostasEnviadas.has(resp)) {
                console.log("Resposta já enviada:", resp);
                continue;
            }

            if (ContemAcertos()) {
                LimparPertos();
                LimparDicas();
                LimparAcertos();
                return;
            }

            if (ultimoPerto != pertos[pertos.length - 1]) {
                console.log("Novo elemento '.perto' encontrado");
                ChutarPerto();
                return;
            }

            if (sair) {
                return;
            }

            input.value = resp;
            respostasEnviadas.add(resp);

            console.log(resp);

            await new Promise(resolve => {
                form.addEventListener('submit', () => {
                    resolve();
                }, { once: true });
                form.requestSubmit();
            });
    
            await Delay(300);
        }
    }
}

async function DicasPendentes(respValidas, indiceInicial) {
    const form = document.querySelector('#formResposta');
    const input = form.querySelector('input');

    if (!input) {
        console.error("Elemento de entrada não encontrado.");
        return;
    }

    for (let i = indiceInicial; i < respValidas.length; i++) {
        const resp = respValidas[i];

        if (respostasEnviadas.has(resp)) {
            console.log("Resposta já enviada:", resp);
            continue;
        }

        if (ContemAcertos()) {
            LimparPertos();
            LimparDicas();
            LimparAcertos();
            indiceAtual = 0;
            return;
        }

        if (sair) {
            return;
        }

        input.value = resp;
        respostasEnviadas.add(resp);

        console.log(resp);

        await new Promise(resolve => {
            form.addEventListener('submit', () => {
                resolve();
            }, { once: true });
            form.requestSubmit();
        });

        await Delay(300);
    }

    indiceAtual = 0;
}

async function Dica() {
    let respValidas = [];
    let ultimaDica;

    const respostas = document.getElementById('respostas');
    const dicas = respostas.querySelectorAll('.dica');

    if (!dicas) {
        console.log("Elemento '.dica' não encontrado.");
        return;
    }

    if (dicas.length > 0) {
        ultimaDica = dicas[dicas.length - 1];
        const conteudo = ultimaDica.innerHTML;

        if (conteudo.match(/Dica/gi)) {
            const filtraConteudo = conteudo
                .replace(/.*Dica \(\d+\): /i, '')
                .replace(/&nbsp;/g, '')
                .replace(/__&nbsp;/g, ' ')
                .replace(/__/g, ' ')
                .replace(/_/g, '')
                .toLowerCase();

            const conteudoFiltrado = filtraConteudo.split('');

            console.log(conteudoFiltrado);

            for (let i = 0; i < resp.length; i++) {
                const respLine = resp[i];
                for (let j = 0; j < respLine.length; j++) {
                    const respCol = respLine[j];

                    if (respCol.length === conteudoFiltrado.length) {
                        let validaResp = true;

                        for (let k = 0; k < respCol.length; k++) {
                            if (conteudoFiltrado[k] !== ' ' && conteudoFiltrado[k] !== respCol[k]) {
                                validaResp = false;
                                break;
                            }
                        }

                        if (validaResp) {
                            respValidas.push(respCol);
                        }
                    }
                }
            }
        }
    }

    const form = document.querySelector('#formResposta');
    const input = form.querySelector('input');

    const tamanho = 40;
    const indiceFinal = indiceAtual + tamanho;

    for (let i = indiceAtual; i < Math.min(indiceFinal, respValidas.length); i++) {
        const resp = respValidas[i];

        const respostas = document.getElementById('respostas');
        const novasDicas = respostas.querySelectorAll('.dica');
        // const pertos = respostas.querySelectorAll('.perto');
        // const ListaRespPendentes = respostas.querySelectorAll('.enviando');

        // for (let ListaRespPendente of ListaRespPendentes) {
        //     const respPendente = ListaRespPendente.textContent;

        //     if (respPendente.includes(':')) {
        //         const partes = respPendente.split(':');

        //         if (partes.length > 1) {
        //             const resp = partes[1].trim().split(' ');

        //             for (let res of resp) {
        //                 const respostas = document.getElementById('respostas');
        //                 const dicas = respostas.querySelectorAll('.dica');

        //                 const re = res.trim();

        //                 if (respostasEnviadas.has(re)) {
        //                     console.log("Resposta já enviada:", re);
        //                     continue;
        //                 }

        //                 if (acertos.length > 0) {
        //                     const ultimoAcerto = acertos[acertos.length - 1];
        //                     const conteudo = ultimoAcerto.innerHTML;
        
        //                     if (conteudo.match(/Você acertou/gi)) {
        //                         LimparDicas();
        //                         LimparAcertos()
        //                         return;
        //                     }
        //                 }
        
        //                 if (ultimaDica != dicas[dicas.length - 1]) {
        //                     console.log("Nova dica encontrada");
        //                     Dica();
        //                     return;
        //                 }

        //                 if (sair) {
        //                     return;
        //                 }

        //                 input.value = re;
        //                 respostasEnviadas.add(re);

        //                 await new Promise(resolve => {
        //                     form.addEventListener('submit', () => {
        //                         resolve();
        //                     }, { once: true });
        //                     form.requestSubmit();
        //                 });

        //                 await delay(100);
        //             }
        //         }
        //     }
        // }

        if (respostasEnviadas.has(resp)) {
            console.log("Resposta já enviada:", resp);
            continue;
        }

        if (ContemAcertos()) {
            LimparPertos();
            LimparDicas();
            LimparAcertos();
            indiceAtual = 0;
            return;
        }

        if (ultimaDica !== novasDicas[novasDicas.length - 1]) {
            console.log("Nova dica encontrada");
            indiceAtual = 0;
            await Dica(respValidas);
            return;
        }

        // if (ultimoPerto != pertos[pertos.length - 1]) {
        //     console.log("Novo elemento '.perto' encontrado");
        //     ChutarPerto();
        //     return;
        // }

        if (sair) {
            return;
        }

        input.value = resp;
        respostasEnviadas.add(resp);

        console.log(resp);

        await new Promise(resolve => {
            form.addEventListener('submit', () => {
                resolve();
            }, { once: true });
            form.requestSubmit();
        });

        await Delay(300);
    }

    if (indiceFinal < respValidas.length) {
        indiceAtual = indiceFinal;
        await DicasPendentes(respValidas, indiceFinal);
    } else {
        indiceAtual = 0;
    }
}

async function Tryhardar() {
    tryhardando = true;
    sair = false;
    indiceAtual = 0;
    respostasEnviadas.clear();

    // LimparRespostasPendentes();
    LimparAcertos();

    await Chutar();
    await ChutarPerto()
    await Dica();

    LimparPertos();
    LimparDicas();
}

var executar = document.createElement('button');
executar.innerText = 'Executar';

executar.style.position = 'fixed';
executar.style.bottom = '20px';
executar.style.left = '20px';
executar.style.zindice = '9999';

document.body.appendChild(executar);

executar.addEventListener('click', Tryhardar);

var parar = document.createElement('button');
parar.innerText = 'Parar';

parar.style.position = 'fixed';
parar.style.bottom = '20px';
parar.style.left = '120px';
parar.style.zindice = '9999';

document.body.appendChild(parar);

parar.addEventListener('click', function() {
        sair = true;
    });

document.body.addEventListener('keydown', async (e) => {
    if (e.keyCode === 16) {
        Tryhardar();
    } else if (e.keyCode === 13) {
        sair = true;
    }
});