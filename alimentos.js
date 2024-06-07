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
    ['maçã', 'molh', 'milho', 'mous'],
    ['ovo'],
    ['gema'],
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
    ['Vinh', 'Água', 'óleo'],
    ['abac', 'abiu', 'abricó', 'acarajé'],
    ['acelga', 'acerola', 'adoçante', 'agrião'],
    ['aguardente', 'aipim', 'aipo', 'alca'],
    ['alecrim', 'alfa', 'almeirão', 'almôndega'],
    ['alpiste', 'amaranto', 'ambrosia', 'ameixa'],
    ['amendoim', 'amora', 'amêndoa', 'angu'],
    ['araçá', 'aspargo', 'aveia', 'avelã'],
    ['açafrão', 'açaí', 'baba', 'bacalhau'],
    ['bacon', 'bacuri', 'baguete', 'barra'],
    ['batida', 'baunilha', 'bauru', 'beijinho'],
    ['beirute', 'bengala', 'berinjela', 'bertalha'],
    ['beterraba', 'bombom', 'brevidade', 'brigadeiro'],
    ['brioche', 'bisteca', 'brócolis', 'burritos'],
    ['cabelo', 'cacau', 'cachaça', 'cachorro'],
    ['caipirinha', 'cajamanga', 'caju', 'cajá'],
    ['calabresa', 'camarão', 'cambucá', 'camu-camu'],
    ['canapé', 'canela', 'canelone', 'galinha'],
    ['canjica', 'capelete', 'capim', 'cappuccino'],
    ['caqui', 'cara', 'caruru', 'casadinho'],
    ['castanha', 'caviar', 'cenoura', 'cere'],
    ['cerveja', 'champ', 'chantilly', 'cheddar'],
    ['cheesecake', 'cheiro', 'chester', 'chic'],
    ['chim', 'chope', 'chuc', 'churr'],
    ['clara', 'coca', 'coco', 'coentro'],
    ['cogumelo', 'colorau', 'cominho', 'conhaque'],
    ['cookies', 'costela', 'coxinha', 'cozido'],
    ['cravo', 'crepe', 'croissant', 'croquete'],
    ['cupcake', 'cupuaçu', 'curau', 'curry'],
    ['curry', 'cuscuz', 'damasco', 'dobradinha'],
    ['empa', 'endívia', 'energético', 'erva-doce'],
    ['ervilha', 'esca', 'esfirra', 'espaguete'],
    ['espetinho', 'espinafre', 'farinha', 'farofa'],
    ['fermento', 'figo', 'fogazza', 'fondue'],
    ['framboesa', 'funghi', 'gabiroba', 'ganache'],
    ['geleia', 'gema', 'gengibre', 'gergelim'],
    ['glacê', 'goia', 'gorgonzola', 'granola'],
    ['graviola', 'groselha', 'grumixama', 'grão'],
    ['guacamole', 'guaraná', 'hambúrguer', 'ingá'],
    ['inhame', 'iogurte', 'jabuticaba', 'jaca'],
    ['jambo', 'jamelão', 'jataí', 'jatobá'],
    ['jenipapo', 'jerimum', 'jiló', 'jujuba'],
    ['kafta', 'ketchup', 'kiwi', 'laranja'],
    ['lasanha', 'lentilha', 'lichia', 'licor'],
    ['lima', 'limonada', 'limão', 'linguiça'],
    ['linhaça', 'lombo', 'louro', 'macadâmia'],
    ['maionese', 'maisena', 'malagueta', 'mamão'],
    ['mandi', 'mang', 'manj', 'manteiga'],
    ['maracujá', 'margarina', 'mari', 'marm'],
    ['marshmallow', 'maxixe', 'mel', 'melancia'],
    ['melão', 'menta', 'merengue', 'milkshake'],
    ['mingau', 'mirtilo', 'misto', 'morango'],
    ['mortadela', 'mostarda', 'muffin', 'muqueca'],
    ['murici', 'muçarela', 'músculo', 'nabo'],
    ['nachos', 'nectarina', 'nhoque', 'noz-moscada'],
    ['nozes', 'nuggets', 'nêspera', 'olho'],
    ['omelete', 'orobô', 'orégano', 'italiana'],
    ['palmito', 'pamonha', 'panetone', 'panqueca'],
    ['papo', 'parmesão', 'pasta', 'pastilha'],
    ['patê', 'pavê', 'paçoca', 'pepino'],
    ['pepperoni', 'pequi', 'pera', 'pernil'],
    ['petit', 'picanha', 'picles', 'picolé'],
    ['pinha', 'pinhão', 'pirulito', 'pirão'],
    ['pistache', 'pitanga', 'pitaya', 'pitomba'],
    ['pizza', 'polenta', 'polvilho', 'presunto'],
    ['profiteroles', 'provolone', 'purê', 'pão'],
    ['gali', 'moleque', 'pêssego', 'quentão'],
    ['quiabo', 'quibe', 'quin', 'raba'],
    ['rapadura', 'ravioli', 'refrigerante', 'ricota'],
    ['riso', 'rocambole', 'rolinho', 'romã'],
    ['rondele', 'rosbife', 'rosquinha', 'rum'],
    ['rúcula', 'sagu', 'salame', 'salgadinho'],
    ['salpicão', 'salsa', 'sals', 'sanduíche'],
    ['sapoti', 'saquê', 'sarapatel', 'sashimi'],
    ['sequilho', 'sidra', 'siriguela', 'soja'],
    ['sonho', 'strogonoff', 'sushi', 'suflê'],
    ['sundae', 'suspiro', 'tacacá', 'taco'],
    ['talharim', 'tamarindo', 'tangerina', 'tapioca'],
    ['temaki', 'tequila', 'tiramisu', 'tofu'],
    ['tomilho', 'toranja', 'torr', 'trigo'],
    ['trufa', 'tucupi', 'tâmara', 'umbu'],
    ['urucum', 'uísque', 'vagem', 'vatapá'],
    ['vina', 'vodca', 'waffles', 'wasabi'],
    ['yakisoba']
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
let tempos = [];

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

function LimparTempo() {
    tempos = [];
}

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

        const chute = subChute.join(' ');

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

        const inicio = performance.now();

        await new Promise(resolve => {
            form.addEventListener('submit', () => {
                resolve();
            }, { once: true });
            form.requestSubmit();
        });

        await Delay(100);

        const fim = performance.now();
        const tempo = fim - inicio;
        tempos.push(tempo);
        console.log(`${tempo}ms`);

        tempoDiv.innerText = `${tempo.toFixed(2)}ms`;
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
            const filtraResp = resp.flat().filter(res => listaPerto.flat().some(per => res.includes(per)));

            for (let resp of filtraResp) {
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

                if (sair) {
                    return;
                }

                input.value = resp;
                respostasEnviadas.add(resp);

                console.log(resp);

                const inicio = performance.now();

                await new Promise(resolve => {
                    form.addEventListener('submit', () => {
                        resolve();
                    }, { once: true });
                    form.requestSubmit();
                });

                await Delay(300);

                const fim = performance.now();
                const tempo = fim - inicio;
                tempos.push(tempo);
                console.log(`${tempo}ms`);

                tempoDiv.innerText = `${tempo.toFixed(2)}ms`;
            }
        }

        const filtraResp = resp.flat().filter(res => listaPerto.flat().some(per => res.includes(per)));

        console.log(filtraResp);

        for (let resp of filtraResp) {
            const respostas = document.getElementById('respostas');
            const pertos = respostas.querySelectorAll('.perto');

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

            const fim = performance.now();
            const tempo = fim - inicio;
            tempos.push(tempo);
            console.log(`${tempo}ms`);

            tempoDiv.innerText = `${tempo.toFixed(2)}ms`;
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

        const inicio = performance.now();   

        await new Promise(resolve => {
            form.addEventListener('submit', () => {
                resolve();
            }, { once: true });
            form.requestSubmit();
        });

        await Delay(280);

        const fim = performance.now();
        const tempo = fim - inicio;
        tempos.push(tempo);
        console.log(`${tempo}ms`);

        tempoDiv.innerText = `${tempo.toFixed(2)}ms`;
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

        if (sair) {
            return;
        }

        input.value = resp;
        respostasEnviadas.add(resp);

        console.log(resp);

        const inicio = performance.now();   

        await new Promise(resolve => {
            form.addEventListener('submit', () => {
                resolve();
            }, { once: true });
            form.requestSubmit();
        });

        await Delay(280);

        const fim = performance.now();
        const tempo = fim - inicio;
        tempos.push(tempo);
        console.log(`${tempo}ms`);

        tempoDiv.innerText = `${tempo.toFixed(2)}ms`;
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

    LimparAcertos();
    LimparTempo();

    await Chutar();
    await ChutarPerto()
    await Dica();

    LimparPertos();
    LimparDicas();
}

var playDiv = document.createElement('button');
playDiv.innerText = 'Play';

playDiv.style.position = 'fixed';
playDiv.style.width = '48px';
playDiv.style.height = '48px';
playDiv.style.borderRadius = '50%';
playDiv.style.backgroundColor = '#00a0ff';
playDiv.style.color = 'white';
playDiv.style.border = 'none';
playDiv.style.displayDiv = 'flex';
playDiv.style.alignItems = 'center';
playDiv.style.justifyContent = 'center';
playDiv.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.3)';
playDiv.style.zIndex = '9999';
playDiv.style.left = '20px';
playDiv.style.top = 'calc(50% - 56px)';

document.body.appendChild(playDiv);

playDiv.addEventListener('click', Tryhardar);

var pararDiv = document.createElement('button');
pararDiv.innerText = 'Parar';

pararDiv.style.position = 'fixed';
pararDiv.style.width = '48px';
pararDiv.style.height = '48px';
pararDiv.style.borderRadius = '50%';
pararDiv.style.backgroundColor = '#f44336';
pararDiv.style.color = 'white';
pararDiv.style.border = 'none';
pararDiv.style.display = 'flex';
pararDiv.style.alignItems = 'center';
pararDiv.style.justifyContent = 'center';
pararDiv.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.3)';
pararDiv.style.zIndex = '9999';
pararDiv.style.left = '20px';
pararDiv.style.top = 'calc(50% - 0px)';

document.body.appendChild(pararDiv);

pararDiv.addEventListener('click', function () {
    sair = true;
});

var tempoDiv = document.createElement('div');
tempoDiv.innerText = '0ms';
tempoDiv.style.position = 'fixed';
tempoDiv.style.top = 'calc(50% + 60px)';
tempoDiv.style.left = '20px';
tempoDiv.style.fontSize = '14px';
tempoDiv.style.color = 'black';
tempoDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
tempoDiv.style.padding = '5px 10px';
tempoDiv.style.borderRadius = '5px';
tempoDiv.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.3)';
tempoDiv.style.zIndex = '9999';

document.body.appendChild(tempoDiv);

var authorDiv = document.createElement('div');
authorDiv.innerText = 'By Darndest';

authorDiv.style.position = 'fixed';
authorDiv.style.top = '10px';
authorDiv.style.left = '10px';
authorDiv.style.fontSize = '14px';
authorDiv.style.color = 'black';
authorDiv.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
authorDiv.style.padding = '5px 10px';
authorDiv.style.borderRadius = '5px';
authorDiv.style.boxShadow = '0px 2px 10px rgba(0, 0, 0, 0.3)';
authorDiv.style.zIndex = '9999';

document.body.appendChild(authorDiv);

document.body.addEventListener('keydown', async (e) => {
    if (e.keyCode === 16) {
        Tryhardar();
    } else if (e.keyCode === 13) {
        sair = true;
    }
});